import Footer from "./components/Footer";
import "./footer.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
	faCheckSquare,
	faFlask,
	faFire,
	faFireAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faFlask, faFire, faFireAlt);

const App = () => {
	// Standard color themes

	// Dark mode
	const darkTheme = {
		primary: "primary",
		accent: "green",
		bgColor: "dark",
		textColor: "light",
	};

	// Light mode
	const lightTheme = {
		primary: "primary",
		accent: "info",
		bgColor: "light",
		textColor: "dark",
	};

	// Standard Content
	const content = {
		companyName: "Alchemized Software",
		motto: "Transformative Development & Designs.",
	};

	// COMPANY THEMES

	// Company: Digital Alchemy
	const digitalAlchemy = {
		content: {
			companyName: "Digital Alchemy",
			motto: "Transformative digital designs.",
		},
		theme: {
			primary: "success",
			accent: "lightgreen",
			bgColor: "light",
			textColor: "light",
		},
	};

	// Company: Cyber Legion
	const cyberLegion = {
		content: {
			companyName: "Cyber Legion",
			motto: "Battle tested designs.",
		},
		theme: {
			primary: "danger",
			accent: "darkred",
			bgColor: "dark",
			textColor: "light",
		},
	};

	return (
		<>
			<h1>Footer Templates</h1>
			<Footer theme={darkTheme} content={content} />
			<Footer theme={lightTheme} content={content} />
			<Footer theme={cyberLegion.theme} content={cyberLegion.content} />
			<Footer theme={digitalAlchemy.theme} content={digitalAlchemy.content} />
		</>
	);
};

export default App;
