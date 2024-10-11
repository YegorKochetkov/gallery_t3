import React from "react";
import Image from "next/image";
import { type Image as ImageType } from "~/server/db/schema";

export const ImageFullPageView = (
  { image }: { image: ImageType }
) => {
  return (
    <div className="flex md:flex-row flex-col gap-5 px-4 max-h-full">
      <div className="[&_img]:object-top [&_img]:mx-auto [&_img]:w-auto [&_img]:h-full [&_img]:object-contain md:basis-3/4 grow shrink">
        <Image
          src={image.url}
          alt={image.name}
          width={1600}
          height={1600}
        />
      </div >
      <div className="md:block hidden bg-zinc-400 w-[1px] h-auto" />
      <div className="grow-0 h-min text-2xl shrink-0 md:basis-1/4">
        <p>tags of image</p>
        <p>tags of image</p>
        <p>tags of image</p>
        <p>tags of image</p>
        <p>tags of image</p>
        <p>tags of image</p>
        <p>tags of image</p>
        <p>tags of image</p>
        <p>tags of image</p>
      </div>
    </div >
  );
};
