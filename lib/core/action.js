const inquirer = require("inquirer");
const { framework } = require("../../config.js");
// 下载的远程仓库代码
const downloadFn = require("./download.js");
const myaction = async (project, args) => {
  // 命令行逻辑代码
  // console.log(project, args);
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      choices: framework,
      message: "请选择你要使用的框架",
    },
  ]);

  console.log(answer.framework);
  downloadFn(answer.framework, project);
};

module.exports = myaction;
