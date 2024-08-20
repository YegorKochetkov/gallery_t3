import { db } from "~/server/db";
import { ImageItem } from "./ImageItem";

export const ImagesList = async () => {
	const images = await db.query.images.findMany({
		orderBy: (model, { asc }) => asc(model.name),
	});

	return (
		<ul
			data-images-list
			className="gap-4 grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]"
		>
			{images.map((image) => (
				<li key={image.id}>
					<ImageItem {...image} />
				</li>
			))}
		</ul>
	);
};
