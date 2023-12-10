import { NextResponse } from "next/server"
import { fetchLatestInvoices } from '@/app/lib/data';

export async function GET(request: Request) {
  const revenue = await fetchLatestInvoices();

  return NextResponse.json(revenue)
}