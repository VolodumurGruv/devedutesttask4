import useGetData from "../../customHooks/useGetData";
import CardAction from "../cardAction";
import CardHeader from "../cardHeader";

export default function Photos() {
	const photos = useGetData("https://jsonplaceholder.typicode.com/photos");

	return (
		<section className="card">
			<CardHeader name="photos" />
			<div className="card-items">
				{photos.map((photo) => {
					return (
						<div className="card-item" key={photo.id}>
							<img src={photo.thumbnailUrl} alt={photo.title} />
							<CardAction />
						</div>
					);
				})}
			</div>
		</section>
	);
}
