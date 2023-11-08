import { sql } from '@vercel/postgres';
import { nanoid } from 'nanoid';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await sql`SELECT * FROM bots`;
    return NextResponse.json({ data: result.rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function POST(request: Request) {
  const { growId, password }: { growId: string; password: string } = await request.json();
  const id = nanoid(10);
  try {
    const result =
      await sql`INSERT INTO bots (id, growid, password) VALUES (${id}, ${growId}, ${password})`;
    return NextResponse.json({ result }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
