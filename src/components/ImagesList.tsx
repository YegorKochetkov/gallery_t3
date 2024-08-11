import Image from "next/image";
import { db } from "~/server/db";

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
				<li key={image.id} className="rounded overflow-hidden">
					<Image
						src={image.url}
						alt={image.name}
						width={200}
						height={200}
						className="w-full object-cover"
					/>
				</li>
			))}
		</ul>
	);
};
