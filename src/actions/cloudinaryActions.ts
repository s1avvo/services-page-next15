"use server";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryArrayResourceSchema, CloudinaryResourceSchema } from "@/lib/schema";

cloudinary.config({
	cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getListImages(resourceTag: string) {
	try {
		const { resources } = await cloudinary.api.resources_by_tag(`${resourceTag}`, {
			context: true,
			max_results: 6,
		});

		const parsedResponse = CloudinaryArrayResourceSchema.safeParse({ resources });

		if (!parsedResponse.success) {
			console.error("Images validation from Cloudinary service failed", parsedResponse.error);
			return undefined;
		}

		return parsedResponse.data.resources;
	} catch (e) {
		const error = (e as { error: { message: string } }).error.message;

		console.error("Fatch image from Cloudinary service failed", error);
	}
	return undefined;
}

export async function getImage(publicId: string) {
	try {
		const image = await cloudinary.api.resource(`${publicId}`);

		const parsedResponse = CloudinaryResourceSchema.safeParse(image);

		if (!parsedResponse.success) {
			console.error("Image validation from Cloudinary service failed", parsedResponse.error);
			return undefined;
		}

		return parsedResponse.data;
	} catch (e) {
		const error = (e as { error: { message: string } }).error.message;

		console.error("Fatch image from Cloudinary service failed", error);
	}

	return undefined;
}
