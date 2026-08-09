import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { fullStackData } from "../data/stackData";

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

const StackModal = ({ isOpen, onClose }: Props) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[#f8f9ff]/40 backdrop-blur-sm"
					onClick={onClose}
				>
					<motion.div
						initial={{ y: 20, opacity: 0, scale: 0.95 }}
						animate={{ y: 0, opacity: 1, scale: 1 }}
						exit={{ y: 20, opacity: 0, scale: 0.95 }}
						transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
						className="glass-card w-full max-w-3xl max-h-[85vh] flex flex-col p-6 md:p-10 relative overflow-hidden"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Header */}
						<div className="flex justify-between items-center border-b border-[#c2c7cd]/30 pb-4 mb-8 shrink-0">
							<h2 className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-[#72787d]">
								TECH STACK
							</h2>
							<button
								onClick={onClose}
								className="text-[#72787d] hover:text-[#0b1c30] transition-colors p-1"
							>
								<X size={20} strokeWidth={1.2} />
							</button>
						</div>

						{/* Content */}
						<div className="flex flex-col gap-8 overflow-y-auto custom-scrollbar pr-2">
							{fullStackData.map((categoryGroup, index) => (
								<motion.section
									key={categoryGroup.category}
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1, duration: 0.4 }}
								>
									<h3 className="text-[#0b1c30] font-medium text-sm md:text-base mb-4 flex items-center gap-2">
										<span className="w-1 h-4 bg-[#40627b] rounded-full"></span>
										{categoryGroup.category}
									</h3>
									<div className="flex flex-wrap gap-2 md:gap-3">
										{categoryGroup.skills.map((skill) => (
											<span
												key={skill}
												className="px-3 py-1.5 md:px-4 md:py-2 bg-white/50 text-[#40627b] text-xs md:text-sm font-mono rounded-md border border-[#c2c7cd]/30 shadow-sm hover:bg-[#eaf1ff] hover:border-[#bde0fe] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
											>
												{skill}
											</span>
										))}
									</div>
								</motion.section>
							))}
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default StackModal;
