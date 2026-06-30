import { NextResponse } from "next/server";
import { z } from "zod";
const schema = z.object({ slug: z.string().min(1), size: z.string().min(1) });
export async function POST(request: Request) { const body = Object.fromEntries((await request.formData()).entries()); const parsed = schema.safeParse(body); if (!parsed.success) return NextResponse.json({ error: "Invalid cart item" }, { status: 400 }); const response = NextResponse.redirect(new URL("/cart", request.url)); response.cookies.set("bs_cart_last", JSON.stringify(parsed.data), { httpOnly: true, sameSite: "lax", path: "/" }); return response; }
