import { NextResponse } from "next/server";
import { suppliers } from "../data";

export async function GET(request: Request, config: { params:{id: string}}){
    try {
        
        
        const id= Number(config.params.id);
        console.log("params", id);
        if(id){
            const index = suppliers.findIndex(item => item.id === id);
            if(index != -1)
                return NextResponse.json(suppliers[index]);
        }
        
        return NextResponse.json({}, {status: 400});
    } catch (error) {
        console.log(error);
        return NextResponse.json({}, {status: 500});
    }
  }