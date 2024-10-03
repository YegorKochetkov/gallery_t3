import React from "react";
import Image from "next/image";
import { type Image as ImageType } from "~/server/db/schema";

export const ImageItem = (
	{ image, height = 200, width = 200 }:
		{ image: ImageType, height?: number, width?: number }
) => {
	return (
		<figure className="w-fit text-center">
			<div className="relative bg-gray-300 rounded overflow-clip shimmer">
				<Image
					src={image.url}
					alt={image.name}
					width={height}
					height={width}
					className={`group-hover/image:scale-105 w-[${width}px] transform-gpu transition-transform object-cover`}
				/>
			</div>
			<figcaption>{image.name}</figcaption>
		</figure>
	);
};
