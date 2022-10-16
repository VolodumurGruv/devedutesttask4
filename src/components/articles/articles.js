import useGetData from "../../customHooks/useGetData";

export default function Articles() {
	const articles = useGetData("https://jsonplaceholder.typicode.com/posts");

	return (
		<section className="card">
			<div className="card-header">
				<h2>Article List</h2>
				<div>
					<button className="btn">Make big cards</button>
					<button className="btn">Add articles</button>
				</div>
			</div>
			<div className="card-items">
				{articles.map((article) => {
					return (
						<div className="card-item" key={article.id}>
							<p className="card-item-title">
								{article.title.length > 15
									? `${article.title.slice(0, 16)}...`
									: article.title}
							</p>
							<p className="card-item-body">
								{article.body.length > 50
									? `${article.body.slice(0, 51)}...`
									: article.body}
							</p>

							<button>View</button>
							<button>Change color</button>
						</div>
					);
				})}
			</div>
		</section>
	);
}
