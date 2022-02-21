/* eslint-disable @typescript-eslint/no-var-requires */
/*eslint-disable  no-undef  */

const postcssJitProps = require("postcss-jit-props");
const OpenProps = require("open-props");
const PostCSSEnv = require("postcss-preset-env");

module.exports = {
  plugins: [PostCSSEnv(), postcssJitProps(OpenProps)],
};
/*eslint-enable  no-undef  */
/* eslint-enable @typescript-eslint/no-var-requires */
