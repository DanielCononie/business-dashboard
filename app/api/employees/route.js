import { NextResponse } from "next/server";
import pool from "@/database/db"

export async function POST(request) {

    try {
        const {first_name, last_name, job_title, salary} = await request.json()
        const query = "INSERT INTO employees(first_name, last_name, job_title, salary) VALUES($1, $2, $3, $4);"
        const values = [first_name, last_name, job_title, salary]

        await pool.query(query, values)

        return NextResponse.json({msg: ["Data posted"]})
    } catch (error) {
        console.error(error)
        return NextResponse.json({msg: ["Data could not be posted"]})
    }
}

export async function GET(request) {

    try {
        let frontEnd = 0;
        let backEnd = 0;
        let devOps = 0;
        let projMan = 0;

        frontEnd = await pool.query("SELECT COUNT(*) FROM employees WHERE job_title = 'Front-end engineer';")
        frontEnd = frontEnd.rows[0].count

        backEnd = await pool.query("SELECT COUNT(*) FROM employees WHERE job_title = 'Back-end engineer';")
        backEnd = backEnd.rows[0].count

        devOps = await pool.query("SELECT COUNT(*) FROM employees WHERE job_title = 'Dev Ops';")
        devOps = devOps.rows[0].count

        projMan = await pool.query("SELECT COUNT(*) FROM employees WHERE job_title = 'Project manager';")
        projMan = projMan.rows[0].count
        
        return NextResponse.json({
            frontEnd: frontEnd,
            backEnd: backEnd,
            devOps: devOps,
            projMan: projMan
        })
    } catch (error) {
        console.log(error)
    }
}

export async function PUT(request) {

    try {

        const {id, first_name, last_name, job_title, salary } = await request.json();
        const query = "UPDATE employees SET first_name = $1, last_name = $2, job_title = $3, salary = $4 WHERE empid = $5";
        const values = [first_name, last_name, job_title, salary, id];

        await pool.query(query, values)

        return NextResponse.json({msg: ["Put success"]})
    } catch (error) {
         console.error(error)
         return NextResponse.json({msg: ["Put failed"]})
    }

    
}