import { NextResponse } from "next/server";
import { suppliers } from "./data";




  export async function GET(request: Request){
    try {
        
        const {searchParams} = new URL(request.url);
        const name = searchParams.get('name');
        if(name){
            const results = suppliers.filter(item => item.name.startsWith(name));
            return NextResponse.json(results);
        }
        
        return NextResponse.json(suppliers);
    } catch (error) {
        return NextResponse.error();
    }
  }

  

  export async function POST(request: Request){

    try {
        
        const nsupplier = await request.json();
        const supplier = {
            
            ...nsupplier,
            id: suppliers.length + 1,
        }
        suppliers.push(supplier);
        return NextResponse.json({status: 200});

    } catch (error) {
        return NextResponse.json({status: 500});
    }

  }