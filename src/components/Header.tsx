import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const menuItems = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];

	return (
		<header className="fixed top-0 right-0 w-full z-50 pointer-events-none p-6 md:p-8 flex justify-end">
			<div className="pointer-events-auto relative flex flex-col items-end">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-[#72787d] hover:text-[#0b1c30] transition-colors duration-300"
				>
					[ {isOpen ? "CLOSE" : "MENU"} ]
				</button>

				<AnimatePresence>
					{isOpen && (
						<motion.nav
							initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
							animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
							exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
							transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
							className="absolute top-full right-0 mt-4 flex flex-col items-end gap-3 glass-card p-5 min-w-50 border border-[#c2c7cd]/20"
						>
							{menuItems.map((item, index) => (
								<motion.a
									key={item}
									href={`#${item.toLowerCase()}`}
									onClick={() => setIsOpen(false)}
									initial={{ opacity: 0, x: 10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.05, duration: 0.4 }}
									className="text-[14px] font-mono tracking-[0.2em] text-[#72787d] hover:text-[#0b1c30] hover:bg-[#eaf1ff] px-2 py-1 rounded-sm transition-all duration-300"
								>
									[ {item} ]
								</motion.a>
							))}
						</motion.nav>
					)}
				</AnimatePresence>
			</div>
		</header>
	);
}
