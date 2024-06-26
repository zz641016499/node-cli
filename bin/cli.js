#! /usr/bin/env node

// console.log("mycli");
// console.log(process.argv);
const { program } = require("commander");
// 所有打印信息统一处理模块
const myhelp = require("../lib/core/help.js");
const mycommander = require("../lib/core/mycommander.js");
myhelp(program);
mycommander(program);

program.parse(process.argv);
