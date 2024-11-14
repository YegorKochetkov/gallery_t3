import { ImageFullPageView } from "~/components/ImageFullPageView";
import { Modal } from "~/components/Modal";

export default async function ImageModal(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const isInModalView = true;

  return (
    <Modal>
      <ImageFullPageView imageId={idAsNumber} />
    </Modal >
  );
}          
