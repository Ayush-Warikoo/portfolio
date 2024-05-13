import React from "react";
import ChessPlusPlusProject from "./ChessPlusPlusProject";
import HydraProject from "./HydraProject";
import MasterMenuProject from "./MasterMenuProject";
import PokemonProject from "./PokemonProject";

function Projects() {
	return (
		<section id="projects">
			<div className="row">
				<div className="twelve columns">
					<div id="projects-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            <div className="header-col">
              <h1>
                <span>Projects</span>
              </h1>
            </div>
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
