import useGetData from "../../customHooks/useGetData";

export default function Photos() {
	const photos = useGetData("https://jsonplaceholder.typicode.com/photos");

	return (
		<section className="card">
			<div className="card-header">
				<h2>photos List</h2>
				<div>
					<button className="btn">Make big cards</button>
					<button className="btn">Add photos</button>
				</div>
			</div>
			<div className="card-items">
				{photos.map((photo) => {
					return (
						<div className="card-item" key={photo.id}>
							<img src={photo.thumbnailUrl} alt={photo.title} />
							<button>View</button>
							<button>Change color</button>
						</div>
					);
				})}
			</div>
		</section>
	);
}
