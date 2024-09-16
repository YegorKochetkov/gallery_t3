import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Suspense } from "react";
import { ImagesList } from "~/components/ImagesList";
import { ImagesSkeleton } from "~/ui/skeletons";

export const dynamic = "force-dynamic";

export default function HomePage() {
	return (
		<main className="p-4">
			<SignedOut>
				<p className="text-center text-2xl">Please, sign in</p>
			</SignedOut>

			<SignedIn>
				<Suspense fallback={<ImagesSkeleton />}>
					<ImagesList />
				</Suspense>
			</SignedIn>
		</main>
	);
}
