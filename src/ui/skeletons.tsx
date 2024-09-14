export function ImageSkeleton() {
	return (
		<div className="relative bg-gray-300 shadow-sm p-2 rounded min-h-48 overflow-hidden aspect-square shimmer" />
	);
}

export function ImagesSkeleton() {
	return (
		<div className="gap-4 grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
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
