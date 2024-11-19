import * as fs from 'fs'


fs.readFile('src/text/example1.txt','utf-8',(err,data)=>{
    err?console.log(err):console.log(`Data=${data}`);   
})

fs.writeFile('src/text/exe2.txt','HelloWorld',(err)=>{
    err?console.log(err):console.log('written file'); 
})

fs.existsSync('src/text/example1.txt')?console.log('file exists'):console.log('no such a file/directory');

