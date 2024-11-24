import { CldImage } from "@ui/CldImage";

import { getImage } from "@/actions/cloudinaryActions";

export const Image600 = async ({ imageId }: { imageId: string }) => {
	const image = await getImage(imageId);

	return (
		<>
			{image ? (
				<div className="relative h-[600px] w-full flex-shrink-0 sm:mx-8 md:mx-4 md:w-1/2 lg:mx-8 lg:w-1/3">
					<CldImage
						src={image.public_id}
						alt={image.context?.custom?.alt || "KLIMA - Kontakt"}
						fill
						sizes="(min-width: 1380px) 405px, (min-width: 1040px) calc(25vw + 65px), (min-width: 780px) calc(50vw - 24px), (min-width: 640px) calc(100vw - 48px), 100vw"
						className={`mx-auto aspect-auto object-cover sm:mx-0 sm:rounded-md`}
						priority
					/>
				</div>
			) : (
				<div className="h-[600px] w-full flex-shrink-0 rounded-t-md bg-tertiary-foreground sm:mx-8 md:mx-4 md:w-1/2 lg:mx-8 lg:w-1/3" />
			)}
		</>
	);
};
