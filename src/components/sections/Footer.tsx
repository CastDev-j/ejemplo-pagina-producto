import type React from "react";
import { appData } from "../../data/appData";

const Footer: React.FC = () => {
	return (
		<footer className="py-8 text-center space-y-4 border-t border-white/5">
			<div className="flex justify-center space-x-6 text-sm text-gray-400">
				<a href="/privacy" className="transition-colors hover:text-white">
					Política de Privacidad
				</a>
				<a href="/terms" className="transition-colors hover:text-white">
					Términos del Servicio
				</a>
			</div>

			<div className="text-sm text-gray-500">
				<p>
					&copy; {new Date().getFullYear()}{" "}
					<span className="text-gray-400">{appData.title}</span>
					<br />
					Todos los derechos reservados.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
