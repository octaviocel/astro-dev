/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_BoAgVVHb.mjs';
import { $ as $$Layout } from '../chunks/Layout_De6svECT.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate`
HOLA ABOUT
` })}`;
}, "C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/pages/about.astro", void 0);

const $$file = "C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
