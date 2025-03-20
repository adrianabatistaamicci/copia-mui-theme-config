import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";
import commonjs from "@rollup/plugin-commonjs";
import image from '@rollup/plugin-image';

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    external: [
      "react",
      "react-dom",
      "react-router",
      "react-router-dom",
      "prop-types",
      "@emotion/react",
      "@emotion/styled",
      "@mui/lab",
      "@mui/icons-material",
      "@mui/material",
      "@mui/material/styles",
      "@mui/styles",
    ],
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: "mui-theme-config",
      },
      {
        file: packageJson.module,
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      image(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
