import { FiHome, FiChevronRight } from "react-icons/fi";
import type { BreadcrumbsProps } from "types/app";

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
	return (
		<nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
			<a href="/" className="hover:text-white transition-colors p-2 -ml-2">
				<FiHome className="w-4 h-4" />
			</a>

			{items.map((item, index) => (
				<div key={item.label} className="flex items-center space-x-2">
					<FiChevronRight className="w-4 h-4 text-gray-600" />
					{item.href ? (
						<a href={item.href} className="hover:text-white transition-colors">
							{item.label}
						</a>
					) : (
						<span className="text-white">{item.label}</span>
					)}
				</div>
			))}
		</nav>
	);
}
