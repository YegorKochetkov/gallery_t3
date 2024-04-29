// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent';

export function ImageSkeleton() {
  return (
    <div
      className={`${shimmer} relative rounded overflow-hidden aspect-square min-h-48 bg-gray-300 p-2 shadow-sm`}
    />
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
    </div>
  );
}