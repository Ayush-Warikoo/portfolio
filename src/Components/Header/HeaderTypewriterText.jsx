import Typist from "react-typist";
import { titles } from "../constants";

import React, { useState } from "react";

function HeaderTypewriterText() {
	const [typistKey, setTypistKey] = useState(1); // To handle looping
	return (
		<Typist key={typistKey} onTypingDone={() => setTypistKey((prev) => prev + 1)}>
			{titles.map((word) => [
				<span>{word}</span>,
				<Typist.Backspace count={word.length} delay={1000} />,
			])}
		</Typist>
	);
}

export default HeaderTypewriterText;
