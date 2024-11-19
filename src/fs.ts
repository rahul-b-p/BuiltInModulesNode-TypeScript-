import { log } from 'console';
import * as fs from 'fs'


fs.readFile('src/text/example1.txt','utf-8',(err,data)=>{
    err?console.log(err):console.log(`Data=${data}`);   
})

fs.writeFile('src/text/exe2.txt','HelloWorld',(err)=>{
    err?console.log(err):console.log('written file'); 
})



const filePath:string = './src/text/example1.txt';
const data:string = '\nThis is appended content!';

fs.appendFile(filePath, data, (err) => {
  if (err) {
    console.error('Error appending data:', err);
  } else {
    console.log('Data appended successfully!');
  }
});
