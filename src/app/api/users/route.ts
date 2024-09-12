import { NextResponse } from "next/server";

export async function GET(request: Request){

    console.log("users route handler...")
    return NextResponse.json({message: "This is a route handler"});
}