import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";

import { getImage } from "~/server/queries";

export const ImageFullPageView = async (
  { imageId }: { imageId: number }
) => {
  const { image, error } = await getImage(imageId);


  if (error !== null) {
    return <p className="text-2xl text-center">{error}</p>;
  }

  const client = clerkClient();
  const uploaderInfo = await client.users.getUser(image.userId);

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
        <h2 className="border-zinc-400 mb-2 pb-2 border-b text-3xl text-center">
          {image.name}
        </h2>
        <div className="inline-flex flex-col gap-2">
          <p>Uploaded by {uploaderInfo?.fullName}</p>
          <p>Created on {image.createdAt.toLocaleDateString()}</p>
        </div>
      </div>
    </div >
  );
};
