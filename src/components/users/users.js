import useGetData from "../../customHooks/useGetData";
import CardAction from "../cardAction";
import CardHeader from "../cardHeader";
import Modal from "../modal";
import { useState } from "react";

export default function Users() {
	const [currentColor, setCurrentColor] = useState("");
	const users = useGetData("https://jsonplaceholder.typicode.com/users");

	function changeColor(e) {
		const colors = ["red", "green", "blue"];

		setCurrentColor(colors[Math.floor(Math.random() * 3)]);
	}

	return (
		<section className="card">
			<CardHeader name="users" />
			<div className="card-items">
				{users.map((user) => {
					return (
						<div
							style={{ background: currentColor }}
							className="card-item"
							key={user.id}
						>
							<p className="card-user-name">{user.name}</p>
							<p className="card-user-email">{user.email}</p>
							<p className="card-user-phone">{user.phone}</p>
							<CardAction change={changeColor} />
						</div>
					);
				})}
			</div>
		</section>
	);
}
