import Image from "next/image";
import { mockImages } from "~/lib/mock-data";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-200 p-4">
      <ul data-images-list className="flex flex-wrap items-center justify-center gap-4">
        {mockImages.map((image) => (
          <li
            key={image.id}
            className="relative rounded w-full sm:w-48 aspect-square overflow-hidden"
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
