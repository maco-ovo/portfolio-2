import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, ArrowUpRight } from "lucide-react";

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: Props) => {
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
						className="glass-card w-full max-w-lg flex flex-col p-6 md:p-10 relative overflow-hidden"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex justify-between items-center border-b border-[#c2c7cd]/30 pb-4 mb-8">
							<h2 className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-[#72787d]">
								CONTACT
							</h2>
							<button
								onClick={onClose}
								className="text-[#72787d] hover:text-[#0b1c30] transition-colors p-1"
							>
								<X size={20} strokeWidth={1.2} />
							</button>
						</div>

						<div className="flex flex-col items-center text-center py-8">
							<div className="w-16 h-16 rounded-full bg-[#eaf1ff] flex items-center justify-center text-[#40627b] mb-6">
								<Mail size={24} strokeWidth={1.2} />
							</div>
							<h3 className="text-2xl font-light text-[#0b1c30] tracking-tight mb-3">
								Get in Touch
							</h3>
							<p className="text-[#42474d] text-sm leading-relaxed max-w-xs mb-8">
								Whether you have a project in mind, a question, or just want to
								say hi, my inbox is always open.
							</p>
							<a
								href="mailto:aratamakoto2025@gmail.com"
								className="group flex items-center gap-2 px-6 py-3 bg-[#40627b] text-white text-sm font-medium rounded-md hover:bg-[#356668] transition-colors duration-300"
							>
								Send an Email
								<ArrowUpRight
									size={16}
									strokeWidth={1.5}
									className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
								/>
							</a>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ContactModal;
