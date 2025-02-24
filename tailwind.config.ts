import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      colors: {
        primary: "#485887",
        darkPrimary: "#3a476d",
        lightPrimary: "#6270a4",
        bg: "#f7f7f7",
        darkBg: "#e0e0e0",
        lightBg: "#ffffff",
        accent: "#ff7a59",
        darkAccent: "#e76f51",
        success: "#4caf50",
        info: "#3498db",
        darkInfo: "#2980b9",
        lightInfo: "#3498db",
        active: "#00f2b5",
        darkActive: "#00d28e",
        error: "#e74c3c",
        warning: "#f1c40f",
      },
    },
  },
  plugins: [],
} satisfies Config;
