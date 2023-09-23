
import pool from "@/database/db"
import { NextResponse } from "next/server";

export async function POST(req) {

    try {
        
        const { username, password, confirm } = await req.json();
        console.log("Username: " + username);
        console.log("Password: " + password);
        console.log("Confirm: " + confirm); 

        const checkUserQuery = "select * from accounts where username=$1;";
        const value = [username]; 

        const checkValue = await pool.query(checkUserQuery, value)
        console.log(checkValue.rows)
        
        if(checkValue.rows.length > 0) {
            return  NextResponse.json({ msg: ["That username already exists"]})
        } 

        else {
            const insertQuery = "insert into accounts(username, password) values($1, $2);"
            const insertValues = [username, password]

            await pool.query(insertQuery, insertValues)
            
            return NextResponse.json({ msg: ["Account created successfully posted!"]});
        }
        
        
        
    } catch (error) {
         console.log(error)
    }
  
  
    return NextResponse.json({ msg: ["Error"]});
  }

