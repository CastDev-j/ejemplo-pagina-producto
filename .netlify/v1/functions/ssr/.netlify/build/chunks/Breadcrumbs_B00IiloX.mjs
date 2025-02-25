import { jsxs, jsx } from 'react/jsx-runtime';
import { FiHome, FiChevronRight } from 'react-icons/fi';

function Breadcrumbs({ items }) {
  return /* @__PURE__ */ jsxs("nav", { className: "flex items-center space-x-2 text-sm text-gray-400 mb-8", children: [
    /* @__PURE__ */ jsx("a", { href: "/", className: "hover:text-white transition-colors p-2 -ml-2", children: /* @__PURE__ */ jsx(FiHome, { className: "w-4 h-4" }) }),
    items.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsx(FiChevronRight, { className: "w-4 h-4 text-gray-600" }),
      item.href ? /* @__PURE__ */ jsx("a", { href: item.href, className: "hover:text-white transition-colors", children: item.label }) : /* @__PURE__ */ jsx("span", { className: "text-white", children: item.label })
    ] }, item.label))
  ] });
}

export { Breadcrumbs as B };
