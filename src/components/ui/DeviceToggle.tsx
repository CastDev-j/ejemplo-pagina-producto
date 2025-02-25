import { motion } from "framer-motion";

interface DeviceToggleProps {
	activeDevice: "iphone" | "ipad";
	onToggle: (device: "iphone" | "ipad") => void;
}

export default function DeviceToggle({
	activeDevice,
	onToggle,
}: DeviceToggleProps) {
	return (
		<div className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] p-1">
			<motion.button
				type="button"
				onClick={() => onToggle("iphone")}
				className={`relative rounded-md px-3.5 py-1.5 text-sm transition-colors ${
					activeDevice === "iphone"
						? "text-white"
						: "text-white/60 hover:text-white"
				}`}
				whileTap={{ scale: 0.95 }}
			>
				{activeDevice === "iphone" && (
					<motion.div
						layoutId="activeDevice"
						className="absolute inset-0 rounded-md bg-white/10"
						transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
					/>
				)}
				<span className="relative z-10">iPhone</span>
			</motion.button>
			<motion.button
				type="button"
				onClick={() => onToggle("ipad")}
				className={`relative rounded-md px-3.5 py-1.5 text-sm transition-colors ${
					activeDevice === "ipad"
						? "text-white"
						: "text-white/60 hover:text-white"
				}`}
				whileTap={{ scale: 0.95 }}
			>
				{activeDevice === "ipad" && (
					<motion.div
						layoutId="activeDevice"
						className="absolute inset-0 rounded-md bg-white/10"
						transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
					/>
				)}
				<span className="relative z-10">iPad</span>
			</motion.button>
		</div>
	);
}
