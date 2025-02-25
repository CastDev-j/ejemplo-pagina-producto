/* empty css                                   */
import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_B9Ndfwmf.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_COJjU2hu.mjs';
import { B as Breadcrumbs } from '../chunks/Breadcrumbs_B00IiloX.mjs';
import { marked } from 'marked';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Terms = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Terms;
  const termsContent = await Astro2.glob(/* #__PURE__ */ Object.assign({"./content/terms.md": () => import('../chunks/terms_DmocZR2p.mjs').then(n => n._)}), () => "./content/terms.md");
  const htmlContent = marked(termsContent[0].rawContent());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Terminos de Servicio", "description": "Terminos de Servicio para la aplicaci\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen max-w-3xl mx-auto px-4 py-8"> ${renderComponent($$result2, "Breadcrumbs", Breadcrumbs, { "items": [{ label: "Terminos de Servicio" }] })} <div class="prose prose-invert prose-sm sm:prose-base max-w-none"> <div>${unescapeHTML(htmlContent)}</div> </div> </main> ` })} `;
}, "C:/Users/Laptop/Desktop/ejemplo-pagina-producto/src/pages/terms.astro", void 0);

const $$file = "C:/Users/Laptop/Desktop/ejemplo-pagina-producto/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
