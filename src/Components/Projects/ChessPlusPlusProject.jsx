import React from "react";
import { useInView } from "react-intersection-observer";

function ChessPlusPlusProject() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0,
	});
	return (
		<div ref={ref} className="projects-item">
			<div className={`chess-plus-plus-image ${inView ? "slide-in-left" : "pre-animation"}`}>
				<div className="laptop-video">
					<img src={"images/projects/cpp-laptop.png"} alt="Laptop Frame" />
					<video src={"images/projects/Chess++Demo.mov"} autoPlay muted loop />
				</div>
			</div>
			<div className={`right-info ${inView ? "slide-in-right" : "pre-animation"}`}>
				<div className="title">
					<h2>Chess++</h2>
					<img src="images/projects/django.webp" alt="Django" />
				</div>
				<h3>Multiplayer Chess Web Application</h3>
				<p>
					Chess++ is an online multiplayer chess web application, allowiong users to
					create, join, play and spectate chess games. The project was developed using
					Django Channels and Websocket API for real-time two-way communication, with a
					server-client architecture. Additionally, the application is built with React on
					the frontend, ElastiCache (Redis) for persisting game state and deployed using
					Elastic Beanstalk. The project is still early in development and will include a
					number of unique game modes.
				</p>
				<button
					className="lift-button"
					onClick={() =>
						window.open(
							"https://github.com/Ayush-Warikoo/Chess-Plus-Plus-Backend",
							"_blank"
						)
					}
				>
					<i className={"fa fa-github"}></i> GitHub
				</button>
				<button
					className="lift-button"
					onClick={() =>
						window.open("https://www.youtube.com/watch?v=XN70csMSSPA", "_blank")
					}
				>
					<i className={"fa fa-youtube-play"}></i> Demo
				</button>
			</div>
		</div>
	);
}

export default ChessPlusPlusProject;
