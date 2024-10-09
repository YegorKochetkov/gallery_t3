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
      <div className="flex flex-row gap-5 max-h-full">
        <div className="[&_img]:object-top [&_img]:mx-auto [&_img]:w-auto [&_img]:h-full [&_img]:object-contain basis-2/3 grow shrink">
          <ImageFullPageView image={image} />
        </div>
        <div className="border-gray-300 text-shadow pl-5 border-l-2 grow-0 h-min text-2xl basis-1/3">
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
