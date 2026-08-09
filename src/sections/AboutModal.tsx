import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

const AboutModal = ({ isOpen, onClose }: Props) => {
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
						className="glass-card w-full max-w-2xl flex flex-col p-6 md:p-10 relative overflow-hidden"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="flex justify-between items-center border-b border-[#c2c7cd]/30 pb-4 mb-8">
							<h2 className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-[#72787d]">
								ABOUT ME
							</h2>
							<button
								onClick={onClose}
								className="text-[#72787d] hover:text-[#0b1c30] transition-colors p-1"
							>
								<X size={20} strokeWidth={1.2} />
							</button>
						</div>

						<div className="flex flex-col gap-8 overflow-y-auto custom-scrollbar pr-2">
							<section>
								<h3 className="text-[#0b1c30] font-medium text-lg mb-3">
									My Story
								</h3>
								<p className="text-[#42474d] text-sm leading-relaxed mb-4">
									I am passionate about the intersection of Web Development and
									Data Science. I love building intuitive web interfaces while
									also diving deep into data to uncover meaningful insights.
								</p>
								<p className="text-[#42474d] text-sm leading-relaxed">
									Coming from a psychology background, I am fascinated by how
									people interact with digital environments. My goal is to blend
									analytical problem-solving with creative design to build
									applications that genuinely help people.
								</p>
							</section>

							<section>
								<h3 className="text-[#0b1c30] font-medium text-lg mb-3">
									Future Vision
								</h3>
								<p className="text-[#42474d] text-sm leading-relaxed">
									I want to use my combined knowledge of psychology and
									technology to improve everyday Quality of Life (QOL).
									Specifically, I am focused on creating apps in the everyday
									health and mental care space, as well as platforms dedicated
									to study and learning support to help others document and
									track their educational journeys.
								</p>
							</section>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default AboutModal;
