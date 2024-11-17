import { v2 as cloudinary } from "cloudinary";
import { type NextRequest } from "next/server";

cloudinary.config({
	cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(req: NextRequest) {
	const url = new URL(req.url);
	const searchParams = new URLSearchParams(url.search);

	const { resources } = await cloudinary.api.resources_by_tag(`${searchParams.get("tag")}`);

	return new Response(JSON.stringify(resources), { status: 200 });
}
