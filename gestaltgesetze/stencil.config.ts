import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "gestaltgesetze",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    }
  ]
};