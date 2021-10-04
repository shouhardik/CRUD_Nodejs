const express=require('express')
const router=express.Router()
const Al=require('../models/al')
router.get('/',async(req,res)=>{
    try{
        const al=await Al.find()
        res.json(al)

    }catch(err){
        res.send('Error'+err)
    }
})
router.get('/:id',async(req,res)=>{
    try{
        const als=await Al.findById(req.params.id)
        res.json(als)

    }catch(err){
        res.send('Error'+err)
    }
})

router.post('/',async(req,res)=>{
    const alss=new Al({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub 
    })
    try{
        const a1=await alss.save()
        res.json(a1)

    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const al=await Al.findById(req.params.id)
        al.sub=req.body.sub
        const a1=await al.save()
        res.json(a1)

    }catch(err){
        res.send('Error')

    }
})
module.exports=router