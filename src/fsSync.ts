import { log } from 'console';
import * as fs from 'fs'

try {
    fs.writeFileSync('./src/text/output.txt', 'Hello, World!');
    console.log('File written successfully.');
} catch (error) {
    console.error('Error writing file:', error);
}

try {
    const data = fs.readFileSync('./src/text/example1.txt', 'utf-8');
    console.log('File Content:', data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
  
fs.existsSync('src/text/example1.txt')?console.log('file exists'):console.log('no such a file/directory');

try {
  fs.appendFileSync('src/text/exe2.txt','written new contents')
  log('append new contents successfully')
} catch (error) {
  log(error)
}
