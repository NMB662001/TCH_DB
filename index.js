import express from "express";
import { executeQuery } from "./database.js";
const app = express();
 
const port = 3000;

app.get('/', async (req, res) => {
  res.send("Hello, Server is Up and running");
});

app.get("/getdata", async (req, res) => {
  try {
    const response = await executeQuery(`SELECT * FROM users `);
    console.log(response);
    res.send(response);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get("/deldata", async (req, res) => {
    try {
      const response = await executeQuery(`delete FROM users where id='2af36a23-8cad-4046-b675-9bea4b96e572'`);
      console.log(response);
      res.send(response);
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  app.get("/insertdata", async (req, res) => {
    try {
      const response = await executeQuery(`insert into users (name,brand) values('nita','lmn'),('rupali','pqr'),('shruti','def'),('krushna','jkl');`);
      console.log(response);
      res.send(response);
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Internal Server Error');
    }
  });

app.listen(3000, () => {
  console.log(`Server is listening  check at http://localhost:${port}`);
});
// import express from 'express'

// const app=express();
// const port=3000;
// app.get('/',async(req,res)=>{
// res.send('express')
// })
// app.listen(port,()=>{
//     console.log('server is working')
// });



// import express from "express"
 
// const app = express();
 
// const port = 3000;
 
// (express()).get('/', async(req, res)=>{
//     res.send("Hii! Server is Up and working")
// })
 
 
// (express()).listen(3000, () => {
//     console.log(`Server is listening  check at http://localhost:${3000}`);
//   });
