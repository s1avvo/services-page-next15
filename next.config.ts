import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next/types";

const withMDX = createMDX();
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	reactStrictMode: true,

	pageExtensions: ["ts", "tsx", "mdx"],

	experimental: {
		mdxRs: true,
		scrollRestoration: true,
		ppr: "incremental",
		after: true,
		reactCompiler: true,
	},

	images: {
		remotePatterns: [{ hostname: "res.cloudinary.com" }],
		formats: ["image/webp"],
	},

	webpack: (config) => {
		return {
			...config,
			resolve: {
				...config.resolve,
				extensionAlias: {
					".js": [".js", ".ts"],
					".jsx": [".jsx", ".tsx"],
				},
			},
		};
	},

	async redirects() {
		return [
			{
				source: "/oferta",
				destination: "/oferta/oferta-dla-domu",
				permanent: true,
			},
		];
	},
};

export default withNextIntl(withMDX(nextConfig));
