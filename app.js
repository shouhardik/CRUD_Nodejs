const express=require('express')
const mongoose=require('mongoose')
const url='mongodb://localhost:27017/usersdb'
const app=express()

mongoose.connect(url,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
    })
const con=mongoose.connection

con.on('open',()=>{
    console.log('Connected to mongodb...')
})

app.use(express.json() )

const alRouter=require('./routers/al')
app.use('/al',alRouter)

app.listen(3000,()=>{
    console.log('Server Started');
})
