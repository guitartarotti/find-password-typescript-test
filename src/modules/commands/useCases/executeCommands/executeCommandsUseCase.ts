import * as fs from 'fs'
import * as util from 'util'

const readFile = (fileName) => util.promisify(fs.readFile)(fileName, 'utf-8')

class ExecuteCommandsUseCase {
  static async execute (): Promise<number> {
    const checkNumber = function (number:string): number {
      let newNumber = ''
      for (let i = 1; i < number.length; i++) {
        newNumber = newNumber + number[i]
      }
      return Number(newNumber)
    }

    const readCommands = async function (): Promise<number> {
      let address = 0

      const data = await readFile('./instructions/commands.txt')

      const arr = data.split('\n').map(e => e.trim())

      let exclude = 0

      address = arr.reduce((acc, item) => {
        if (exclude === 0) {
          if (item[0] === '5') exclude = checkNumber(item)

          if (item[0] === '2') return acc + checkNumber(item)

          return acc
        } else {
          exclude--
        }
        return acc
      }, 0)

      console.log(address)

      return address
    }

    return await readCommands()
  }
}

export { ExecuteCommandsUseCase }
