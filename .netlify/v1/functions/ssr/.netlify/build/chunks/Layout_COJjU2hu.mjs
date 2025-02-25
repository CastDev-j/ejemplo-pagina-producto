import { e as createComponent, f as createAstro, h as addAttribute, j as renderScript, k as renderHead, i as renderComponent, r as renderTemplate, l as Fragment, n as renderSlot } from './astro/server_B9Ndfwmf.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import { AnimatePresence, motion } from 'framer-motion';
import { FiStar, FiZap, FiBox } from 'react-icons/fi';
import { RiInstagramFill, RiTelegram2Fill, RiTwitterXFill } from 'react-icons/ri';

function PageAnimation(props) {
  return /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: "pageInitial",
      animate: "pageAnimate",
      exit: "pageExit",
      transition: { type: "linear" },
      className: "px-5",
      variants: {
        pageInitial: {
          opacity: 0,
          y: 10
        },
        pageAnimate: {
          opacity: 1,
          y: 0
        },
        pageExit: {
          opacity: 0,
          y: 10
        }
      },
      children: props.children
    }
  ) });
}

const appData = {
  title: "Nombre de la aplicación",
  description: "Descripción de la aplicación. Describe tu aplicación aquí. ¿Qué hace? ¿Por qué es especial?",
  logo: {
    type: "iframe",
    src: "https://api.bohd4n.me/embed/d92TevY2lQhnQnC/emoji1"
  },
  screenshots: {
    iphone: [
      "screenshots/iphone/iphone-01.webp",
      "screenshots/iphone/iphone-02.webp",
      "screenshots/iphone/iphone-03.webp",
      "screenshots/iphone/iphone-04.webp",
      "screenshots/iphone/iphone-05.webp"
      // ...más capturas de pantalla de iPhone
    ],
    ipad: [
      "screenshots/ipad/tablet-01.webp",
      "screenshots/ipad/tablet-02.webp",
      "screenshots/ipad/tablet-03.webp"
      // ...más capturas de pantalla de iPad
    ]
  },
  features: [
    {
      title: "Característica Principal",
      description: "Describe la característica principal de tu aplicación aquí.",
      icon: FiStar
    },
    {
      title: "Otra Característica",
      description: "¿Qué más puede hacer tu aplicación? Cuéntaselo a los usuarios aquí.",
      icon: FiZap
    },
    {
      title: "Una Característica Más",
      description: "Añade otra característica clave de tu aplicación aquí.",
      icon: FiBox
    }
  ],
  faqs: [
    {
      question: "¿Pregunta 1?",
      answer: "La respuesta a la pregunta 1 va aquí."
    },
    {
      question: "¿Pregunta 2?",
      answer: "La respuesta a la pregunta 2 va aquí."
    },
    {
      question: "¿Pregunta 3?",
      answer: "La respuesta a la pregunta 3 va aquí."
    }
  ],
  storeLinks: {
    apple: "#",
    // Reemplaza con tu enlace de App Store
    google: "#"
    // Reemplaza con tu enlace de Google Play
  },
  socialLinks: [
    {
      url: "#",
      icon: RiInstagramFill,
      label: "Instagram"
    },
    {
      url: "#",
      icon: RiTelegram2Fill,
      label: "Telegram"
    },
    {
      url: "#",
      icon: RiTwitterXFill,
      label: "Twitter"
    }
  ]
};

const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "py-8 text-center space-y-4 border-t border-white/5", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center space-x-6 text-sm text-gray-400", children: [
      /* @__PURE__ */ jsx("a", { href: "/privacy", className: "transition-colors hover:text-white", children: "Política de Privacidad" }),
      /* @__PURE__ */ jsx("a", { href: "/terms", className: "transition-colors hover:text-white", children: "Términos del Servicio" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-500", children: /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: appData.title }),
      /* @__PURE__ */ jsx("br", {}),
      "Todos los derechos reservados."
    ] }) })
  ] });
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  const { showFooter = true } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="favicon.png"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url.href, "content")}>${description && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta name="description"${addAttribute(description, "content")}><meta property="og:description"${addAttribute(description, "content")}>` })}`}<meta name="theme-color" content="#000000"><title>${title}</title>${renderScript($$result, "C:/Users/Laptop/Desktop/ejemplo-pagina-producto/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body class="bg-black font-sans text-white"> <div class="mx-auto min-h-screen max-w-[800px]"> ${renderComponent($$result, "PageAnimation", PageAnimation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ui/PageAnimation", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <main> ${renderSlot($$result2, $$slots["default"])} </main> ${showFooter && renderTemplate`${renderComponent($$result2, "Footer", Footer, {})}`}` })} </div> </body></html>`;
}, "C:/Users/Laptop/Desktop/ejemplo-pagina-producto/src/layouts/Layout.astro", void 0);

export { $$Layout as $, appData as a };
