import { ImageFullPageView } from "~/components/ImageFullPageView";
import { Modal } from "~/components/Modal";

export default async function ImageModal({
  params: { id: imageId }
}: {
  params: { id: string }
}) {
  const idAsNumber = Number(imageId);

  if (Number.isNaN(idAsNumber)) {
    return <p className="absolute inset-0 text-2xl text-center">Invalid image ID</p>;
  }

  return (
    <Modal>
      <ImageFullPageView imageId={idAsNumber} />
    </Modal >
  );
}          
