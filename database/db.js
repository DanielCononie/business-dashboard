// import { Pool } from "pg";
// import dotenv from 'dotenv'
// dotenv.config()

// const portNum = process.env.PORTNUM
// const db_name = process.env.DB_NAME
// const password = process.env.DB_PASSWORD
// const host = process.env.HOST

//     const pool = new Pool({
//         user: "postgres",
//         password: password,
//         host: host,
//         port: portNum,
//         database: db_name
//     });

const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

module.exports = pool;