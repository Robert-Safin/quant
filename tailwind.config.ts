import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blobLeft: "#665dcd",
        blobMiddle: "#5fa4e6",
        blobRight: "#d2ab67",
        gray: "#E5E5E5",
        bgBlack: "#141619",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
export default config;
