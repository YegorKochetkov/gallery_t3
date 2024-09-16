export function ImageSkeleton() {
	return (
		<div className="shimmer relative aspect-square min-h-48 overflow-hidden rounded bg-gray-300 p-2 shadow-sm" />
	);
}

export function ImagesSkeleton() {
	return (
		<div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-4">
			<ImageSkeleton />
			<ImageSkeleton />
			<ImageSkeleton />
			<ImageSkeleton />
			<ImageSkeleton />
			<ImageSkeleton />
			<ImageSkeleton />
			<ImageSkeleton />
			<ImageSkeleton />
			<ImageSkeleton />
			<ImageSkeleton />
			<ImageSkeleton />
			<ImageSkeleton />
			<ImageSkeleton />
			<ImageSkeleton />
			<ImageSkeleton />
		</div>
	);
}
