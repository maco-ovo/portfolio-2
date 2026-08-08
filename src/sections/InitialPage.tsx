import { motion } from "framer-motion";

type Props = {
	onEnter: () => void;
};

export default function InitialPage({ onEnter }: Props) {
	return (
		<motion.div
			className="h-screen w-full flex flex-col items-center justify-center cursor-pointer"
			onClick={onEnter}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 1 } }}
			exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
		>
			<h1 className="text-4xl md:text-6xl font-light tracking-tight mb-4">
				Hello, I'm <span className="font-semibold">Makoto</span>.
			</h1>
			<p className="text-slate-400 tracking-widest text-sm uppercase animate-pulse">
				Click anywhere to enter
			</p>
		</motion.div>
	);
}
