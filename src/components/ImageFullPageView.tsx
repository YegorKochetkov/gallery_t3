import React from "react";
import Image from "next/image";
import { type Image as ImageType } from "~/server/db/schema";

export const ImageFullPageView = (
  { image }: { image: ImageType }
) => {
  return (
    <Image
      src={image.url}
      alt={image.name}
      width={1600}
      height={1600}
    />
  );
};
