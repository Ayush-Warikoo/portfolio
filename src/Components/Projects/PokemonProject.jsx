import React from "react";
import { useInView } from "react-intersection-observer";

function PokemonProject() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0,
	});
	return (
		<div ref={ref} className="projects-item">
			<div className={`pokemon-image ${inView ? "slide-in-left" : "pre-animation"}`}>
				<div className="images">
					<div className="back-image">
						<img src="images/projects/pokemon2.png" />
					</div>
					<div className="fore-image">
						<img src="images/projects/pokemon.png" />
					</div>
				</div>
			</div>
			<div className={`right-info ${inView ? "slide-in-right" : "pre-animation"}`}>
				<div className="title">
					<h2>Pokémon</h2>
					<img src="images/projects/processing.png" alt="Processing" />
				</div>
				<h3> Game Recreation Using Java Animation Library </h3>
				<p>
					A Pokémon-like game I implemented using object-oriented programming in Java and
					animation library, Processing, as my first venture into game development. Users
					may capture and battle with pokemon while following the game storyline. The
					application leverages the ControlP5 and Minim libraries for the user interface
					and game audio respectively.
				</p>
				<button
					className="lift-button"
					onClick={() =>
						window.open("https://github.com/Ayush-Warikoo/Pokemon-Recreation", "_blank")
					}
				>
					<i className={"fa fa-github"}></i> GitHub
				</button>
			</div>
		</div>
	);
}

export default PokemonProject;
