import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getCldImageUrl } from "next-cloudinary";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const blurImageUrl = async (publicId: string): Promise<string> => {
	const imageUrl = getCldImageUrl({
		src: publicId,
		width: 100,
	});

	const response = await fetch(imageUrl);
	const arrayBuffer = await response.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer);
	const base64 = buffer.toString("base64");

	return `data:${response.type};base64,${base64}`;
};
