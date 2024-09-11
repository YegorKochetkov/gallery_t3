// Loading animation
const shimmer = `
	before:absolute before:inset-0 before:-translate-x-full
	before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r
	before:from-transparent before:via-white/30 before:to-transparent
`;

export function ImageSkeleton() {
	return (
		<div
			className={`
				${shimmer}
				relative aspect-square min-h-48 overflow-hidden rounded
				bg-gray-300 p-2 shadow-sm
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
