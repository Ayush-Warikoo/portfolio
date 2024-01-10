import React from 'react';

const projects = [
  {
    "title": "Master Menu Web Application",
    "category": "Built with FERN (Firebase, ExpressJS, ReactJS, NodeJS)",
    "image": "MasterMenu1.png",
    "url": "https://github.com/Ayush-Warikoo/master-menu"
  },
  {
    "title": "Chess++ Web Application",
    "category": "Django-React Multiplayer Chess App using Websockets",
    "image": "chessPlusPlus.png",
    "url": "https://github.com/Ayush-Warikoo/chess-plus-plus-backend"
  },
  {
    "title": "Hydra Card Game",
    "category": "C++ application with object-oriented design principles",
    "image": "hydra.png",
    "url": "https://gitfront.io/r/AyushWarikoo/329ccd59d0de6f72a36da99247dd6cbd9bf51d0b/Hydra/"
  },
  {
    "title": "Pokemon Game Recreation",
    "category": "Application built with java and animation library processing",
    "image": "pokemon.png",
    "url": "https://github.com/Ayush-Warikoo/Pokemon_Recreation"
  },
  {
    "title": "DECA Ranker",
    "category": "Python algorithm sorting students into groups",
    "image": "deca.png",
    "url": "https://github.com/Ayush-Warikoo/DECA_Ranker"
  },
  {
    "title": "Blackjack Card game",
    "category": "Python application",
    "image": "blackjack.jpg",
    "url": "https://github.com/Ayush-Warikoo/Blackjack"
  }
];

function Projects() {
  return (
		<section id="projects">
			<div className="row">
				<div className="twelve columns collapsed">
					<div id="projects-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
						<div style={{ marginBottom: "56px", marginLeft: "20px" }}>
							<h1>
								<span>Projects</span>
							</h1>
						</div>
						<div style={{ display: "flex", width: "100%" }}>
							<div
								style={{
									flex: 1,
									textAlign: "left",
									padding: "20px",
									marginRight: "70px",
								}}
							>
								<div style={{ display: "flex", alignItems: "center" }}>
									<h2 style={{ marginRight: "15px" }}>Master Menu</h2>
									<img
										src="images/projects/react2.png"
										alt="React"
										style={{ height: "32px" }}
									/>
								</div>
								<h3>Menu Management Web Application</h3>
								<p>
									A Firebase-React web application, hosted and deployed using AWS,
									that minimizes the inconveniences of eating out by providing
									digital restaurant menus all in one place. Using the menu
									filter, users can input allergies/dietary restrictions,
									ingredient preferences, dish rating, etc to find the food that
									best matches their desired criteria. Once a user has decided on
									a dish, they can add it to their cart and pre-order it alongside
									booking a reservation time.
								</p>
							</div>
							<div style={{ flex: 1, textAlign: "center", padding: "20px" }}>
								<div
									style={{
										perspective: "1000px",
										perspectiveOrigin: "50% 50%",
									}}
								>
									<div
										style={{
											transformStyle: "preserve-3d",
											position: "relative",
											transform:
												"rotateY(-20deg) rotateX(10deg) translateZ(0px)",
										}}
									>
										<img
											src="images/projects/MasterMenu1.png"
											alt="First Image"
											style={{
												maxWidth: "100%",
												height: "auto",
												borderRadius: "10px",
												boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.6)",
												transform: "translateZ(100px)", // Brings the first image closer to the viewer
											}}
										/>
									</div>
									<div
										style={{
											transformStyle: "preserve-3d",
											position: "relative",
											transform:
												"rotateY(-20deg) rotateX(10deg) translateZ(-100px)", // Pushes the second image further away
											marginTop: "-120px", // Adjust the overlap, assuming both images have a similar height
										}}
									>
										<img
											src="images/projects/MasterMenu.jpg"
											alt="Second Image"
											style={{
												maxWidth: "100%",
												height: "auto",
												borderRadius: "10px",
												boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.6)",
											}}
										/>
									</div>
								</div>
							</div>
						</div>

						{/* {projects.map((project) => {
							var projectImage = "images/projects/" + project.image;
							return (
								<div key={project.title} className="columns projects-item">
									<div className="item-wrap">
										<a href={project.url} title={project.title}>
											<img alt={project.title} src={projectImage} />
											<div className="overlay">
												<div className="projects-item-meta">
													<h5>{project.title}</h5>
													<p>{project.category}</p>
												</div>
											</div>
											<div className="link-icon">
												<i className="fa fa-link"></i>
											</div>
										</a>
									</div>
								</div>
							);
						})} */}
					</div>
				</div>
			</div>
		</section>
  );
}

export default Projects;