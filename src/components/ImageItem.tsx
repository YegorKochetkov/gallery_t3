import React from "react";
import Image from "next/image";

export const ImageItem = (image: { url: string; name: string }) => {
	return (
		<figure className="group">
			<div className="relative bg-gray-300 rounded overflow-clip shimmer">
				<Image
					src={image.url}
					alt={image.name}
					width={200}
					height={200}
					className="group-hover:scale-105 w-full transform-gpu transition-transform object-cover"
				/>
			</div>
			<figcaption>{image.name}</figcaption>
		</figure>
	);
};
