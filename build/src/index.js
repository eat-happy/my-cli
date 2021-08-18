#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const commands_1 = require("./commands");
const path = require('path');
const packages = require(path.join(process.cwd(), 'package.json'));
const program = new commander_1.Command();
program.version(packages.version);
Object.values(commands_1.default).forEach((item) => {
    program.addCommand(item);
});
program.parse(process.argv);
//# sourceMappingURL=index.js.map