const download = require("download-git-repo");
const { frameworkUrl } = require("../../config.js");
const ora = require("ora");
const chalk = require("chalk");
const downloadfn = (urlKey, project) => {
  const spinner = ora("Loading...").start();
  download(
    "direct:" + frameworkUrl[urlKey],
    project,
    { clone: true },
    (err) => {
      if (err) {
        spinner.fail("fail ！");
      } else {
        spinner.succeed("succeed !");
        console.log(chalk.blue.bold("done!") + "you run:");
        console.log("cd " + project);
        console.log("npm install");
        console.log("npm run dev");
      }
    }
  );
};

module.exports = downloadfn;
