import React from "react";
import { useInView } from "react-intersection-observer";

function HydraProject() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0,
	});
	return (
		<div ref={ref} className="projects-item">
			<div className={`hydra-info ${inView ? "slide-in-left" : "pre-animation"}`}>
				<div className="title">
					<h2>Hydra</h2>
					<img src="images/projects/cpp.png" alt="C++" />
				</div>
				<h3>Object-Oriented Designed Card Game </h3>
				<p>
					An esoteric card game I developed to demonstrate my knowlegde of coding
					standards and object-oriented programming in a fun way. The game was developed
					with object-oriented pillars & principles in mind, leveraging smart pointers and
					the observer design pattern. The design focused on adaptability, allowing users
					to customize game settings and dynamically toggle rules.
				</p>
				<button
					className="lift-button"
					onClick={() =>
						window.open(
							"https://gitfront.io/r/AyushWarikoo/329ccd59d0de6f72a36da99247dd6cbd9bf51d0b/Hydra/",
							"_blank"
						)
					}
				>
					<i className={"fa fa-github"}></i> GitHub
				</button>
				<button
					className="lift-button"
					onClick={() =>
						window.open(
							"https://www.edrawmax.com/online/share.html?code=517808ea0b4f11ecab890a951ba8b83d",
							"_blank"
						)
					}
				>
					<i className={"fa fa-pencil"}></i> Design
				</button>
			</div>
			<div className={`hydra-image ${inView ? "slide-in-right" : "pre-animation"}`}>
				<div className="images">
					<div className="image-wrapper">
						<img src="images/projects/hydra.png" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HydraProject;
