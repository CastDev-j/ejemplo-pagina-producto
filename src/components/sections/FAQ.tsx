import type { FAQProps } from "types/app";

export default function FAQ({ items }: FAQProps) {
	return (
		<div className="mb-16">
			<h2 className="mb-6 text-2xl font-semibold">FAQ</h2>
			<div className="space-y-4">
				{items.map((item) => (
					<div
						key={item.question}
						className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
					>
						<details className="group">
							<summary className="flex cursor-pointer items-center justify-between p-6">
								<h3 className="pr-6 font-medium">{item.question}</h3>
								<svg
									className="h-5 w-5 flex-shrink-0 transition-transform group-open:rotate-180"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-label="Toggle answer"
								>
									<title>Toggle answer</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</summary>
							<div className="px-6 pb-6">
								<div className="border-t border-white/5 pt-6">
									<p className="text-gray-400">{item.answer}</p>
								</div>
							</div>
						</details>
					</div>
				))}
			</div>
		</div>
	);
}
