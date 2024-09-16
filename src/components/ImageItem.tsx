import React from "react";
import Image from "next/image";

export const ImageItem = (image: { url: string; name: string }) => {
	return (
		<figure>
			<div className="shimmer relative overflow-clip rounded bg-gray-300">
				<Image
					src={image.url}
					alt={image.name}
					width={200}
					height={200}
					className="w-full transform-gpu object-cover transition-transform hover:scale-105"
				/>
			</div>
			<figcaption>{image.name}</figcaption>
		</figure>
	);
};
