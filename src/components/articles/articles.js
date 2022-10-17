import useGetData from "../../customHooks/useGetData";
import CardAction from "../cardAction";
import CardHeader from "../cardHeader";

export default function Articles() {
	const articles = useGetData("https://jsonplaceholder.typicode.com/posts");

	return (
		<section className="card">
			<CardHeader name="articles" />
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

							<CardAction />
						</div>
					);
				})}
			</div>
		</section>
	);
}
