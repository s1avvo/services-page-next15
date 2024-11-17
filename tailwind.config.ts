import type { Config } from "tailwindcss";
import TypographyPlugin from "@tailwindcss/typography";
import Animate from "tailwindcss-animate";

const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{ts,tsx,mdx}"],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				tertiary: {
					DEFAULT: "hsl(var(--tertiary))",
					foreground: "hsl(var(--tertiary-foreground))",
				},
				paragraf: {
					DEFAULT: "hsl(var(--paragraf))",
					foreground: "hsl(var(--paragraf-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				cardblue: {
					DEFAULT: "hsl(var(--cardblue))",
					foreground: "hsl(var(--cardblue-foreground))",
				},
			},

			fontSize: {
				"10xl": ["10.6rem", { lineHeight: ".9" }],
				sm: [
					"0.8rem",
					{
						lineHeight: "1.35rem",
						letterSpacing: "0.015em",
						fontWeight: "300",
					},
				],
				base: [
					"1rem",
					{
						lineHeight: "1.8rem",
						letterSpacing: "-0.005em",
						fontWeight: "300",
					},
				],
				lg: [
					"1.23rem",
					{
						lineHeight: "2.08rem",
						letterSpacing: "-0.005em",
						fontWeight: "300",
					},
				],
				xl: [
					"1.57rem",
					{
						lineHeight: "2.08rem",
						letterSpacing: "-0.015em",
						fontWeight: "500",
					},
				],
				"2xl": [
					"2.09rem",
					{
						lineHeight: "2.88rem",
						letterSpacing: "-0.01em",
						fontWeight: "700",
					},
				],
				"3xl": [
					"3.15rem",
					{
						lineHeight: "3.74rem",
						letterSpacing: "-0.01em",
						fontWeight: "900",
					},
				],
				"4xl": [
					"3.92rem",
					{
						lineHeight: "4.65rem",
						letterSpacing: "0em",
						fontWeight: "900",
					},
				],
				"5xl": [
					"4.71rem",
					{
						lineHeight: "6rem",
						letterSpacing: "0em",
						fontWeight: "900",
					},
				],
			},

			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"infinite-scroll": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(-100%)" },
				},
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"caret-blink": {
					"0%,70%,100%": { opacity: "1" },
					"20%,50%": { opacity: "0" },
				},
			},

			animation: {
				"infinite-scroll": "infinite-scroll 25s linear infinite",
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"caret-blink": "caret-blink 1.25s ease-out infinite",
			},

			screens: {
				xs: "420px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1440px",
			},
		},
	},
	plugins: [TypographyPlugin, Animate],
} satisfies Config;

export default config;
