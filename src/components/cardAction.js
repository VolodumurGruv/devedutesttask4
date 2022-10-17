import { useState } from "react";
import Modal from "./modal";

export default function CardAction(props) {
	const [isShown, setIsShown] = useState(false);

	function changeColor(e) {
		const colors = ["red", "green", "blue", ""];

		e.target.parentNode.style.background = colors[Math.floor(Math.random() * 4)];
	}

	return (
		<>
			<div>
				<Modal shown={isShown} close={() => setIsShown(false)} />
			</div>
			<button className="btn" onClick={() => setIsShown(true)}>
				View
			</button>
			<button className="btn" onClick={(e) => changeColor(e)}>
				Change color
			</button>
		</>
	);
}
