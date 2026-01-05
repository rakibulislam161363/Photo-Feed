import { NextResponse } from "next/server";
import { getAllPhotos } from "@/lib/Image-data";

export async function GET(){
    const data = getAllPhotos();
    return NextResponse.json(data)
}