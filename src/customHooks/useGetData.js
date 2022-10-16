import { useEffect, useState } from "react";

export default function useGetData(url) {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((d) => setData(d));
	});

	return data;
}
