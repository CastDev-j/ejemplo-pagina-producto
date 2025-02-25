import { AnimatePresence, motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export default function PageAnimation(props: PropsWithChildren) {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial="pageInitial"
				animate="pageAnimate"
				exit="pageExit"
				transition={{ type: "linear" }}
				className="px-5"
				variants={{
					pageInitial: {
						opacity: 0,
						y: 10,
					},
					pageAnimate: {
						opacity: 1,
						y: 0,
					},
					pageExit: {
						opacity: 0,
						y: 10,
					},
				}}
			>
				{props.children}
			</motion.div>
		</AnimatePresence>
	);
}
