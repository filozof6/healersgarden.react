//import { injectBabelPlugin } from "react-app-rewired";
const { injectBabelPlugin } = require("react-app-rewired");
const rootImportConfig = [
  "root-import",
  {
    rootPathPrefix: "~",
    rootPathSuffit: "src"
  }
];

module.exports = config => injectBabelPlugin(rootImportConfig, config);
