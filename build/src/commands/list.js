"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command('list').alias('ls');
const path = require('path');
const config = require(path.join(process.cwd(), 'hq.json'));
program.description('show list').action(function () {
    console.table(config);
});
exports.default = program;
//# sourceMappingURL=list.js.map