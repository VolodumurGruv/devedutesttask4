import { useEffect, useState } from "react";
import "../users/users.css";

export default function Users() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data));
	});

	return (
		<section className="users">
			<div className="users-header">
				<h2>Users List</h2>
				<div>
					<button className="btn">Make big cards</button>
					<button className="btn">Add users</button>
				</div>
			</div>
			<div className="users-items">
				{users.map((user) => {
					return (
						<div className="users-item" key={user.id}>
							<p className="users-item-name">{user.name}</p>
							<p className="users-item-email">{user.email}</p>
							<p className="users-item-phone">{user.phone}</p>

							<button>View</button>
							<button>Change color</button>
						</div>
					);
				})}
			</div>
		</section>
	);
}
