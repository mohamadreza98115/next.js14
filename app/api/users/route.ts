import {NextRequest, NextResponse} from "next/server";
import schema from "@/app/api/users/schema";
import prisma from "@/prisma/client";
import bcrypt from "bcrypt";


export const POST = async (request: NextRequest) => {
    const body = await request.json();

    const validation = schema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.format(), {status: 400})
    }

    const password = await bcrypt.hash(body.password, 10);
    const {firstName, lastName, email} = body;

    await prisma.user.create({data: {firstName, lastName, email, password}})
    return NextResponse.json({success: true, message: "User added"}, {status: 200})
}