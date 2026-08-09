import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import InitialPage from "./sections/InitialPage";
import Home from "./sections/Home";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProjectsModal from "./sections/ProjectsModal";
import AboutModal from "./sections/AboutModal";
import ContactModal from "./sections/ContactModal";

function App() {
	const [hasEntered, setHasEntered] = useState(false);

	const [isProjectsOpen, setIsProjectsOpen] = useState(false);
	const [isAboutOpen, setIsAboutOpen] = useState(false);
	const [isContactOpen, setIsContactOpen] = useState(false);

	return (
		<div className="min-h-screen text-[#0b1c30] font-sans selection:bg-ice-blue">
			<AnimatePresence mode="wait">
				{!hasEntered ? (
					<InitialPage key="initial" onEnter={() => setHasEntered(true)} />
				) : (
					<div key="main" className="flex relative">
						
						<Header
							onOpenProjects={() => setIsProjectsOpen(true)}
							onOpenAbout={() => setIsAboutOpen(true)}
							onOpenContact={() => setIsContactOpen(true)}
						/>
						<Sidebar />

						<main className="flex-1">
							<Home
								onOpenProjects={() => setIsProjectsOpen(true)}
								onOpenAbout={() => setIsAboutOpen(true)}
								onOpenContact={() => setIsContactOpen(true)}
							/>
						</main>
					</div>
				)}
			</AnimatePresence>

			<ProjectsModal
				isOpen={isProjectsOpen}
				onClose={() => setIsProjectsOpen(false)}
			/>
			<AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
			<ContactModal
				isOpen={isContactOpen}
				onClose={() => setIsContactOpen(false)}
			/>
		</div>
	);
}

export default App;
