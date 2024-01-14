import React from "react";
import ChessPlusPlusProject from "./ChessPlusPlusProject";
import HydraProject from "./HydraProject";
import MasterMenuProject from "./MasterMenuProject";
import PokemonProject from "./PokemonProject";

function Projects() {
	return (
		<section id="projects">
			<div className="row">
				<div className="twelve columns collapsed">
					<div id="projects-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
						<h1>
							<span>Projects</span>
						</h1>
						<MasterMenuProject />
						<hr />
						<ChessPlusPlusProject />
						<hr />
						<HydraProject />
						<hr />
						<PokemonProject />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
