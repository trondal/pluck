import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import nodeResolve from "@rollup/plugin-node-resolve";
import pgk from "./package.json" assert { type: "json" };

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "es",
    sourcemap: true,
  },
  /* input: "src/index.ts",
  output: {
    file: "dist/lib/es5/index.js",
    format: "cjs",
  }, */
  plugins: [
    external(),
    nodeResolve(),
    typescript(),
    commonjs({
      include: /node_modules/,
    }),
  ],
};
