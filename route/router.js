const express=require('express')

const Route=express.Router();


Route.get("/", (req, res, next)=>{
    res.render("home")
})
Route.get('/about/:name', (req, res, next)=>{
    res.render("about", {name: req.params.name})
});

module.exports=Route;
