const express=require('express')
const router=express.Router()
const Student=require('../models/student')

router.get('/',async(req,res)=>{
    try{
        const student=await Student.find()
        res.json(student)
    }catch(err){
        res.send("Error "+ err)
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const student=await Student.findById(req.params.id)
        res.json(student)
    }catch(err){
        res.send("Error "+err)
    }
})

router.post('/',async(req,res)=>{
    
        const student= new Student({
            name: req.body.name,
            rollno: req.body.rollno,
            age: req.body.age
        })
    try{
     const stu1 = await student.save()
     res.json(stu1)
    }catch(err){
        res.send("Error "+ err)
    }

})
router.put('/:id',async(req,res)=>{
    try{
        const student=await Student.findById(req.params.id)
        student.name=req.body.name
        student.rollno=req.body.rollno
        student.age=req.body.age
        const stu1= await student.save()
        res.json(stu1)
    }catch(err){
        res.send(err)
    }
})

router.patch('/:id', async(req,res)=>{
    try{
        const student=await Student.findById(req.params.id)
        student.age=req.body.age
        const stu1=await student.save()
        res.json(stu1)
    }catch(err){
        res.send('error')
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const student= await Student.findByIdAndRemove(req.params.id)
        res.send("remove")
    }catch(err){
        res.send("student not find")
    }
})

module.exports=router