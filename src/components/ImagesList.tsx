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
			className="justify-center gap-4 grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]"
		>
			{images?.map((image) => (
				<li key={image.id} className="flex justify-center group/image">
					<Link href={`/images/${image.id}`}>
						<ImageItem image={image} />
					</Link>
				</li>
			))}
		</ul>
	);
};
