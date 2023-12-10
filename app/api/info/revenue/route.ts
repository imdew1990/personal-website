import { NextResponse } from "next/server"
import { fetchRevenue} from '@/app/lib/data';

export async function GET(request: Request) {
  const revenue = await fetchRevenue();

  return NextResponse.json(revenue)
}