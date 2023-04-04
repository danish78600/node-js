const os=require("os")
console.log(os.arch())

const free=os.freemem()
console.log(free)

const total=os.totalmem()
console.log(total)

console.log(os.hostname())
console.log(os.platform())