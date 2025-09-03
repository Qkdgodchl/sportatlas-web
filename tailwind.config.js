/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,jsx,mdx}",
        "./src/components/**/*.{js,jsx,mdx}",
        "./src/app/**/*.{js,jsx,mdx}",
    ],
    theme: {
        container: { center: true, padding: "1rem", screens: { lg: "1024px", xl: "1200px" } },
        extend: {
            colors: {
                base: "#0B0B0F",         // 전체 배경
                foreground: "#EDEDED",   // 기본 글자색
                muted: "#A1A1AA",        // 보조 텍스트
                card: "#111218",         // 카드 배경
                border: "#1E2230",       // 테두리
                brand: { DEFAULT: "#6E56CF", fg: "#0B0B0F" }, // 포인트 컬러
            },
            borderRadius: { xl: "1rem", "2xl": "1.25rem" },
            spacing: { 13: "3.25rem", 18: "4.5rem" },
        },
    },
    plugins: [],
};