/**
 * @author monkeywang
 * Date: 17/11/22
 */
require('./check-versions')();
require('shelljs/global');

var inquirer = require('inquirer');
var chalk = require('chalk');

inquirer.prompt([{
  name: 'conform',
  message: `确定要发布到线上？`,
  type: 'list',
  default: 0,
  choices: [{
    name: '是',
    value: 1
  }, {
    name: '否',
    value: 0
  }]
}]).then(function (answers) {
  if (answers.conform) {
    return;
  }
  var cmd = `npm run build && 
  git checkout gh-pages && 
  rm -rf index.html && 
  rm -rf static && 
  cd dist && 
  mv * ../
  rm -rf dist`

  exec(cmd);

  console.log();
  console.log(chalk.green(`   发布成功 ) `));
  console.log();
})
