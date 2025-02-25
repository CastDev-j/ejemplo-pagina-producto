/* empty css                                   */
import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_B9Ndfwmf.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as appData } from '../chunks/Layout_COJjU2hu.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

function AppHero({
  title,
  description,
  storeLinks,
  logo
}) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-16 flex flex-col md:flex-row gap-8 min-h-[192px]", children: [
    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-white/10 bg-white/[0.03] p-6 w-[192px]", children: logo.type === "iframe" ? /* @__PURE__ */ jsx(
      "iframe",
      {
        src: logo.src,
        className: "h-40 w-40 rounded-2xl border-0",
        title: "App Logo"
      }
    ) : /* @__PURE__ */ jsx(
      "img",
      {
        src: logo.src,
        alt: "App Icon",
        className: "h-40 w-40 rounded-2xl shadow-lg"
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col h-[225px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-white mb-4", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-l text-gray-400 leading-relaxed line-clamp-5", children: description })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 py-4", children: [
        /* @__PURE__ */ jsx(
          StoreButton,
          {
            store: "apple",
            href: storeLinks.apple,
            label: "Descargar en",
            storeName: "App Store"
          }
        ),
        /* @__PURE__ */ jsx(
          StoreButton,
          {
            store: "google",
            href: storeLinks.google,
            label: "Consíguelo en",
            storeName: "Google Play"
          }
        )
      ] })
    ] })
  ] });
}
function StoreButton({
  store,
  href,
  label,
  storeName
}) {
  const Icon = store === "apple" ? FaApple : FaGooglePlay;
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 transition-all duration-300 hover:bg-white/[0.08]",
      children: [
        /* @__PURE__ */ jsx(
          Icon,
          {
            className: `transition-transform duration-300 group-hover:scale-110 ${store === "apple" ? "w-[22px] h-[22px]" : "w-5 h-5"}`
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "text-left", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[11px] font-medium text-gray-400 group-hover:text-gray-300 transition-colors", children: label }),
          /* @__PURE__ */ jsx("div", { className: "text-[13px] font-semibold tracking-wide group-hover:text-white transition-colors", children: storeName })
        ] })
      ]
    }
  );
}

function DeviceToggle({
  activeDevice,
  onToggle
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] p-1", children: [
    /* @__PURE__ */ jsxs(
      motion.button,
      {
        type: "button",
        onClick: () => onToggle("iphone"),
        className: `relative rounded-md px-3.5 py-1.5 text-sm transition-colors ${activeDevice === "iphone" ? "text-white" : "text-white/60 hover:text-white"}`,
        whileTap: { scale: 0.95 },
        children: [
          activeDevice === "iphone" && /* @__PURE__ */ jsx(
            motion.div,
            {
              layoutId: "activeDevice",
              className: "absolute inset-0 rounded-md bg-white/10",
              transition: { type: "spring", bounce: 0.15, duration: 0.5 }
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "iPhone" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.button,
      {
        type: "button",
        onClick: () => onToggle("ipad"),
        className: `relative rounded-md px-3.5 py-1.5 text-sm transition-colors ${activeDevice === "ipad" ? "text-white" : "text-white/60 hover:text-white"}`,
        whileTap: { scale: 0.95 },
        children: [
          activeDevice === "ipad" && /* @__PURE__ */ jsx(
            motion.div,
            {
              layoutId: "activeDevice",
              className: "absolute inset-0 rounded-md bg-white/10",
              transition: { type: "spring", bounce: 0.15, duration: 0.5 }
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "iPad" })
        ]
      }
    )
  ] });
}

function Screenshots({ images }) {
  const [activeDevice, setActiveDevice] = useState("iphone");
  const currentImages = images[activeDevice];
  return /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold", children: "Capturas de Pantalla" }),
      /* @__PURE__ */ jsx(DeviceToggle, { activeDevice, onToggle: setActiveDevice })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `relative overflow-hidden ${activeDevice === "iphone" ? "min-h-[400px]" : "min-h-[300px]"}`,
        children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -20 },
            transition: { duration: 0.3 },
            className: "screenshots-container scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20",
            onAnimationComplete: () => {
              const container = document.querySelector(
                ".screenshots-container"
              );
              if (container) {
                container.classList.add("overflow-x-auto");
              }
            },
            onAnimationStart: () => {
              const container = document.querySelector(
                ".screenshots-container"
              );
              if (container) {
                container.classList.remove("overflow-x-auto");
              }
            },
            children: /* @__PURE__ */ jsx("div", { className: "flex gap-6 pb-4", children: currentImages.map((image, index) => /* @__PURE__ */ jsx(
              motion.button,
              {
                initial: { opacity: 0, y: 20 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 }
                },
                exit: { opacity: 0, y: 20 },
                type: "button",
                onClick: () => window.openLightbox?.(index, activeDevice),
                className: "relative flex-shrink-0 overflow-hidden rounded-xl focus:outline-none",
                children: /* @__PURE__ */ jsx(
                  motion.img,
                  {
                    src: image,
                    alt: `Screenshot ${index + 1}`,
                    className: `rounded-xl border border-white/10 object-cover ${activeDevice === "iphone" ? "aspect-[9/16] w-[260px]" : "aspect-[4/3] w-[360px]"}`,
                    loading: "lazy",
                    whileHover: {
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }
                  }
                )
              },
              image
            )) })
          },
          activeDevice
        ) })
      }
    )
  ] });
}

