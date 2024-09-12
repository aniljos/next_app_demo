import { NextRequest, NextResponse } from "next/server";

export default function handler(req: NextRequest){

    console.log("In middleware.." + req.nextUrl);

    NextResponse.next();

}

export const config = {
    matcher: ['/customers', '/products/:path*'], 
  };