import {
	type LucideIcon,
	Coffee,
	CloudSunIcon,
	Globe2Icon,
	ChartColumn,
	UserRound,
} from "lucide-react";

export interface Project {
	id: string;
	title: string;
	date: string;
	category: string;
	icon: LucideIcon;
	github: string;
	link?: string;
}

export const projectsData: Project[] = [
	{
		id: "portflio-1",
		title: "My first portfolio",
		date: "2026.02",
		category: "HTML / CSS",
		icon: UserRound,
		github: "https://github.com/maco-ovo/portfolio.git",
		link: "https://portfoliomakotoarata.netlify.app/",
	},
	{
		id: "chat-app",
		title: "Real-Time Chat App",
		date: "2025.06",
		category: "Full Stack Dev",
		icon: Globe2Icon,
		github:
			"https://github.com/Cornerstone-CICCC/final-project-full-stack-real-time-app-missing-guil.git",
	},
	{
		id: "weather-forecast-app",
		title: "Weather ForeCat",
		date: "2026.05",
		category: "Frontend Dev (React)",
		icon: CloudSunIcon,
		github:
			"https://github.com/Cornerstone-CICCC/midterm-weather-app-str-cats.git",
		link: "https://weather-forecats.netlify.app/",
	},
	{
		id: "cafe-website",
		title: "Cafe Website",
		date: "2026.08",
		category: "Frontend Dev (React)",
		icon: Coffee,
		github: "https://github.com/maco-ovo/WD203-react-cafe-app.git",
		link: "https://203-final-react-cafe-app.netlify.app/",
	},
	{
		id: "linkedin-job-skills-analysis",
		title: "LinkedIn Job Postings Analysis (2024)",
		date: "2025.12",
		category: "Data Science",
		icon: ChartColumn,
		github: "https://github.com/maco-ovo/DS_Linkedin_job_skills.git",
	},
];
