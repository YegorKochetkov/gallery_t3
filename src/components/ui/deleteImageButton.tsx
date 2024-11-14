"use client";

import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import { Button } from './button';
import { deleteImageAction } from '~/actions';
import { useFormState } from 'react-dom';

export const DeleteImageButton = (
  { imageId, isInModalView = false }: { imageId: number, isInModalView?: boolean }
) => {
  const router = useRouter();

  async function handleDelete(formData: FormData) {
    const response = await deleteImageAction(formData);

    if (response.error) toast.error(response.error);

    if (!isInModalView) {
      router.push("/");
    } else {
      router.back();
    }
  }

  return (
    <div>
      <form
        action={handleDelete}
      >
        <input type="hidden" name="imageId" value={imageId} />
        <Button variant="destructive" type="submit">Delete</Button>
      </form>
    </div>
  )
}