const express = require('express');
const app  =express();
const cors = require('cors')
const port = process.env.PORT || 5000;
// course catagory file 
const courseCatagory = require('./data/course_category.json')
// course detail file 
const courseDetail = require('./data/courseDetail.json')
const allDetail = require('./data/detail.json')
// blogs
const blogs = require('./data/blogs.json')
app.use(cors())
app.get('/courseCatagory',(req,res)=>{
    res.send(courseCatagory)
})

app.get('/courseCatagory/:id',(req,res)=>{
    const id = req.params.id;
    const detail = courseDetail.find(detail=>detail.id === id);
    res.send(detail)
    // console.log()
})

app.get('/courseDetail/:id',(req,res)=>{
    const id = req.params.id
    const singleDetail = allDetail.find(d=>d.detail_id === id)
    res.send(singleDetail)
})

// blogs api
app.get('/blogs',(req,res)=>{
    res.send(blogs)
})


app.listen(port,()=>{
    console.log('done')
})