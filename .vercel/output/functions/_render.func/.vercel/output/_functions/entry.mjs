import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CUF1HHdu.mjs';
import { manifest } from './manifest_DdWYIMpx.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_ZVkbeiXD.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_Daz7HYYj.mjs')],
]);;

const _page0 = () => import('./pages/about.astro.mjs');
const _page1 = () => import('./pages/book/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const _page3 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/about.astro", _page0],
    ["src/pages/book/[id].astro", _page1],
    ["src/pages/index.astro", _page2],
    ["node_modules/.pnpm/astro@5.0.0-beta.2_rollup@4.22.5_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/generic.js", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "88a11a71-681e-45ab-a37a-1bb9acbf6533",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
