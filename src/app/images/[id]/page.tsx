import { ImageFullPageView } from "~/components/ImageFullPageView";

export default async function Image(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;

  return (
    <div className="m-4 mx-auto">
      <ImageFullPageView imageId={id} />
    </div>
  );
}
