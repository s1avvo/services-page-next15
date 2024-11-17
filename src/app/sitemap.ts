import { type MetadataRoute } from "next";

const offers = [
	{ name: "Oferta dla domu", slug: "oferta-dla-domu" },
	{ name: "Oferta dla firm", slug: "oferta-dla-firm" },
];

type Item = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
	const offerUrls = offers.map(
		(offer) =>
			({
				url: `${process.env.NEXT_PUBLIC_URL}/oferta/${offer.slug}`,
				lastModified: new Date(),
				changeFrequency: "monthly",
				priority: 0.8,
			}) satisfies Item,
	);

	return [
		{
			url: `${process.env.NEXT_PUBLIC_URL}`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		...offerUrls,
		{
			url: `${process.env.NEXT_PUBLIC_URL}/kontakt`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${process.env.NEXT_PUBLIC_URL}/faq`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.5,
		},
	];
}
