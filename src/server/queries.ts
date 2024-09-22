import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getUserImages() {
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
