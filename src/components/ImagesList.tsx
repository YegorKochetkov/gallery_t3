import { ImageItem } from "./ImageItem";

import { getUserImages } from "~/server/queries";

export const ImagesList = async () => {
	const { images, error } = await getUserImages();

	if (error) {
		return <p className="text-center text-2xl">{error}</p>;
	}

	return (
		<ul
			data-images-list
			className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4"
		>
			{images.map((image) => (
				<li key={image.id}>
					<ImageItem {...image} />
				</li>
			))}
		</ul>
	);
};
