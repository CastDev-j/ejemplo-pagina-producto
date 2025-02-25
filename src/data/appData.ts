import { FiBox, FiStar, FiZap } from "react-icons/fi";
import type { AppData } from "../types/app";
import {
	RiInstagramFill,
	RiTelegram2Fill,
	RiTwitterXFill,
} from "react-icons/ri";

export const appData: AppData = {
	title: "Your App Name",
	description:
		"Here you can write a brief description of your application. Tell users about its main features and benefits in 1-2 sentences.",
	logo: {
		type: "iframe",
		src: "https://api.bohd4n.me/embed/d92TevY2lQhnQnC/emoji1",
	},
	screenshots: {
		iphone: [
			"screenshots/iphone/1.png",
			"screenshots/iphone/2.png",
			"screenshots/iphone/3.png",
			// ...more Iphone screenshotsa
		],
		ipad: [
			"screenshots/ipad/1.png",
			"screenshots/ipad/2.png",
			"screenshots/ipad/3.png",
			// ...more iPad screenshots
		],
	},
	features: [
		{
			title: "Main Feature",
			description: "Describe your main feature here. What makes it special?",
			icon: FiStar,
		},
		{
			title: "Another Feature",
			description: "What else can your app do? Tell users about it here.",
			icon: FiZap,
		},
		{
			title: "One More Feature",
			description: "Add another key feature of your application here.",
			icon: FiBox,
		},
	],
	faqs: [
		{
			question: "Question 1?",
			answer: "Answer to question 1 goes here.",
		},
		{
			question: "Question 2?",
			answer: "Answer to question 2 goes here.",
		},
		{
			question: "Question 3?",
			answer: "Answer to question 3 goes here.",
		},
	],
	storeLinks: {
		apple: "#", // Replace with your App Store link
		google: "#", // Replace with your Google Play link
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
