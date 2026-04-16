import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#050506",
        ink: "#0b0b0d",
        gold: "#d8b45f",
        champagne: "#f2ead7",
        smoke: "#a7abb3"
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      boxShadow: {
        gold: "0 24px 80px rgba(216, 180, 95, 0.16)",
        depth: "0 30px 90px rgba(0, 0, 0, 0.55)"
      }
    }
  },
  plugins: []
};

export default config;
