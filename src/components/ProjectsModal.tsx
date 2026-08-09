import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { projectsData } from "../data/portfolioData";
import { GithubIcon } from "./Icons";

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

export default function ProjectsModal({ isOpen, onClose }: Props) {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8 bg-[#f8f9ff]/40 backdrop-blur-sm"
					onClick={onClose}
				>
					<motion.div
						initial={{ y: 20, opacity: 0, scale: 0.95 }}
						animate={{ y: 0, opacity: 1, scale: 1 }}
						exit={{ y: 20, opacity: 0, scale: 0.95 }}
						transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
						className="glass-card w-full max-w-3xl max-h-[85vh] flex flex-col p-8 relative overflow-hidden"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Header */}
						<div className="flex justify-between items-center border-b border-[#c2c7cd]/30 pb-4 mb-6 shrink-0">
							<h2 className="text-[10px] md:text-xs font-mono tracking-[0.2em] text-[#72787d]">
								ALL PROJECTS
							</h2>
							<button
								onClick={onClose}
								className="text-[#72787d] hover:text-[#0b1c30] transition-colors p-1"
							>
								<X size={20} strokeWidth={1.2} />
							</button>
						</div>

						{/* Projects Grid */}
						<div className="flex-1 overflow-y-auto custom-scrollbar pr-2 grid grid-cols-1 md:grid-cols-2 gap-4">
							{projectsData.map((project) => (
								<div
									key={project.id}
									className="flex flex-col gap-4 p-5 rounded-xl border border-[#c2c7cd]/20 bg-white/40 hover:bg-[#eaf1ff]/80 hover:border-ice-blue transition-all duration-300 group"
								>
									<div className="flex justify-between items-start">
										<div className="w-12 h-12 rounded-lg bg-[#eaf1ff] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
											<project.icon size={20} strokeWidth={1.2} />
										</div>

										<div className="flex items-center gap-3">
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="text-[#c2c7cd] hover:text-primary transition-colors p-1"
												title="Source Code"
											>
												<GithubIcon size={18} />
											</a>
											{project.link && (
												<a
													href={project.link}
													target="_blank"
													rel="noopener noreferrer"
													className="text-[#c2c7cd] hover:text-primary transition-colors p-1"
													title="Live Demo"
												>
													<ExternalLink size={18} strokeWidth={1.5} />
												</a>
											)}
										</div>
									</div>
									<div>
										<h3 className="text-[#0b1c30] font-medium text-base mb-1">
											{project.title}
										</h3>
										<p className="text-[#72787d] text-xs font-mono">
											{project.date} | {project.category}
										</p>
									</div>
								</div>
							))}
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
