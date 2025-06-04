import { NextResponse } from "next/server";
import { getUsers } from "../(services)/usersService";

export async function GET() {
    try {
        const users = await getUsers();
        return NextResponse.json({ success: true, data: users });
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? 
            error.message : "An unexpected error occurred";
        return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
      }
}