"use server";
import { GoogleResponseSchema } from "@/lib/schema";

export async function getGoogleReviews() {
	const apiKey = process.env.GOOGLE_API_KEY;
	const placeId = process.env.GOOGLE_PLACE_ID;

	//&reviews_sort=newest
	const url = `https://maps.googleapis.com/maps/api/place/details/json?key=${apiKey}&place_id=${placeId}&fields=reviews,rating,user_ratings_total&language=pl`;

	try {
		const response = await fetch(url, { next: { revalidate: 0 } });
		const { result } = await response.json();

		const parsedResponse = GoogleResponseSchema.safeParse({ result });

		if (!parsedResponse.success) {
			console.error("Reviews validation from Google service failed", parsedResponse.error);
			return undefined;
		}

		return parsedResponse.data.result;
	} catch (e) {
		console.error("Fatch reviews from Google service failed");
	}

	return undefined;
}
