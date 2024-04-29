import Image from "next/image";
import { mockImages } from "~/lib/mock-data";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.debug('🚀 ~ file: page.tsx:7 ~ posts:', posts);

  return (
    <main className="p-4">
      <ul data-images-list className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4">
        {mockImages.map((image) => (
          <li
            key={image.id}
            className="rounded overflow-hidden"
          >
            <Image
              src={image.url}
              alt="random AI generated image"
              width={500}
              height={500}
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
