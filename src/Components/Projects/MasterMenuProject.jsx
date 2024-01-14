import React from "react";
import { useInView } from "react-intersection-observer";

function MasterMenuProject() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0,
	});
	return (
		<div ref={ref} className="projects-item">
			<div className={`master-menu-info ${inView ? "slide-in-left" : "pre-animation"}`}>
				<div className="title">
					<h2>Master Menu</h2>
					<img src="images/projects/react.png" alt="React" />
				</div>
				<h3>Menu Management Web Application</h3>
				<p>
					A FERN (Firebase, Express, React, Node) web application, hosted and deployed
					using AWS, that minimizes the inconveniences of eating out by providing digital
					restaurant menus all in one place. Using the menu filter, users can input
					allergies/dietary restrictions, ingredient preferences, dish rating, etc to find
					the food that best matches their desired criteria and elect to pre-order it
					alongside booking a reservation time. The application uses Stripe for payment
					processing and Google Places API for location search autocomplete.
				</p>
				<div>
					<button
						className="lift-button"
						onClick={() =>
							window.open("https://github.com/Ayush-Warikoo/Master-Menu", "_blank")
						}
					>
						<i className={"fa fa-github"}></i> GitHub
					</button>
					<button
						className="lift-button"
						onClick={() => window.open("https://www.mastermenu.ca", "_blank")}
					>
						<i className={"fa fa-globe"}></i> Live
					</button>
					<button
						className="lift-button"
						onClick={() =>
							window.open(
								"https://github.com/Ayush-Warikoo/Master-Menu?tab=readme-ov-file#architecture",
								"_blank"
							)
						}
					>
						<i className={"fa fa-pencil"}></i> Design
					</button>
				</div>
			</div>
			<div className={`master-menu-image ${inView ? "slide-in-right" : "pre-animation"}`}>
				<div className="images">
					<div className="back-image">
						<img src="images/projects/MasterMenu_ui.png" />
					</div>
					<div className="fore-image">
						<img src="images/projects/MasterMenu_design.jpg" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default MasterMenuProject;
