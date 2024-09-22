import "server-only";
import { auth } from "@clerk/nextjs/server";

import { db } from "./db";
import { type Image } from "./db/schema";
import { type OneOf } from "~/lib/utils";

type getUserImagesResult = OneOf<
	[{ images: Image[]; error: null }, { images: null; error: string }]
>;

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
