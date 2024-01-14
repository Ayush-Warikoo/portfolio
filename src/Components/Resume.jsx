import React from "react";
import { educationList, workList, languages, technologies } from "./constants";
import { useInView } from "react-intersection-observer";

function Resume() {
	const [skillBarsRef, skillBarsInView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	const [educationRef, educationInView] = useInView({
		triggerOnce: true,
		threshold: 0,
	});
	const [workRef, workInView] = useInView({
		triggerOnce: true,
		threshold: 0,
	});

	function getSkillBars(data) {
		return data.map((skill) => {
			var className =
				"bar-expand " + (skillBarsInView ? `bar-${skill.level.replace(/\D/g, "")}` : "");
			return (
				<li key={skill.name}>
					<span style={{ width: skill.level }} className={className}></span>
					<em>{skill.name}</em>
				</li>
			);
		});
	}

	return (
		<section id="resume">
			<div ref={educationRef} className="row education">
				<div
					className={`three columns header-col ${
						educationInView ? "slide-in-left" : "pre-animation"
					}`}
				>
					<h1>
						<span>Education</span>
					</h1>
				</div>

				<div
					className={`nine columns main-col ${
						educationInView ? "slide-in-right" : "pre-animation"
					}`}
				>
					<div className="row item slide-in-right">
						<div className="twelve columns">
							{educationList.map((education) => (
								<div key={education.school}>
									<div className="profile">
										<img src={education.imageSrc} />
										<div>
											<h3>{education.school}</h3>
											<p className="info">
												{education.degree} <span>&bull;</span>
												<em>{education.graduated}</em>
											</p>
										</div>
									</div>
									<p>
										{education.description}
										{education.courses}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div ref={workRef} className="row work">
				<div
					className={`three columns header-col ${
						workInView ? "slide-in-left" : "pre-animation"
					}`}
				>
					<h1>
						<span>Work</span>
					</h1>
				</div>
				<div
					className={`nine columns main-col ${
						workInView ? "slide-in-right" : "pre-animation"
					}`}
				>
					{workList.map((work) => (
						<div key={work.company}>
							<div className="profile">
								<img src={work.imageSrc} />
								<div>
									<h3>{work.company}</h3>
									<p className="info">
										{work.title} <span>&bull;</span>
										<em>{work.years}</em>
									</p>
								</div>
							</div>
							<p>
								{work.description}
								<br></br>
								<b> Tech Stack: </b>
								{work.tech}
							</p>
						</div>
					))}
				</div>
			</div>

			<div className="row skill">
				<div className="three columns header-col">
					<h1>
						<span>Skills</span>
					</h1>
				</div>

				<div className="nine columns main-col">
					<div className="bars" ref={skillBarsRef}>
						<div className="languages">
							<h3> Languages </h3>
							<ul className="skills">{getSkillBars(languages)}</ul>
						</div>
						<div className="technologies">
							<h3> Technologies </h3>
							<ul className="skills">{getSkillBars(technologies)}</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Resume;
