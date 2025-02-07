import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            assets: "/src/assets",
            app: "/src/app",
            pages: "/src/pages",
            components: "/src/components",
            hooks: "/src/hooks",
            store: "/src/store",
            utils: "/src/utils",
            styles: "/src/styles",
            context: "/src/context",
        },
    },
});
