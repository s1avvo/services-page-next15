import Image from "next/image";
import { CldImage } from "@/ui/atoms/CldImage";

import { getImage } from "@/actions/cloudinaryActions";

export const HeroImage = async ({ imageId }: { imageId: string }) => {
	const image = await getImage(imageId);

	return (
		<>
			{/* Hero Image */}
			{image ? (
				<CldImage
					src={image.public_id}
					alt={
						image.context?.custom?.alt ??
						"Montaż, serwis, sprzedaż urządzeń chłodniczych, wentylacyjnych i klimatyzacyjnych"
					}
					height={1120}
					width={1190}
					sizes="(min-width: 1440px) 595px, (min-width: 1040px) calc(40.26vw + 23px), (min-width: 640px) 595px, 100vw"
					className="relative z-20 aspect-auto h-[520px] w-full max-w-full rounded-t-lg object-cover shadow-lg sm:h-[560px] sm:rounded-lg"
					priority
				/>
			) : (
				<div className="relative z-20 flex h-[520px] w-full rounded-lg bg-tertiary-foreground sm:h-[560px]" />
			)}

			{/* Decorative Dots */}
			<Image
				src={"/assets/hero-dots.svg"}
				alt="Dots pattern"
				width={275}
				height={275}
				className="absolute -bottom-12 -right-12 md:-bottom-20 md:-right-32"
			/>
			<Image
				src={"/assets/hero-dots2.svg"}
				alt="Dots pattern"
				width={125}
				height={125}
				className="absolute -left-16 -top-6"
			/>
		</>
	);
};
