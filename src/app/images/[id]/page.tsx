import { ImageFullPageView } from "~/components/ImageFullPageView";

export default async function Image({
  params: { id: imageId }
}: {
  params: { id: string }
}) {
  const idAsNumber = Number(imageId);

  if (Number.isNaN(idAsNumber)) {
    return <p className="absolute inset-0 text-2xl text-center">Invalid image ID</p>;
  }

  return (
    <div className="m-4 mx-auto">
      <ImageFullPageView imageId={idAsNumber} />
    </div>
  );
}
