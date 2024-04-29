import { Suspense } from "react";
import { ImagesList } from "~/components/ImagesList";
import { ImagesSkeleton } from "~/ui/skeletons";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="p-4">
      <Suspense fallback={<ImagesSkeleton />}>
        <ImagesList />
      </Suspense>
    </main>
  );
}
