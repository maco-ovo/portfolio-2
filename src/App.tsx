import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import InitialPage from "./pages/Initialpage.tsx";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar.tsx";

function App() {
	const [hasEntered, setHasEntered] = useState(false);

	return (
		<div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-200">
			<AnimatePresence mode="wait">
				{!hasEntered ? (
					<InitialPage key="initial" onEnter={() => setHasEntered(true)} />
				) : (
					<div key="main" className="flex">
						<Sidebar />
						<main className="flex-1">
							<Home />
						</main>
					</div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default App;
