import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "",
    database: "hwyd_database",
});

db.connect((error) => {
  if (error) {
    return console.error("Failed to connect database", error);
  }
  console.log("Successfully connected to database");
});