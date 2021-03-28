import "../footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { text } from "@fortawesome/fontawesome-svg-core";

const Footer = ({ theme, content }) => {
	//  Props
	const { primary, accent, bgColor, textColor } = theme;
	const { companyName, motto } = content;

	// Function will determine the text color based off of the given background
	const themeCheck = (bgColor) => {
		console.log();
		if (bgColor === "light") {
			return "text-dark";
		} else if (bgColor === "dark") {
			return "text-light";
		} else {
			// Handle other colors
			return "text-body";
		}
	};

	const textMode = themeCheck(bgColor);

	return (
		<footer
			className={`navbar navbar-expand flex-column container-fluid bg-${bgColor} text-${textColor}`}
		>
			<div className="container flex-column w-75">
				<section className="row w-100 pb-4 justify-content-center-md align-items-baseline">
					<header className="col-sm pr-5">
						<a className="navbar-brand" href="#home">
							<h2 className={`h4 text-${primary}`}>{`${companyName}`}</h2>
						</a>
						<p className={`lead ${textMode}`}>{`${motto}`}</p>
					</header>
					<article className="site-map col-sm">
						<header>
							<h3 className={`h5 ${textMode}`}>Company</h3>
						</header>
						<ul className="list-group">
							<a href="#" className={`sitemap-links ${textMode}`}>
								Home
							</a>
							<a href="#" className={`sitemap-links ${textMode}`}>
								About
							</a>
							<a href="#" className={`sitemap-links ${textMode}`}>
								Services
							</a>
							<a href="#" className={`sitemap-links ${textMode}`}>
								Projects
							</a>
							<a href="#" className={`sitemap-links ${textMode}`}>
								FAQ
							</a>
							<a href="#" className={`sitemap-links ${textMode}`}>
								Contact
							</a>
						</ul>
					</article>
					<article className="social-media col-sm py-3">
						<header>
							<h3 className={`h5 ${textMode}`}>Connect</h3>
						</header>
						<ul className="list-group list-group-horizontal">
							<a className="social-links pr-2" href="#">
								<FontAwesomeIcon
									className={`social-icon ${textMode}`}
									icon={["fab", "twitter"]}
									size="sm"
									fixedWidth
								/>
							</a>
							<a className="social-links pr-2" href="#">
								<FontAwesomeIcon
									className={`social-icon ${textMode}`}
									icon={["fab", "facebook"]}
									size="sm"
									fixedWidth
								/>
							</a>
							<a className="social-links pr-2" href="#">
								<FontAwesomeIcon
									className={`social-icon ${textMode}`}
									icon={["fab", "instagram"]}
									size="sm"
									fixedWidth
								/>
							</a>
							<a className="social-links pr-2" href="#">
								<FontAwesomeIcon
									className={`social-icon ${textMode}`}
									icon={["fab", "youtube"]}
									size="sm"
									fixedWidth
								/>
							</a>
							<a className="social-links pr-2" href="#">
								<FontAwesomeIcon
									className={`social-icon ${textMode}`}
									icon={["fab", "reddit"]}
									size="sm"
									fixedWidth
								/>
							</a>
							<a className="social-links pr-2" href="#">
								<FontAwesomeIcon
									className={`social-icon ${textMode}`}
									icon={["fab", "github"]}
									size="sm"
									fixedWidth
								/>
							</a>
						</ul>
					</article>
				</section>
				<aside className="row w-100 pt-4 pb-2 text-center border-top border-secondary  align-items-baseline">
					<div className="col-sm">
						<p className="text-muted">
							&copy; 2021 {`${companyName}`} |{" "}
							<a className="alchemized" href="#https://alchemizedsoftware.com">
								Crafted by Alchemized{" "}
								<FontAwesomeIcon className="alchemized-icon" icon="fire-alt" />
							</a>
						</p>
					</div>
					<div className="col-sm">
						<span>
							<a href="#" className="text-muted p-3 copy-text">
								Terms of Service
							</a>
						</span>
						<span>
							<a href="#" className="text-muted copy-text">
								Privacy Notice
							</a>
						</span>
					</div>
				</aside>
			</div>
		</footer>
	);
};

export default Footer;
