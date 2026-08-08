import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlassCardProps {
	children: ReactNode;
	delay?: number;
	className?: string;
}

const GlassCard = ({ children, delay = 0, className = "" }: GlassCardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.8,
				delay: delay,
				ease: [0.25, 0.4, 0.25, 1], 
			}}
			className={`glass-card p-6 md:p-8 ${className}`}
		>
			{children}
		</motion.div>
	);
};

export default GlassCard;
