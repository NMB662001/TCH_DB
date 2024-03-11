import express from "express";
import { executeQuery } from "./database.js";
const app = express();

const port = 3000;

app.get('/', async (req, res) => {
  res.send("Hello, Server is Up and running");
});

app.get("/getdata", async (req, res) => {
  try {
    const response = await executeQuery(`SELECT * FROM cars `);
    console.log(response);
    res.send(response);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.get("/deldata", async (req, res) => {
  try {
    const response = await executeQuery(`delete FROM users where id='d32fb7ad-f014-4a93-9b79-3880e45f813e'`);
    console.log(response);
    res.send(response);
  } catch (error) {
    console.error('Error executing query:', error);
    res.status(500).send('Internal Server Error');
  }
});
// app.get("/insertdata", async (req, res) => {
//   try {
//     const response = await executeQuery(`insert into users (name,brand) values('nita','lmn'),('rupali','pqr'),('shruti','def'),('krushna','jkl');`);
//     console.log(response);
//     res.send(response);
//   } catch (error) {
//     console.error('Error executing query:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });
app.get("/update",async(req,res)=>{
  try{
     const response = await executeQuery('update users set name= "banti" where id="360d4659-74a3-4ddd-948e-e871457b2676"');
  
   console .log(response);
    res.send(response);
  }
  catch(error){
console.error('error executing query:',error);
res.status(500).send('internal server error');
  }
});

app.listen(3000, () => {
  console.log(`Server is listening  check at http://localhost:${port}`);
});




