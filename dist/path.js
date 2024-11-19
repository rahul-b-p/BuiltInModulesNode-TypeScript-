import fs from 'fs';
import path from 'path';
const myPath = path.join(__dirname, "text", "example1.txt");
fs.writeFile(myPath, 'hello world', 'utf8', (err) => {
    err ? console.log(err) : console.log('added file');
});
console.log(path.parse(__dirname));
console.log(path.parse(__filename));
