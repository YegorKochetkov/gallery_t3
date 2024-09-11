import { db } from "~/server/db";
import { ImageItem } from "./ImageItem";

import { auth } from "@clerk/nextjs/server";

export const ImagesList = async () => {
	const user = auth();

	if (!user.userId) return null;

	const images = await db.query.images.findMany({
		where: (model, { eq }) => eq(model.userId, user.userId),
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
