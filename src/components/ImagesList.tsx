import Link from "next/link";

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
			className="justify-center gap-6 grid grid-cols-[repeat(auto-fill,minmax(13rem,1fr))] image-list-hover-effect"
		>
			{images?.map((image) => (
				<li key={image.id}>
					<Link href={`/images/${image.id}`}>
						<ImageItem image={image} />
					</Link>
				</li>
			))}
		</ul>
	);
};
