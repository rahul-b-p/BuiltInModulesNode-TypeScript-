import { log } from 'node:console'
import * as fs from 'node:fs/promises'

const readFile = async (): Promise<void> => {
    await fs.readFile('src/text/exe2.txt', 'utf-8').then((data: string) => {
        log(data)
    }).catch((error: Error) => {
        log(error)
    })
}
readFile();

const writeFile = async (): Promise<void> => {
    await fs.writeFile('src/text/exe3.txt', 'HelloWorld').then(() => {
        log('Written')
    }).catch((error) => {
        log(error)
    })
}
writeFile();

const appendFile =async(filePath:string,content:string):Promise<void>=>{
    await fs.appendFile(filePath,content).then(()=>{
        log('file appended successfully')
    }).catch((err:Error)=>{
        log(err)
    })
}

appendFile('./src/text/example1.txt','Promise Appended')
