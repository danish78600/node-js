var express=require("express")
const hbs=require("hbs")
var app=express()
//FOR DYNAMIC FILES
hbs.registerPartials('partials')
app.set('view engine','hbs')
app.get('/',(req,res)=>
{
res.render("index")    
})


//FOR STATIC FILES

// app.use(express.static(__dirname+'/public'))


// app.get('/',(req,res)=>
// {
// res.send("proplayer")    
// })

app.listen(8000,()=>
{
    console.log("hogya kaam")
})
