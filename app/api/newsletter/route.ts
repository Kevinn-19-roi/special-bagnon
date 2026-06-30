import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
const schema = z.object({ email: z.string().email() });
export async function POST(request: Request) { const body = Object.fromEntries((await request.formData()).entries()); const parsed = schema.safeParse(body); if (!parsed.success) return NextResponse.json({ error: "Invalid email" }, { status: 400 }); await prisma.newsletterSubscriber.upsert({ where: { email: parsed.data.email }, update: { status: "SUBSCRIBED" }, create: { email: parsed.data.email } }); return NextResponse.redirect(new URL("/newsletter?subscribed=1", request.url)); }
