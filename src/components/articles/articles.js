import { useEffect, useState } from "react";
import "../articles/articles.css";

export default function Articles() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((data) => setArticles(data));
	});

	return (
		<section className="articles">
			<div className="articles-header">
				<h2>Article List</h2>
				<div>
					<button className="btn">Make big cards</button>
					<button className="btn">Add articles</button>
				</div>
			</div>
			<div className="articles-items">
				{articles.map((article) => {
					return (
						<div className="articles-item" key={article.id}>
							<p className="articles-item-title">
								{article.title.length > 15
									? `${article.title.slice(0, 16)}...`
									: article.title}
							</p>
							<p className="articles-item-body">
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
