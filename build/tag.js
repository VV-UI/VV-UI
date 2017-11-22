require('./check-versions')();
require('shelljs/global');

var inquirer = require('inquirer');
var chalk = require('chalk');
var moment = require('moment');
var path = require('path');
var fs = require('fs');
var semver = require('semver');

var packageJsonPath = path.resolve(process.cwd(), 'package.json');
var packageJson = require(packageJsonPath);
var packageJsonVersion = packageJson.version;

var verOptList = getVersionOptions(packageJsonVersion);

inquirer.prompt([{
    name: 'version',
    message: `选择将要升级的版本(当前版本 ${packageJsonVersion} )：`,
    type: 'list',
    default: 0,
    choices: verOptList
}, {
    name: 'week',
    message: '是否添加发布次数 tag (格式如 16w12a  <year>w<week>[a-z])',
    type: 'confirm',
    default: false
}, {
    name: 'message',
    message: '版本发布说明',
    type: 'input',
    default: ''
}]).then(function (answers) {
    var weekSuffix = answers.week ? '+' + getWeekSubfix(packageJsonVersion) : '';
    var version = `${answers.version}${weekSuffix}`;
    var commitMessage = `"chore(package.json): bump version to ${version}"`;
    var message = `"${answers.message}"` || 'v' + version;
    packageJson.version = version;
    fs.writeFileSync(process.cwd() + '/package.json', JSON.stringify(packageJson, null, '  '));
    var cmd = `git add package.json && git commit -m ${commitMessage} && git tag -a ${version} -m ${message} && git push origin master && git push origin --tags`;

    exec(cmd);

    console.log();
    console.log(chalk.green(`   成功，当前版本为( ${version} ) `));
    console.log();
});

/**
 * 获取发布周数 patch
 */
function getWeekSubfix (version) {
    version = version.split('+');

    var versionSuffix = version[1];
    var year = moment().format('gg');
    var week = moment().format('ww');
    var pubSuffix = '';

    if (!versionSuffix) {
        return `${year}w${week}a`;
    }

    var currentWeek = versionSuffix.match(/\d+w(\d+)(\w+)/)[1];
    var currentPubSuffix = versionSuffix.match(/\d+w(\d+)(\w+)/)[2];

    if(parseInt(week) === parseInt(currentWeek)) {
        // 没有处理达到 Z 的情况
        if (currentPubSuffix === 'z') {
            pubSuffix = 'A';
        } else {
            // 如果是 Z 那么下一个没有处理
            pubSuffix = String.fromCharCode(currentPubSuffix.charCodeAt(0) + 1);
        }
    } else {
        pubSuffix = 'a';
    }

    return `${year}w${week}${pubSuffix}`;
}

/**
 * 获取升级版本列表
 */
function getVersionOptions (version) {
    version = version.split('+');

    var currentVersion = version[0];
    var levels = ['patch', 'minor', 'major'];
    var opts = [];

    levels.forEach(function(item) {
        var val = semver.inc(currentVersion, item);
        opts.push({
            name: val,
            value: val
        })
    });

    return opts;
}

process.on('unhandledRejection', function(a, b) {
    console.log(a, b);
})
