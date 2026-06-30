import { AdminShell } from "@/components/admin-shell";
import { adminModules } from "@/lib/admin";
export const metadata = { title: "Admin" };
export default function AdminPage() { return <AdminShell><p className="eyebrow">Operations</p><h1 className="mt-3 font-editorial text-6xl">Control room</h1><div className="mt-10 grid gap-4 md:grid-cols-3">{adminModules.map((item) => <a href={item.href} key={item.href} className="focus-ring border border-ink/10 bg-white/35 p-5"><p className="text-lg">{item.label}</p><p className="mt-4 text-sm text-ink/60">{item.metric}</p></a>)}</div></AdminShell>; }
