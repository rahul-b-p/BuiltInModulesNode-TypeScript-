import { log } from 'node:console';
import * as fs from 'node:fs/promises';
const readFile = async () => {
    await fs.readFile('src/text/exe2.txt', 'utf-8').then((data) => {
        log(data);
    }).catch((error) => {
        log(error);
    });
};
readFile();
const writeFile = async () => {
    await fs.writeFile('src/text/exe3.txt', 'HelloWorld').then(() => {
        log('Written');
    }).catch((error) => {
        log(error);
    });
};
writeFile();
const appendFile = async (filePath, content) => {
    await fs.appendFile(filePath, content).then(() => {
        log('file appended successfully');
    }).catch((err) => {
        log(err);
    });
};
appendFile('./src/text/example1.txt', 'Promise Appended');
