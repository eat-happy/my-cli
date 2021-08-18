"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command('add');
const path = require('path');
const configPath = path.join(process.cwd(), 'hq.json');
const config = require(configPath);
const fse = require('fs-extra');
const inquirer = require('inquirer');
const chalk = require('chalk');
program.description('add item to list').option('-n --name <name>', 'the item name')
    .option('-v --value <value>', 'the item value')
    .action(async function ({ name, value }) {
    if (!name) {
        const answer = await inquirer.prompt({ name: 'name', message: `the item name` });
        name = answer.name;
    }
    if (!value) {
        const answer = await inquirer.prompt({ name: 'value', message: `the item value` });
        value = answer.value;
    }
    config[name] = value;
    fse.writeFileSync(configPath, JSON.stringify(config, null, 2));
    console.log(chalk.green('add successfully!'));
});
exports.default = program;
//# sourceMappingURL=add.js.map