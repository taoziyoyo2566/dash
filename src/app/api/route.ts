import { NextResponse } from "next/server";

export async function GET() {
  // 现在返回静态数据；将来改成 fetch('https://your-backend/api/sites') 即可
  const data = [
    { id: "1", domain: "notes.example.com", usersCount: 1, createdAt: "2025-08-26" },
    { id: "2", domain: "blog.example.com",  usersCount: 3, createdAt: "2025-08-22" }
  ];
  return NextResponse.json(data);
}