import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./features/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#12120f", paper: "#f4f1ea", bone: "#ded7c8", smoke: "#8b897f", asphalt: "#252521", signal: "#8f1f1f" }, fontFamily: { sans: ["var(--font-sans)", "Arial", "sans-serif"], editorial: ["var(--font-editorial)", "Georgia", "serif"] }, letterSpacing: { caps: "0.08em" }, boxShadow: { soft: "0 24px 80px rgba(18,18,15,0.12)" } } }, plugins: [] };
export default config;
