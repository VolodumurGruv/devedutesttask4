import useGetData from "../../customHooks/useGetData";

export default function Users() {
	const users = useGetData("https://jsonplaceholder.typicode.com/users");

	return (
		<section className="card">
			<div className="card-header">
				<h2>Users List</h2>
				<div>
					<button className="btn">Make big cards</button>
					<button className="btn">Add users</button>
				</div>
			</div>
			<div className="card-items">
				{users.map((user) => {
					return (
						<div className="card-item" key={user.id}>
							<p className="card-user-name">{user.name}</p>
							<p className="card-user-email">{user.email}</p>
							<p className="card-user-phone">{user.phone}</p>

							<button>View</button>
							<button>Change color</button>
						</div>
					);
				})}
			</div>
		</section>
	);
}
