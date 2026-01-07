import { defineConfig } from "tsup";

export default defineConfig([
    {
        entry: ["src/icons"],
        outDir: "dist",
        splitting: true,
        sourcemap: false,
        clean: true,
        bundle: false,
        format: ["esm", "cjs"],
        dts: true,
        legacyOutput: false,
    },
    {
        entry: ["src/__data_uri/index.ts"],
        outDir: "dist/__data_uri",
        splitting: true,
        sourcemap: false,
        clean: false, // Don't clean, icons are already there
        bundle: false,
        format: ["esm", "cjs"],
        dts: true,
        legacyOutput: false,
    },
]);
