const express = require("express");
const bodyparser= require("body-parser");

const app=  express();
app.set("view engine", 'ejs');
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname+"/css"))

var items =[];
var workItem=[];
app.get("/", (req, res)=>{
    const today= new Date();
   
var options={
    weekday: "long",
    day: "numeric",
    month:"long"
};

var day=today.toLocaleDateString("en-US", options);
res.render("list", {listTitle: day,addedtext: items});
});


app.get("/work", (req, res)=>{
    res.render("list", {listTitle: "Work list",addedtext: workItem});
   });

app.post("/",(req,res)=>{
    var text=req.body.text1;
   
    if(req.body.submit==="Work"){
        workItem.push(text);
        res.redirect("/work");
    }
    else{
    items.push(text);
    res.redirect("/");
    }
});


const port= process.env.PORT || 3000;
app.listen(port,function(){
    console.log("started the server"+port);
})