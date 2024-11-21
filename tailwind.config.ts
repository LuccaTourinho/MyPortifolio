import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		container: {
			center: true,
			padding: "15px",
			screens: {
				sm: "640px",
				md: "768px",
				lg: "960px",
				xl: "1200px",
			},
		},
		fontFamily: {
			geistSans: ["var(--font-geist-sans)", "sans-serif"], // Geist Sans
			geistMono: ["var(--font-geist-mono)", "monospace"],  // Geist Mono
			jetBrainsMono: ["var(--font-jetbrains-mono)", "monospace"], // JetBrains Mono
			pacifico: ["var(--font-pacifico)", "cursive"],       // Pacifico
		},
  		colors: {
  			background: "#041625",
  			foreground: "#f2f2f2",
			  primary: "#c0111f",
			  secondary: "#2e6fa8",
			  muted: "#6e7d8c",
			  accent: {
				  DEFAULT: "#a50d29",
				  hover: "#ffffff",
			  },
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
