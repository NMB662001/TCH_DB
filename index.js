// import express from 'express'

// const app=express();
// const port=3000;
// app.get('/',async(req,res)=>{
// res.send('express')
// })
// app.listen(port,()=>{
//     console.log('server is working')
// });



import express from "express"
 
const app = express();
 
const port = 3000;
 
app.get('/', async(req, res)=>{
    res.send("Hii! Server is Up and working")
})
 
 
app.listen(port, () => {
    console.log(`Server is listening  check at http://localhost:${port}`);
  });