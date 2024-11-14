"use server";

import { deleteImage } from "./server/queries";

export const deleteImageAction = async (formData: FormData) => {
	const id = Number(formData.get("imageId"));

	return deleteImage(id);
};
