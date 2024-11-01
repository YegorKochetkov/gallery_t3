import "server-only";
import { auth } from "@clerk/nextjs/server";

import { db } from "./db";
import { type Image } from "./db/schema";
import { type OneOf } from "~/lib/utils";

type getUserImagesResult = OneOf<[{ images: Image[]; error: null }, { images: null; error: string }]>;

export async function getUserImages(): Promise<getUserImagesResult> {
	const user = auth();

	if (!user.userId) return { images: null, error: "Unauthorized" };

	try {
		const images = await db.query.images.findMany({
			where: (model, { eq }) => eq(model.userId, user.userId),
			orderBy: (model, { asc }) => asc(model.name),
		});

		return { images, error: null };
	} catch (error) {
		console.error("Can`t get images", error);

		return { images: null, error: "Can`t get images. Please try again later." };
	}
}

type getImageResult = OneOf<[{ image: Image; error: null }, { image: null; error: string }]>;

export async function getImage(id: number): Promise<getImageResult> {
	const user = auth();

	if (!user.userId) return { image: null, error: "Unauthorized" };

	try {
		const image = await db.query.images.findFirst({
			where: (model, { eq }) => eq(model.id, id),
		});

		if (!image) return { image: null, error: "Image not found" };

		if (image.userId !== user.userId) return { image: null, error: "Unauthorized" };

		return { image, error: null };
	} catch (error) {
		console.error("Can`t get image", error);

		return { image: null, error: "Can`t get image. Please try again later." };
	}
}
