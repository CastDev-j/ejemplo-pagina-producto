/* empty css                                   */
import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_B9Ndfwmf.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_COJjU2hu.mjs';
import { B as Breadcrumbs } from '../chunks/Breadcrumbs_B00IiloX.mjs';
import { marked } from 'marked';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Privacy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Privacy;
  const privacyContent = await Astro2.glob(/* #__PURE__ */ Object.assign({"./content/privacy.md": () => import('../chunks/privacy_zdrFU2Zc.mjs').then(n => n._)}), () => "./content/privacy.md");
  const htmlContent = marked(privacyContent[0].rawContent());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Politica de Privacidad", "description": "Politica de Privacidad para la aplicaci\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen max-w-3xl mx-auto px-4 py-8"> ${renderComponent($$result2, "Breadcrumbs", Breadcrumbs, { "items": [{ label: "Politica de Privacidad" }] })} <div class="prose prose-invert prose-sm sm:prose-base max-w-none"> <div>${unescapeHTML(htmlContent)}</div> </div> </main> ` })} `;
}, "C:/Users/Laptop/Desktop/ejemplo-pagina-producto/src/pages/privacy.astro", void 0);

const $$file = "C:/Users/Laptop/Desktop/ejemplo-pagina-producto/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
