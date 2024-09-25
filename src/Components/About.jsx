import React from "react";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import PhoneIphoneRoundedIcon from "@material-ui/icons/PhoneIphoneRounded";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";
import CalendarTodayRoundedIcon from "@material-ui/icons/CalendarTodayRounded";
import { getAge } from "./helper";

const aboutItemsLeft = [
	{ label: "Location", text: "Toronto, ON, Canada", Icon: LocationOnRoundedIcon },
	{ label: "Undergrad", text: "University of Waterloo", Icon: SchoolRoundedIcon },
	{ label: "Phone", text: "(647) - 527 - 1409", Icon: PhoneIphoneRoundedIcon },
];

const aboutItemsRight = [
	{ label: "Age", text: `${getAge("2001-02-19")} years old`, Icon: CalendarTodayRoundedIcon },
	{ label: "Interests", text: "Board games, ping pong, hiking", Icon: StarBorderRoundedIcon },
	{ label: "Email", text: "ayush.warikoo77@gmail.com", Icon: MailOutlineRoundedIcon },
];
const aboutItems = [aboutItemsLeft, aboutItemsRight];

function About() {
	return (
		<section id="about">
			<div className="row">
				<div className="three columns">
					<img className="profile-pic" src={"images/Profile-Picture.jpeg"} alt="" />
				</div>
				<div className="nine columns main-col">
					<h2>Hi! I'm Ayush Warikoo.</h2>
					<p>
						I graduated from the University of Waterloo with a double degree in CS & BBA.
						My expertise from past internships and projects is in full-stack web development,
						primarily using JavaScript, Python and Java; though I’m passionate about software
						development as a whole. Previously I've completed SWE internships at Amazon
						(AWS), Zanbato, NextRoll and Autodesk. I like to approach problems by
						thinking about what would generate the most value, with a strong emphasis on
						performance. Overall, I'm looking for an opportunity to
						contribute towards something impactful alongside talented engineers. Feel
						free to reach out, I would be happy to discuss my expertise in greater
						detail!
					</p>
					<div className="row">
						{aboutItems.map((items, idx) => (
							<div key={idx} className="columns contact-details">
								<ul className="">
									{items.map(({ label, text, Icon }) => (
										<li key={label}>
											<span className="icon">
												<Icon fontSize="large" />
											</span>
											<span className="label"> {label}:</span>
											<span className="text"> {text}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
