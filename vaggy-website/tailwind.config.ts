import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        
      },
      colors: {
        primary: " #86BC42 ",
         background: "var(--background)",
         foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
