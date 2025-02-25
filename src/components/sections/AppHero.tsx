import { FaApple, FaGooglePlay } from "react-icons/fa";
import type { AppHeroProps } from "types/app";

export default function AppHero({
	title,
	description,
	storeLinks,
	logo,
}: AppHeroProps) {
	return (
		<div className="mb-16 flex flex-col md:flex-row gap-8 min-h-[192px]">
			<div className="flex-shrink-0">
				<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 w-[192px]">
					{logo.type === "iframe" ? (
						<iframe
							src={logo.src}
							className="h-40 w-40 rounded-2xl border-0"
							title="App Logo"
						/>
					) : (
						<img
							src={logo.src}
							alt="App Icon"
							className="h-40 w-40 rounded-2xl shadow-lg"
						/>
					)}
				</div>
			</div>

			<div className="flex flex-1 flex-col h-[225px]">
				<div className="flex-1">
					<h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
					<p className="text-l text-gray-400 leading-relaxed line-clamp-5">
						{description}
					</p>
				</div>

				<div className="flex flex-wrap gap-4 py-4">
					<StoreButton
						store="apple"
						href={storeLinks.apple}
						label="Download on the"
						storeName="App Store"
					/>
					<StoreButton
						store="google"
						href={storeLinks.google}
						label="Get it on"
						storeName="Google Play"
					/>
				</div>
			</div>
		</div>
	);
}

function StoreButton({
	store,
	href,
	label,
	storeName,
}: {
	store: "apple" | "google";
	href: string;
	label: string;
	storeName: string;
}) {
	const Icon = store === "apple" ? FaApple : FaGooglePlay;

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 transition-all duration-300 hover:bg-white/[0.08]"
		>
			<Icon
				className={`transition-transform duration-300 group-hover:scale-110 ${
					store === "apple" ? "w-[22px] h-[22px]" : "w-5 h-5"
				}`}
			/>
			<span className="text-left">
				<div className="text-[11px] font-medium text-gray-400 group-hover:text-gray-300 transition-colors">
					{label}
				</div>
				<div className="text-[13px] font-semibold tracking-wide group-hover:text-white transition-colors">
					{storeName}
				</div>
			</span>
		</a>
	);
}
