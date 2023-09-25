import { NextResponse } from "next/server";
import pool from "@/database/db"

export async function POST(request) {

    try {
        const {quarter, revenue, new_hires} = await request.json()

        const query = "INSERT INTO businessdata(quarter, revenue, new_hires) VALUES($1, $2, $3);"
        const values = [quarter, revenue, new_hires]

        await pool.query(query, values)

        return NextResponse.json({msg: ["Success"]})
    } catch (error) {
        return NextResponse.json({msg: ["Information for this quarter is already entered!"]})
    }
}

export async function GET(request) {

    try {
        const query = "SELECT * FROM businessdata";
        const response = await pool.query(query)
        const data = response.rows

        let quarter = [];
        let revenues = [];
        let new_hires = [];

        data.forEach(period => {
            quarter.push(period.quarter);
            revenues.push(period.revenue);
            new_hires.push(period.new_hires)
        });
        return NextResponse.json({
            quarter: quarter,
            revenues: revenues,
            new_hires: new_hires,
        })
    } catch (error) {
        console.log(error)
    }
}