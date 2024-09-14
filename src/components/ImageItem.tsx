import React from "react";
import Image from "next/image";

export const ImageItem = (image: {
  url: string;
  name: string;
}) => {
  return (
    <figure>
      <div className="relative bg-gray-300 rounded overflow-clip shimmer">
        <Image
          src={image.url}
          alt={image.name}
          width={200}
          height={200}
          className="w-full transform-gpu transition-transform object-cover hover:scale-105"
        />
      </div>
      <figcaption>{image.name}</figcaption>
    </figure>
  )
}
