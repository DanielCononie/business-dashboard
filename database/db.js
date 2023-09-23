import { Pool } from "pg";
import dotenv from 'dotenv'
dotenv.config()

const portNum = process.env.PORTNUM
const db_name = process.env.DB_NAME
const password = process.env.DB_PASSWORD
const host = process.env.HOST

    const pool = new Pool({
        user: "postgres",
        password: password,
        host: host,
        port: portNum,
        database: db_name
    });


module.exports = pool;