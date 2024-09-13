export function ImageSkeleton() {
	return (
		<div
			className={`
				shimmer bg-gray-300 p-2 shadow-sm relative aspect-square min-h-48
				overflow-hidden rounded
			`}
		/>
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
