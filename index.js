const fs=require("fs")

//creating a new file and push the content into it
// fs.writeFileSync("read.txt","welcome to my channel code with danish")

//append or pushing more data in the existed file
// fs.appendFileSync('read.txt','all fine here')

// const data=fs.readFileSync('read.txt')

// const str=data.toString()
// console.log(str)

// fs.renameSync('read.txt','pro.txt')

                    //   ASYNCHRONUS

//writing in asynchronus way in this we have to make a callback function
// fs.writeFile("read.txt","welcome to my channel code with danish",(e)=>
// {
//        console.log("callback ")
// })

// fs.appendFile('read.txt','all fine here',(e)=>
// {
//     console.log("done appending")
// })

// fs.readFile('read.txt',(err,data)=>
// {
//     const p=data.toString()
//     console.log(p)
    
// })





                      //SYNCHRONUS VS ASYNCHROUS


                      
// const data=fs.readFileSync('read.txt','utf-8')                     
// console.log(data)
// console.log("sync")


// const data=fs.readFile('read.txt','utf-8',(err,data)=>
// {
//     const p=data.toString()
// console.log(p)
// })                    
// console.log("sync")


// const add=require('./exp.js')
// console.log(add.msg)

// const chalk=require("chalk")
// console.log(chalk.green.inverse("hello"))

// const val=require("validator")
// const res=val.isEmail('danish@gmail.com')
// console.log(res)
// console.log("danisj")


//MODULE WRAPPER FUNCTION

// (function(module,exports,require,__filename,__dirname )
// {
//     var a="danish"
// console.log(a)
// })()



                   //CREATING A SERVER
             
// const http=require("http")
// const server=http.createServer((req,res)=>
// {
    
//     const data=fs.readFileSync('./api.json','utf-8')
//         const d=JSON.parse(data)


//     console.log(req.url)
//     if(req.url=="/")
//     {
//         res.end("welcome ")
//     }
//     else if(req.url=="/api")
// {
//     res.end(d[0].body)
    
// }
// else{
//     res.writeHead(404)
//     res.end("404 not found")
// }
// })

// server.listen(8000,"127.0.0.1",()=>
// {
//     console.log("listening to port no 8000")
// })



                        //JSON 

// const data=
// {
//     name:"danish",
//     class:9,
//     channel:"cwh"
// };

//converting to json
// const json=JSON.stringify(data)

// const obj=JSON.parse(json)

//dusre file me add krna
// fs.writeFile('json1.json',json,(err)=>
// {
// console.log("done")
// })

//reading the data

// fs.readFile('json1.json','utf-8',(err,data)=>
// {
//     const str=JSON.parse(data)
//     console.log(str.name)
// })

                       //EVENT MODULE

// const eventemitter=require('events')
// const event=new eventemitter()
// event.on('hlo',()=>
// {
//     console.log("an event is called")
// })
// event.emit("hlo")


//NOT THE WAY OF STREAMING
const http=require("http")
// const server=http.createServer()
// server.on('request',(req,res)=>
// {
//     var fs=require("fs")
//     fs.readFile('read.txt',function(err,data)
//     {
// res.end(data.toString())
//     })
// })

// server.listen("8000","127.0.0.1")


//STREAMING
// const server=http.createServer()
// server.on('request',(req,res)=>
// {
// const rstream=fs.createReadStream('read.txt')
// rstream.on('data',(chunk)=>
// {
//     res.write(chunk)
// })
// rstream.on('end',()=>
// {
//     res.end()
// })
// })
// server.listen("8000","127.0.0.1")


//3rd way of STREAM PIPES
const rstream=fs.createReadStream('read.txt')
rstream.pipe