import { w as head } from "../../chunks/index.js";
import { a as attr } from "../../chunks/attributes.js";
const favicon = "/_app/immutable/assets/favicon.DVlVChHU.ico";
function _layout($$payload, $$props) {
  let { children } = $$props;
  head($$payload, ($$payload2) => {
    $$payload2.out.push(`<link rel="icon"${attr("href", favicon)}/>`);
  });
  children?.($$payload);
  $$payload.out.push(`<!---->`);
}
export {
  _layout as default
};
