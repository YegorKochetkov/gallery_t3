import { ImageItem } from "./ImageItem";

import { getUserImages } from "~/server/queries";

export const ImagesList = async () => {
	const { images, error } = await getUserImages();

	if (error) {
		return <p className="text-2xl text-center">{error}</p>;
	}

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
