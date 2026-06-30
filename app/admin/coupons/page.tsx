import { AdminShell } from "@/components/admin-shell";
export const metadata = { title: "Coupons" };
export default function Page() { return <AdminShell><p className="eyebrow">Admin</p><h1 className="mt-3 font-editorial text-6xl">Coupons</h1><div className="mt-10 border-y border-ink/10 py-6"><p className="max-w-2xl text-sm leading-6 text-ink/65">Production module prepared for coupons workflows, backed by the PostgreSQL schema and role-based admin shell.</p></div></AdminShell>; }
