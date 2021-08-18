#! /usr/bin/env node
import {Command} from 'commander'
import commands from './commands'

const path = require('path')
const packages = require(path.join(process.cwd(), 'package.json'))
const program = new Command()
program.version(packages.version)
Object.values(commands).forEach((item) => {
  program.addCommand(item)
})

program.parse(process.argv);
