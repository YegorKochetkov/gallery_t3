import Image from "next/image";
import { mockImages } from "~/lib/mock-data";

export default function HomePage() {
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
