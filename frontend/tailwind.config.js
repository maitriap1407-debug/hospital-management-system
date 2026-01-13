/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#2563EB', // MediBook Blue
                secondary: '#1E40AF', // MediBook Dark Blue
                accent: '#EFF6FF', // Light Blue background
                surface: '#FFFFFF',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
