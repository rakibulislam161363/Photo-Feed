import { NextResponse } from "next/server";
import { getPhotoById } from "@/lib/Image-data";

export async function GET(request, {params}){
    const {id} = await params;
    const data = getPhotoById(id)

    return NextResponse.json(data)
}