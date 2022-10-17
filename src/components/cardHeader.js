export default function CardHeader(props) {
	return (
		<div className="card-header">
			<h2>photos List</h2>
			<div>
				<button className="btn">Make big cards</button>
				<button className="btn">Add {props.name}</button>
			</div>
		</div>
	);
}
