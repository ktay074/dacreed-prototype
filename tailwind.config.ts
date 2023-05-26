import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      fontFamily: {
        sans:['Work Sans']
      },
    },
  },
  plugins: [],
} satisfies Config;
