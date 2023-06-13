import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/lib/es6/index.js",
    format: "es",
  },
  plugins: [resolve(), typescript()],
  external: [
    "prop-types",
    "react-is",
    "react",
    "react/jsx-runtime",
    //"emotion",
    "hoist-non-react-statics",
    "react-dom",
  ],
};
