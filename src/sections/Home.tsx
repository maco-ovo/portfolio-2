import { motion } from "framer-motion";
import {
	MapPin,
	Briefcase,
	Focus,
	ArrowRight,
	ExternalLink,
} from "lucide-react";
import GlassCard from "../components/GlassCard";

import { projectsData } from "../data/portfolioData";
import { coreStack } from "../data/stackData";
import { GithubIcon } from "../components/Icons";

interface Props {
	onOpenProjects: () => void;
	onOpenAbout: () => void;
	onOpenContact: () => void;
	onOpenStack: () => void;
}

const Home = ({
	onOpenProjects,
	onOpenAbout,
	onOpenContact,
	onOpenStack,
}: Props) => {
	const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 3);
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
				className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 pt-20 md:pt-8"
			>
				<div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr md:h-[80vh] min-h-[500px]">
					{/* 1. Profile Card  */}
					<GlassCard
						delay={0.1}
						className="flex flex-col col-span-1 h-full justify-between"
					>
						<div>
							<h2 className="text-[10px] font-mono tracking-[0.1em] text-[#72787d] uppercase mb-8">
								Profile
							</h2>
							<h1 className="text-4xl md:text-5xl font-light text-[#0b1c30] tracking-tight mb-2">
								Makoto
								<br />
								Arata
							</h1>
							<p className="text-[#42474d] text-sm mb-10">
								Full Stack Developer
							</p>

							<div className="flex flex-col gap-4 text-sm">
								<div className="flex justify-between items-center border-b border-[#c2c7cd]/30 pb-3">
									<span className="text-[#72787d] flex items-center gap-2">
										<MapPin size={14} /> Location
									</span>
									<span className="text-[#0b1c30]">Vancouver, BC</span>
								</div>
								<div className="flex justify-between items-center border-b border-[#c2c7cd]/30 pb-3">
									<span className="text-[#72787d] flex items-center gap-2">
										<Briefcase size={14} /> Status
									</span>
									<div>
										<span className="text-[#0b1c30] flex items-center gap-2">
											<span className="w-2 h-2 rounded-full bg-[#356668] animate-pulse"></span>
											Available for work
										</span>

										<span className="text-[#0b1c30] flex items-center gap-2">
											<span className="w-2 h-2 rounded-full bg-[#356668] animate-pulse"></span>
											Student
										</span>
									</div>
								</div>
								<div className="flex justify-between items-center border-b border-[#c2c7cd]/30 pb-3">
									<span className="text-[#72787d] flex items-center gap-2">
										<Focus size={14} /> Focus
									</span>
									<span className="text-[#0b1c30]">Cognitive Minimalism</span>
								</div>
							</div>
						</div>

						<div className="mt-8 pt-6 border-t border-[#c2c7cd]/30">
							<p className="text-[#42474d] text-sm leading-relaxed border-b border-[#c2c7cd]/30 pb-3">
								A Full Stack Developer with a background in Psychology.
								<br />
								Keep being a Lifelong learner.
							</p>

							<div className="flex gap-6 pt-4">
								<button
									onClick={onOpenAbout}
									className="text-[10px] font-mono tracking-widest text-[#40627b] flex items-center gap-1 hover:text-[#0b1c30] transition-colors"
								>
									READ MORE <ArrowRight size={12} strokeWidth={1.5} />
								</button>
								<button
									onClick={onOpenContact}
									className="text-[10px] font-mono tracking-widest text-[#40627b] flex items-center gap-1 hover:text-[#0b1c30] transition-colors"
								>
									CONTACT <ArrowRight size={12} strokeWidth={1.5} />
								</button>
							</div>
						</div>
					</GlassCard>

					{/* Stack & Picture */}
					<div className="flex flex-col gap-6 col-span-1 h-full">
						{/* 2. Stack Card */}
						<GlassCard delay={0.2} className="flex-1 flex flex-col relative">
							<div className="flex justify-between items-center mb-6">
								<h2 className="text-[10px] font-mono tracking-[0.1em] text-[#72787d] uppercase">
									Stack
								</h2>

								<button
									onClick={onOpenStack}
									className="text-[10px] font-mono text-[#40627b] flex items-center gap-1 hover:text-[#0b1c30] transition-colors"
								>
									VIEW ALL <ArrowRight size={12} strokeWidth={1.5} />
								</button>
							</div>

							<div className="flex flex-wrap gap-2">
								{coreStack.map((tech) => (
									<span
										key={tech}
										className="px-3 py-1.5 bg-[#eaf1ff] text-[#40627b] text-xs font-mono rounded-sm border border-[#dce9ff] hover:bg-[#dce9ff] transition-colors cursor-default"
									>
										{tech}
									</span>
								))}
							</div>
						</GlassCard>

						{/* 3. Picture Card */}
						<GlassCard
							delay={0.3}
							className="flex-1 relative overflow-hidden group p-0 flex items-center justify-center min-h-[200px]"
						>
							<img
								src="/sky_2.JPG"
								alt="Makoto Arata"
								className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
							/>

							<div className="absolute inset-0 bg-linier-to-br from-ice-blue/30 to-primary/60 mix-blend-multiply opacity-50 group-hover:opacity-30 transition-opacity duration-500"></div>
						</GlassCard>
					</div>

					{/* 4. Projects Card */}
					<GlassCard
						delay={0.4}
						className="flex flex-col col-span-1 h-full relative"
					>
						<div className="flex justify-between items-center mb-8">
							<h2 className="text-[10px] font-mono tracking-widest text-[#72787d] uppercase">
								Projects
							</h2>
							<button
								onClick={onOpenProjects}
								className="text-[10px] font-mono text-primary flex items-center gap-1 hover:text-[#0b1c30] transition-colors"
							>
								VIEW ALL <ArrowRight size={12} strokeWidth={1.5} />
							</button>
						</div>

						<div className="flex flex-col gap-6 flex-1 pr-2 custom-scrollbar">
							{featuredProjects.map((project) => (
								// <a> タグから <div> タグに変更
								<div key={project.id} className="flex gap-4 items-start group">
									<div className="w-11 h-11 shrink-0 rounded-lg bg-[#eaf1ff] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
										<project.icon size={18} strokeWidth={1.5} />
									</div>

									<div className="flex-1">
										<h3 className="text-[#0b1c30] font-medium text-sm mb-1 group-hover:text-primary transition-colors duration-300">
											{project.title}
										</h3>
										<p className="text-[#72787d] text-[10px] font-mono">
											{project.date} | {project.category}
										</p>
									</div>

									<div className="flex items-center gap-3">
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											className="text-[#c2c7cd] hover:text-primary transition-colors"
											title="Source Code"
										>
											<GithubIcon size={16} />
										</a>
										{project.link && (
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="text-[#c2c7cd] hover:text-primary transition-colors"
												title="Live Demo"
											>
												<ExternalLink size={16} strokeWidth={1.5} />
											</a>
										)}
									</div>
								</div>
							))}
						</div>
					</GlassCard>
				</div>
			</motion.div>
		</>
	);
};

export default Home;
