import {Command} from 'commander'

const program = new Command('list').alias('ls')
const path = require('path')
const config = require(path.join(process.cwd(), 'hq.json'))
program.description('show list').action(function () {
  console.table(config)
})

export default program
