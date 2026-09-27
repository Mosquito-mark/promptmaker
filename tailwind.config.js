/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goa: {
          header: '#003366',       // GoA Header Primary Blue
          headerDark: '#002244',   // GoA Header Darker Shade
          brand: '#0070c4',        // GoA Brand Blue
          primary: '#006dcc',      // Interactive Primary Blue
          primaryHover: '#045092', // Interactive Hover Blue
          secondary: '#e0f1ff',    // Secondary Light Blue
          accent: '#ffc72c',       // GoA Gold/Yellow Accent
          accentHover: '#e6b01e',  // Accent Hover
          bg: '#f1f1f1',           // GoA Content Light Gray Background
          cardBg: '#ffffff',       // White Card Background
          text: '#333333',         // Primary Dark Text
          textMuted: '#5f6a72',    // Muted Gray Text
          border: '#dcdcdc',       // Neutral Border Gray
          borderDark: '#707070',   // Input Border Gray
          borderFocus: '#006dcc',  // Focus Border
          success: '#2e7d32',      // Success Green
          warningBg: '#fff8e1',    // GoA Callout Gold/Yellow Light
          warningBorder: '#ffc72c',// Warning Border
          warningText: '#856404',  // Warning Text
        }
      },
      fontFamily: {
        sans: ['"Acumin Pro SemiCondensed"', '"Acumin Pro"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        mono: ['"Roboto Mono"', 'Consolas', 'Monaco', 'monospace'],
      }
    },
  },
  plugins: [],
}
