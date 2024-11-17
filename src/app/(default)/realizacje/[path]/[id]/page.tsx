import { notFound } from "next/navigation";
import { CldImage } from "@ui/CldImage";

import { getImage } from "@/actions/cloudinaryActions";

export default async function PhotoPage({ params }: { params: Promise<{ path: string; id: string }> }) {
	const { id, path } = await params;
	const image = await getImage(`realizacje/${path}/${id}`);

	if (!image) {
		notFound();
	}

	return (
		<CldImage
			src={image.public_id}
			width={900}
			height={600}
			alt={image.context?.custom?.alt ?? ""}
			sizes="(min-width: 960px) 900px, calc(93.75vw + 19px)"
			className="aspect-auto rounded-lg object-cover object-center"
		/>
	);
}
