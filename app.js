const express=require('express')
const mongoose=require('mongoose')
const url='mongodc://localhost/mydb'
const app=express()

mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection

con.on('open',function(){
    console.log('Connected to mongodb...')
})

app.use(express.json())

const alRouter=require('./routers/al')
app.use('/al',alRouter)

app.listen(7000,()=>{
    console.log('Server Started');
})
