import "server-only";
import { auth } from "@clerk/nextjs/server";

import { db } from "./db";
import { type Image } from "./db/schema";

export async function getUserImages() {
	const user = auth();

	if (!user.userId) return { images: [] as Image[], error: "Unauthorized" };

	try {
		const images = await db.query.images.findMany({
			where: (model, { eq }) => eq(model.userId, user.userId),
			orderBy: (model, { asc }) => asc(model.name),
		});

		return { images, error: null };
	} catch (error) {
		console.error("Can`t get images", error);

		return {
			images: [] as Image[],
			error: "Can`t get images. Please try again later.",
		};
	}
}
