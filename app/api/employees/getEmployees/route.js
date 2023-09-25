import { NextResponse } from "next/server"
import pool from "@/database/db"

export async function GET(request) {

    try {
        
        let employees = await pool.query("SELECT * FROM employees;")
        employees = employees.rows
        
        return NextResponse.json(employees)
    } catch (error) {
        console.log(error)
    }
}