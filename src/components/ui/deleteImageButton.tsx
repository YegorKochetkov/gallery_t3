"use client";

import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import { Button } from './button';
import { deleteImageAction } from '~/actions';
import { useActionState } from 'react';

export const DeleteImageButton = (
  { imageId, isInModalView = false }: { imageId: number, isInModalView?: boolean }
) => {
  const router = useRouter();
  const [ _state, formAction, isPending ] = useActionState(handleDelete, null);

  async function handleDelete(_state: void | null, formData: FormData) {
    const response = await deleteImageAction(formData);

    if (response.error) toast.error(response.error);

    if (isInModalView) {
      router.back();
    } else {
      router.push("/");
    }
  }

  return (
    <div>
      <form action={formAction}>
        <input type="hidden" name="imageId" value={imageId} />
        <Button variant="destructive" type="submit" disabled={isPending}>
          {isPending ? "Deleting..." : "Delete"}
        </Button>
      </form>
    </div>
  )
}
