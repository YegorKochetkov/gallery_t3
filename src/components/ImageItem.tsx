import React from 'react';
import Image from "next/image";

export const ImageItem = (image: {
  url: string;
  name: string;
}) => {
  return (
    <figure>
      <Image
        src={image.url}
        alt={image.name}
        width={200}
        height={200}
        className="rounded w-full object-cover"
      />
      <figcaption>{image.name}</figcaption>
    </figure>

  )
}
