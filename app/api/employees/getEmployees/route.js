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

export async function DELETE(request) {
    try {
        const {id} = await request.json();
        await pool.query("DELETE FROM employees WHERE empid=$1", [id])
        return NextResponse.json({
            msg: ["Data deleted"]
        })
    } catch (error) {
        return NextResponse.json({
            msg: ["entry could not be deleted!"]
        })
    }
}