import { FiBox, FiStar, FiZap } from "react-icons/fi";
import type { AppData } from "../types/app";
import {
	RiInstagramFill,
	RiTelegram2Fill,
	RiTwitterXFill,
} from "react-icons/ri";

export const appData: AppData = {
	title: "Nombre de la aplicación",
	description:
		"Descripción de la aplicación. Describe tu aplicación aquí. ¿Qué hace? ¿Por qué es especial?",
	logo: {
		type: "iframe",
		src: "https://api.bohd4n.me/embed/d92TevY2lQhnQnC/emoji1",
	},
	screenshots: {
		iphone: [
			"screenshots/iphone/iphone-01.webp",
			"screenshots/iphone/iphone-02.webp",
			"screenshots/iphone/iphone-03.webp",
			"screenshots/iphone/iphone-04.webp",
			"screenshots/iphone/iphone-05.webp",
			// ...más capturas de pantalla de iPhone
		],
		ipad: [
			"screenshots/ipad/tablet-01.webp",
			"screenshots/ipad/tablet-02.webp",
			"screenshots/ipad/tablet-03.webp",

			// ...más capturas de pantalla de iPad
		],
	},
	features: [
		{
			title: "Característica Principal",
			description: "Describe la característica principal de tu aplicación aquí.",
			icon: FiStar,
		},
		{
			title: "Otra Característica",
			description: "¿Qué más puede hacer tu aplicación? Cuéntaselo a los usuarios aquí.",
			icon: FiZap,
		},
		{
			title: "Una Característica Más",
			description: "Añade otra característica clave de tu aplicación aquí.",
			icon: FiBox,
		},
	],
	faqs: [
		{
			question: "¿Pregunta 1?",
			answer: "La respuesta a la pregunta 1 va aquí.",
		},
		{
			question: "¿Pregunta 2?",
			answer: "La respuesta a la pregunta 2 va aquí.",
		},
		{
			question: "¿Pregunta 3?",
			answer: "La respuesta a la pregunta 3 va aquí.",
		},
	],
	storeLinks: {
		apple: "#", // Reemplaza con tu enlace de App Store
		google: "#", // Reemplaza con tu enlace de Google Play
	},
	socialLinks: [
		{
			url: "#",
			icon: RiInstagramFill,
			label: "Instagram",
		},
		{
			url: "#",
			icon: RiTelegram2Fill,
			label: "Telegram",
		},
		{
			url: "#",
			icon: RiTwitterXFill,
			label: "Twitter",
		},
	],
};
