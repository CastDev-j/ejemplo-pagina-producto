import type { FeaturesProps } from "types/app";

export default function Features({ features }: FeaturesProps) {
	return (
		<div className="mb-16">
			<h2 className="mb-6 text-2xl font-semibold">Features</h2>

			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				{features.map((feature) => {
					const Icon = feature.icon;
					return (
						<div
							key={feature.title}
							className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
						>
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04]">
								<Icon className="h-6 w-6 text-white opacity-90" />
							</div>
							<h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
							<p className="text-sm leading-relaxed text-gray-400">
								{feature.description}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
