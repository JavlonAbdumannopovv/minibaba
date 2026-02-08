/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",

        bg: "var(--bg)",
        surface: "var(--surface)",
        "bg-dark": "var(--bg-dark)",

        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        "text-inverse": "var(--text-inverse)",

        border: "var(--border)",

        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
      },

      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },

      borderRadius: {
        lg: "var(--radius)",
      },
    },
  },
  plugins: [],
};
