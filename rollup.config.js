import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/lib/es6/index.js",
    format: "es",
  },
  plugins: [typescript()],
};
