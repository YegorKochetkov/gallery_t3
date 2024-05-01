import Image from "next/image";
import { db } from "~/server/db";

export const ImagesList = async () => {
  const images = await db.query.images.findMany();

  return (
    <ul data-images-list className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4">
      {images.map((image) => (
        <li
          key={image.id}
          className="rounded overflow-hidden"
        >
          <Image
            src={image.url}
            alt={image.name}
            width={200}
            height={200}
            className="object-cover w-full"
          />
        </li>
      ))}
    </ul>
  )
}
