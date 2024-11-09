import React from "react";
import Image from "next/image";
import { type Image as ImageType } from "~/server/db/schema";

export const ImageItem = (
	{ image }: { image: ImageType }
) => {
	return (
		<figure className="w-full text-center">
			<div className="relative bg-gray-300 mx-auto rounded w-full h-52 overflow-clip shimmer">
				<Image
					src={image.url}
					alt={image.name}
					fill={true}
					className="bg-inherit object-cover"
				/>
			</div>
			<figcaption className="break-all">{image.name}</figcaption>
		</figure>
	);
};
