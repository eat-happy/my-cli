import {Command} from 'commander'

const program = new Command('remove').alias('rm')
const inquirer = require('inquirer');
const path = require('path')
const configPath = path.join(process.cwd(), 'hq.json')
const config = require(configPath)
const fse = require('fs-extra')
const chalk = require('chalk')


program.description('remove item in list').option('-n --name <name>', 'the item name')
  .action(async function ({name}) {
    if (!name) {
      const answer = await inquirer.prompt({name: 'name', message: `the item name`})
      name = answer.name
    }
    if (!config.hasOwnProperty(name)) {
      console.log(chalk.red('item not found'))
      return
    }
    delete config[name]
    fse.writeFileSync(configPath, JSON.stringify(config, null, 2))
    console.log(chalk.green('remove successfully!'))
  })

export default program
