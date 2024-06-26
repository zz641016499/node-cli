const download = require("download-git-repo");
const ora = require("ora");
download(
  "direct:https://gitee.com/ironpetter/iron-cli-dev.git",
  "my-cli",
  { clone: true },
  (err) => {
    console.log(err);
  }
);
