import type { IconType } from "react-icons";

export interface Feature {
	title: string;
	description: string;
	icon: IconType;
}

export interface FeaturesProps {
	features: Feature[];
}

export interface FAQ {
	question: string;
	answer: string;
}

export interface FAQProps {
	items: FAQ[];
}

export interface StoreLinks {
	apple: string;
	google: string;
}

export interface StoreButtonProps {
	store: "apple" | "google";
	href: string;
	label: string;
	storeName: string;
}

export interface SocialLink {
	url: string;
	icon: IconType;
	label: string;
}

export interface SocialLinksProps {
	links: SocialLink[];
}

export interface AppData {
	title: string;
	description: string;
	screenshots: {
		iphone: string[];
		ipad: string[];
	};
	features: Feature[];
	faqs: FAQ[];
	storeLinks: StoreLinks;
	socialLinks: SocialLink[];
	logo: {
		type: "iframe" | "image";
		src: string;
	};
}

export interface ScreenshotsProps {
	images: {
		iphone: string[];
		ipad: string[];
	};
}

export interface LightboxProps {
	images: {
		iphone: string[];
		ipad: string[];
	};
}

export interface AppHeroProps {
	title: string;
	description: string;
	storeLinks: StoreLinks;
	logo: {
		type: "iframe" | "image";
		src: string;
	};
}

export interface BreadcrumbsProps {
	items: {
		label: string;
		href?: string;
	}[];
}

export interface DeviceToggleProps {
	activeDevice: "iphone" | "ipad";
	onToggle: (device: "iphone" | "ipad") => void;
}

export interface GithubCornerProps {
	href: string;
}
