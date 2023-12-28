const express=require('express');
const mongoose=require('mongoose')
const dotenv=require('dotenv');
      dotenv.config();
const app=express();


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to MongoDB')
}).catch((err)=>{
    console.log(err)
})

app.listen(8000,()=>{
    console.log('Server is Live at 8000 port');
})