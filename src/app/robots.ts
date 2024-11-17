import { type MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			disallow: "/",
			// allow: "/",
			// disallow: ["/_next/", "/public/", "/_error"],
		},
		sitemap: `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`,
	};
}
