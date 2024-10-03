import { ImageFullPageView } from "~/components/ImageFullPageView";
import { getImage } from "~/server/queries";

export default async function Image({
  params: { id: imageId }
}: {
  params: { id: string }
}) {
  const idAsNumber = Number(imageId);

  if (Number.isNaN(idAsNumber)) {
    return <p className="absolute inset-0 text-2xl text-center">Invalid image ID</p>;
  }

  const { image, error } = await getImage(+imageId);

  if (error !== null) {
    return <p className="absolute inset-0 text-2xl text-center">{error}</p>;
  }

  return (
    <div className="mx-auto mt-4 max-w-3xl">
      <ImageFullPageView image={image} />
    </div>
  );
}
