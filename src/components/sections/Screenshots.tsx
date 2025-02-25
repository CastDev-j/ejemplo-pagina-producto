import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ScreenshotsProps } from "../../types/app";
import DeviceToggle from "../ui/DeviceToggle";

export default function Screenshots({ images }: ScreenshotsProps) {
	const [activeDevice, setActiveDevice] = useState<"iphone" | "ipad">("iphone");
	const currentImages = images[activeDevice];

	return (
		<div className="mb-16">
			<div className="mb-6 flex items-center justify-between">
				<h2 className="text-2xl font-semibold">Screenshots</h2>
				<DeviceToggle activeDevice={activeDevice} onToggle={setActiveDevice} />
			</div>
			<div
				className={`relative overflow-hidden ${activeDevice === "iphone" ? "min-h-[400px]" : "min-h-[300px]"}`}
			>
				<AnimatePresence mode="wait">
					<motion.div
						key={activeDevice}
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -20 }}
						transition={{ duration: 0.3 }}
						className="screenshots-container scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20"
						onAnimationComplete={() => {
							const container = document.querySelector(
								".screenshots-container",
							);
							if (container) {
								container.classList.add("overflow-x-auto");
							}
						}}
						onAnimationStart={() => {
							const container = document.querySelector(
								".screenshots-container",
							);
							if (container) {
								container.classList.remove("overflow-x-auto");
							}
						}}
					>
						<div className="flex gap-6 pb-4">
							{currentImages.map((image, index) => (
								<motion.button
									key={image}
									initial={{ opacity: 0, y: 20 }}
									animate={{
										opacity: 1,
										y: 0,
										transition: { delay: index * 0.1 },
									}}
									exit={{ opacity: 0, y: 20 }}
									type="button"
									onClick={() => window.openLightbox?.(index, activeDevice)}
									className="relative flex-shrink-0 overflow-hidden rounded-xl focus:outline-none"
								>
									<motion.img
										src={image}
										alt={`Screenshot ${index + 1}`}
										className={`rounded-xl border border-white/10 object-cover ${
											activeDevice === "iphone"
												? "aspect-[9/16] w-[260px]"
												: "aspect-[4/3] w-[360px]"
										}`}
										loading="lazy"
										whileHover={{
											scale: 1.05,
											transition: { duration: 0.2 },
										}}
									/>
								</motion.button>
							))}
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}
