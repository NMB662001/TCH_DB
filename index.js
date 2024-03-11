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
      const response = await executeQuery(`delete FROM users where brand='def'`);
      console.log(response);
      res.send(response);
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  app.get("/insertdata", async (req, res) => {
    try {
      const response = await executeQuery(`insert into users (name,brand) values('nisha','abc'),('ram','xyz'),('shruti','def'),('krushna','jkl');`);
      console.log(response);
      res.send(response);
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Internal Server Error');
    }
  });

app.listen(port, () => {
  console.log(`Server is listening  check at http://localhost:${port}`);
});
