const ora = require("ora");

const spinner = ora("Loading unicorns").start();

setTimeout(() => {
  spinner.color = "yellow";
  spinner.text = "Loading rainbows";
  // spinner.succeed("结束");
  spinner.fail("结束");
}, 1000);
