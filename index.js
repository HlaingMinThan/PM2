const express=require('express');


let app=express();


app.get('/',(req,res)=>{
    res.send('hi there update')
});
app.listen('4000',()=>{
    console.log('app is up and running')
})