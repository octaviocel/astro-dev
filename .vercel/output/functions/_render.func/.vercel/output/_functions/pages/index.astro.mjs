/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../chunks/astro/server_BoAgVVHb.mjs';
import { $ as $$Layout } from '../chunks/Layout_De6svECT.mjs';
import { g as getCollection } from '../chunks/_astro_content_Bzti0lTf.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const books = await getCollection("books");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dev books, libros para programadores" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1 class="text-center text-7xl font-extrabold mb-24">Dev 👨‍💻
<span class="block">Books</span> </h1> <section aria-label="Libros recomendados para programadores"> <div class="px-4 mx-auto max-w-screen-xl"> <div class="grid gap-6 md:grid-cols-2"> ${books.map((book) => {
    const { slug, data } = book;
    const { title, img, readtime, description } = data;
    return renderTemplate`<article class="flex"> <a${addAttribute(`/book/${slug}`, "href")} class="mb-2 xl:mb-0 transition hover:scale-110">  <img class="mr-5 w-48 rounded"${addAttribute(`/${img}`, "src")}${addAttribute(title, "alt")}${addAttribute(renderTransition($$result2, "5bsqwlbb", "", `img-${slug}`), "data-astro-transition-scope")}> </a> <div class="flex flex-col justify-center"> <h2 class="mb-2 text-2xl font-bold leading-tight text-white"${addAttribute(renderTransition($$result2, "f6245za2", "", `title-${slug}`), "data-astro-transition-scope")}> ${title} </h2> <p class="mb-4 text-gray-300 max-w-sm">${description}</p> <span class="text-xs">⏳ Lectura en ${readtime} minutos</span> </div> </article>`;
  })} </div> </div> </section> </main> ` })}`;
}, "C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/pages/index.astro", "self");

const $$file = "C:/Users/octac/OneDrive/Escritorio/CURSOS/astro/dev-books/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
