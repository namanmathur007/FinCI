import mysql from "mysql"
export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "naman12345",
    database:"blog"
  })