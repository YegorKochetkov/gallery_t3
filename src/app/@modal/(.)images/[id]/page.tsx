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
      <ImageFullPageView image={image} />
    </Modal >
  );
}          
