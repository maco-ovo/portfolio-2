import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Sidebar() {
	const links = [
		{
			name: "GITHUB",
			icon: GithubIcon,
			url: "https://github.com/maco-ovo",
		},
		{
			name: "LINKEDIN",
			icon: LinkedinIcon,
			url: "https://www.linkedin.com/in/makoto-arata-567455382",
		},
		{
			name: "MAIL",
			icon: Mail,
			url: "mailto:aratamakoto2025@gmail.com",
		},
	];

	return (
		<motion.aside
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
			className="sticky top-0 h-screen w-20 md:w-28 shrink-0 flex flex-col items-center justify-center border-r border-[#c2c7cd]/20 bg-[#f8f9ff]/50 backdrop-blur-sm z-50"
		>
			<div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-[#bde0fe] to-[#40627b]/50"></div>

			<div className="flex flex-col gap-10 md:gap-12">
				{links.map((link, index) => (
					<motion.a
						key={link.name}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						className="group flex flex-col items-center gap-3 cursor-pointer"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
					>
						<div className="text-[#72787d] group-hover:text-[#40627b] transition-colors duration-300">
							<link.icon strokeWidth={1.2} size={22} />
						</div>

						<span className="text-[9px] md:text-[10px] font-mono tracking-[0.15em] text-[#72787d] group-hover:text-[#0b1c30] transition-colors duration-300">
							{link.name}
						</span>
					</motion.a>
				))}
			</div>
		</motion.aside>
	);
}
