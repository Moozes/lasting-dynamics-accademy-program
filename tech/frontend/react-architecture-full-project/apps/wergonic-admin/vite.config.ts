/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import eslint from "vite-plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig((args) => {
    return {
        plugins: [
            react(),
            tsconfigPaths(),
            // dont use eslint in dev server, because it is applied on each save and it is making HMR really slow
            ...(args.command === "serve" ? [] : [eslint()]),
            checker({
                typescript: true,
            }),
        ],
        preview: {
            port: 4000,
        },
    };
});
