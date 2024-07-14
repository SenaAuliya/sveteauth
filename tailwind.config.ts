import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        colors:{
            "primary":"#0E46A3",
            "secondary":"#9AC8CD",
            "background":"#1E0342",
            "text":"#E1F7F5",
            "hitam":"#000000"
        },
        extend: {}
    },

    plugins: []
} as Config;