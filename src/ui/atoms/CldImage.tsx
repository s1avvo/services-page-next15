"use client";

import { CldImage as CldImageDefault, type CldImageProps } from "next-cloudinary";
import { type ImageProps } from "next/image";

export const CldImage = (props: CldImageProps) => {
	const dataUrl = `data:image/svg+xml;base64,${toBase64(shimmer(600, 400))}`;

	return <CldImageDefault {...props} placeholder={dataUrl as ImageProps["placeholder"]} />;
};

export function toBase64(str: string) {
	return typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);
}

export function shimmer(w: number, h: number) {
	return `
	<svg  width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<defs>
		<linearGradient id="g">
			<stop stop-color="#333" offset="20%" />
			<stop stop-color="#222" offset="50%" />
			<stop stop-color="#333" offset="70%" />
		</linearGradient>
		</defs>
		<rect width="${w}" height="${h}" fill="#333" />
		<rect id="r" width="${w}" height="${h}" fill="url(#g)" />
		<animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
	</svg>`;
}
