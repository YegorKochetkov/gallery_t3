import React from "react";
import Image from "next/image";

import { shimmer } from "~/ui/skeletons";

export const ImageItem = (image: {
  url: string;
  name: string;
}) => {
  return (
    <figure>
      <div className={`relative ${shimmer} rounded overflow-clip bg-gray-300`}>
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
