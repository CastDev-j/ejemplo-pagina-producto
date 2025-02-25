import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { LightboxProps } from "../../types/app";

declare global {
	interface Window {
		openLightbox: (index: number, device: "iphone" | "ipad") => void;
	}
}

export default function Lightbox({ images }: LightboxProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [activeDevice, setActiveDevice] = useState<"iphone" | "ipad">("iphone");
	const currentImages = images[activeDevice];

	useEffect(() => {
		window.openLightbox = (index: number, device: "iphone" | "ipad") => {
			setCurrentIndex(index);
			setActiveDevice(device);
			setIsOpen(true);
		};
	}, []);

	const handlePrevious = useCallback(() => {
		setCurrentIndex(
			(prev) => (prev - 1 + currentImages.length) % currentImages.length,
		);
	}, [currentImages.length]);

	const handleNext = useCallback(() => {
		setCurrentIndex((prev) => (prev + 1) % currentImages.length);
	}, [currentImages.length]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (!isOpen) return;
			if (event.key === "ArrowLeft") handlePrevious();
			if (event.key === "ArrowRight") handleNext();
			if (event.key === "Escape") setIsOpen(false);
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [handleNext, handlePrevious, isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
				>
					<button
						type="button"
						onClick={() => setIsOpen(false)}
						className="absolute right-4 top-4 p-2 text-white/75 hover:text-white"
					>
						<FiX size={24} />
					</button>

					<button
						type="button"
						onClick={handlePrevious}
						className="absolute left-4 p-2 text-white/75 hover:text-white"
					>
						<FiChevronLeft size={24} />
					</button>

					<img
						src={currentImages[currentIndex]}
						alt={`Screenshot ${currentIndex + 1}`}
						className="max-h-[90vh] max-w-[90vw] object-contain"
					/>

					<button
						type="button"
						onClick={handleNext}
						className="absolute right-4 p-2 text-white/75 hover:text-white"
					>
						<FiChevronRight size={24} />
					</button>

					<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
						{currentImages.map((image, index) => (
							<button
								type="button"
								key={image}
								onClick={() => setCurrentIndex(index)}
								className={`h-2 w-2 rounded-full transition-colors ${
									index === currentIndex ? "bg-white" : "bg-white/30"
								}`}
							/>
						))}
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
