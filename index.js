const express=require('express')

const app=express();
const router=require('./route/router')

const hbs=require("express-handlebars")

app.engine("hbs", hbs({
    extname: "hbs",
    defaultLayout: "main",
    defaultView: "views",
    layoutsDir: __dirname + '/views/layout'
}))
app.set('view engine', 'hbs');

app.use("/public", express.static("public"))


app.use(router)

const port=3000;
app.listen(port, ()=>{
    console.log("Node server is running on port : " + port)
})
