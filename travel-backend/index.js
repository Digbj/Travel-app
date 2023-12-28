const express=require('express');
const mongoose=require('mongoose')
const dotenv=require('dotenv');
      dotenv.config();
const adminRouter=require('./routes/user.route')
const app=express();


//Connecting Mongodb
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to MongoDB')
}).catch((err)=>{
    console.log(err)
})


//Creating the server
app.listen(8000,()=>{
    console.log('Server is Live at 8000 port');
})

app.use('/test',adminRouter);