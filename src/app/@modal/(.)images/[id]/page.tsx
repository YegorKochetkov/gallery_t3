import { ImageFullPageView } from "~/components/ImageFullPageView";
import { Modal } from "~/components/Modal";
import { getImage } from "~/server/queries";

export default async function ImageModal({
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
    <Modal>
      <div className="gap-6 grid grid-cols-3">
        <div className="col-span-2 w-fit h-4/5 [&>img]:ml-auto [&>img]:object-top [&>img]:w-auto [&>img]:h-full [&>img]:object-contain">
          <ImageFullPageView image={image} />
        </div>
        <div className="text-2xl">
          <p>tags of image</p>
          <p>tags of image</p>
          <p>tags of image</p>
          <p>tags of image</p>
          <p>tags of image</p>
          <p>tags of image</p>
          <p>tags of image</p>
          <p>tags of image</p>
          <p>tags of image</p>
        </div>
      </div>
    </Modal >
  );
}