function Features({ features }) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-6 text-2xl font-semibold", children: "Características" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-3", children: features.map((feature) => {
      const Icon = feature.icon;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "rounded-2xl border border-white/10 bg-white/[0.03] p-6",
          children: [
            /* @__PURE__ */ jsx("div", { className: "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04]", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6 text-white opacity-90" }) }),
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-lg font-medium", children: feature.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed text-gray-400", children: feature.description })
          ]
        },
        feature.title
      );
    }) })
  ] });
}

function FAQ({ items }) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-6 text-2xl font-semibold", children: "Preguntas Frecuentes" }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: items.map((item) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]",
        children: /* @__PURE__ */ jsxs("details", { className: "group", children: [
          /* @__PURE__ */ jsxs("summary", { className: "flex cursor-pointer items-center justify-between p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "pr-6 font-medium", children: item.question }),
            /* @__PURE__ */ jsxs(
              "svg",
              {
                className: "h-5 w-5 flex-shrink-0 transition-transform group-open:rotate-180",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "aria-label": "Toggle answer",
                children: [
                  /* @__PURE__ */ jsx("title", { children: "Cambiar respuesta" }),
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M19 9l-7 7-7-7"
                    }
                  )
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "px-6 pb-6", children: /* @__PURE__ */ jsx("div", { className: "border-t border-white/5 pt-6", children: /* @__PURE__ */ jsx("p", { className: "text-gray-400", children: item.answer }) }) })
        ] })
      },
      item.question
    )) })
  ] });
}

function Lightbox({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeDevice, setActiveDevice] = useState("iphone");
  const currentImages = images[activeDevice];
  useEffect(() => {
    window.openLightbox = (index, device) => {
      setCurrentIndex(index);
      setActiveDevice(device);
      setIsOpen(true);
    };
  }, []);
  const handlePrevious = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + currentImages.length) % currentImages.length
    );
  }, [currentImages.length]);
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % currentImages.length);
  }, [currentImages.length]);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isOpen) return;
      if (event.key === "ArrowLeft") handlePrevious();
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrevious, isOpen]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl",
      children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setIsOpen(false),
            className: "absolute right-4 top-4 p-2 text-white/75 hover:text-white",
            children: /* @__PURE__ */ jsx(FiX, { size: 24 })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: handlePrevious,
            className: "absolute left-4 p-2 text-white/75 hover:text-white",
            children: /* @__PURE__ */ jsx(FiChevronLeft, { size: 24 })
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: currentImages[currentIndex],
            alt: `Screenshot ${currentIndex + 1}`,
            className: "max-h-[90vh] max-w-[90vw] object-contain"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: handleNext,
            className: "absolute right-4 p-2 text-white/75 hover:text-white",
            children: /* @__PURE__ */ jsx(FiChevronRight, { size: 24 })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-0 right-0 flex justify-center gap-2", children: currentImages.map((image, index) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setCurrentIndex(index),
            className: `h-2 w-2 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/30"}`
          },
          image
        )) })
      ]
    }
  ) });
}

function SocialLinks({ links }) {
  return /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center", "aria-hidden": "true", children: /* @__PURE__ */ jsx("div", { className: "w-full border-t border-white/5" }) }),
      /* @__PURE__ */ jsx("div", { className: "relative flex justify-center", children: /* @__PURE__ */ jsx("span", { className: "bg-black px-6 text-sm font-medium tracking-wider text-white/50 uppercase", children: "Social Media" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-center gap-4", children: links.map((link) => {
      const Icon = link.icon;
      return /* @__PURE__ */ jsx(
        "a",
        {
          href: link.url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "group rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-200 hover:bg-white/[0.05]",
          "aria-label": link.label,
          children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-gray-400 transition-colors group-hover:text-white" })
        },
        link.label
      );
    }) })
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { title, description, screenshots, features, faqs, storeLinks, socialLinks, logo } = appData;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen max-w-5xl mx-auto px-4 py-8"> ${renderComponent($$result2, "AppHero", AppHero, { "title": title, "description": description, "storeLinks": storeLinks, "logo": logo })} <div class="mb-16"> ${renderComponent($$result2, "Screenshots", Screenshots, { "images": screenshots, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/sections/Screenshots", "client:component-export": "default" })} </div> ${renderComponent($$result2, "Features", Features, { "features": features })} ${renderComponent($$result2, "FAQ", FAQ, { "items": faqs })} ${renderComponent($$result2, "SocialLinks", SocialLinks, { "links": socialLinks })} </main> ` })} ${renderComponent($$result, "Lightbox", Lightbox, { "images": screenshots, "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/ui/Lightbox", "client:component-export": "default" })} `;
}, "C:/Users/Laptop/Desktop/ejemplo-pagina-producto/src/pages/index.astro", void 0);

const $$file = "C:/Users/Laptop/Desktop/ejemplo-pagina-producto/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
