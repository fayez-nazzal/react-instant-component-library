import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import analyze from "rollup-plugin-analyzer";
import externals from "rollup-plugin-node-externals";
import babel from "@rollup/plugin-babel";
import del from "rollup-plugin-delete";
import { terser } from "rollup-plugin-terser";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";
import json from "@rollup/plugin-json";

import packageJson from "./package.json" assert {
  type: 'json',
  integrity: 'sha384-ABC123'
};

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],

  plugins: [
    del({ targets: "build/*" }),
    // devDependenciesnd and peerDependencies wont be included in the bundle
    // if you want to also exculde dependencies, change deps to true
    externals({ deps: false, devDeps: true, peerDeps: true }),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    babel({
      babelHelpers: "runtime",
      exclude: "**/node_modules/**",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    postcss(),
    terser(),
    analyze(),
    url(),
    svgr(),
    json(),
  ],
};
