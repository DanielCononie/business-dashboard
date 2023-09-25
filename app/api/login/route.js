import pool from "@/database/db"
import { NextResponse } from "next/server";

export async function POST(req) {

    try {
        
        const { username, password } = await req.json();

        const checkUserQuery = "select * from accounts where username=$1 AND password=$2;";
        const values = [username, password]; 

        const result = await pool.query(checkUserQuery, values)
        
        if(result.rows.length > 0) {
            return  NextResponse.json({ msg: ["Login successful!"]})
        } 

        else { 
            return NextResponse.json({ msg: ["username or password is incorrect"]});
        }
        
    } catch (error) {
         console.log(error)
         return NextResponse.json({ msg: ["Error"]});
    }
  }

