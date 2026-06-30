import { Resend } from "resend";
export const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
export async function sendOrderConfirmation(to: string, orderNumber: string) { if (!resend) return; await resend.emails.send({ from: process.env.EMAIL_FROM ?? "BAGNON STREET <atelier@example.com>", to, subject: "Order " + orderNumber, text: "Your BAGNON STREET order has been recorded." }); }
