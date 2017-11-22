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
  message: `是否需要重新构建？`,
  type: 'list',
  default: 0,
  choices: [{
    name: '是',
    value: 1
  }, {
    name: '否',
    value: 0
  }]
}, {
  name: 'message',
  message: '版本发布说明',
  type: 'input',
  default: ''
}]).then(function (answers) {
  let buildCmd = 'npm run build';
  let checkoutCmd = 'git checkout gh-pages';
  let updateCmd = `rm -rf index.html && 
  rm -rf static && 
  cd dist && 
  mv * ../ &&
  rm -rf ./dist && 
  cd .. `;
  let publishCmd = `
  git add . && 
  git commit -m '${answers.message}' &&
  git push`;
  if (answers.conform) {
    console.log(chalk.yellow('\n 正在编译... \n'));
    if (exec(buildCmd).code !== 0) {
      console.log(chalk.red('\n 编译失败 \n'));
      return;
    }
  }
  console.log(chalk.yellow('\n 正在切换到发布分支... \n'));
  if (exec(checkoutCmd).code !== 0) {
    console.log(chalk.red('\n 切换分支失败 \n'));
    return;
  }
  console.log(chalk.yellow('\n 正在更新文件... \n'));
  if (exec(updateCmd).code !== 0) {
    console.log(chalk.red('\n 更新文件失败 \n'));
    return;
  }
  console.log(chalk.yellow('\n 正在发布... \n'));
  if (exec(publishCmd).code !== 0) {
    console.log(chalk.red('\n 发布失败 \n'));
    return;
  }

  console.log();
  console.log(chalk.green(`   发布成功 ) `));
  console.log();
})
