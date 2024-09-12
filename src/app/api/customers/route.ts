import { NextResponse } from "next/server";
import { cookies } from 'next/headers';

import { revalidatePath } from 'next/cache'

export async function GET(request: Request){
    try {
        
        console.log("In customers route handler")
        const url = `http://localhost:9000/customers`;
        const response = await fetch(url, {cache: 'no-store'});
        const customers =  await response.json();
        revalidatePath('/customers')
        
        return NextResponse.json(customers);
    } catch (error) {
        return NextResponse.error();
    }
  }
