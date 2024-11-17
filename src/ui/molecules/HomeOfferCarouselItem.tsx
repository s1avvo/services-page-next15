import { CldImage } from "@ui/CldImage";
import { PrefetchLink } from "@ui/PrefetchLink";
import { CarouselItem } from "@/ui/shadcn/carousel";

import { getImage } from "@/actions/cloudinaryActions";

type HomeOfferCarouselIteProps = {
	imageId: string;
	link: string;
	title: string;
};

export const HomeOfferCarouselItem = async ({ imageId, link, title }: HomeOfferCarouselIteProps) => {
	const image = await getImage(imageId);

	return (
		<CarouselItem className="ml-auto max-w-md basis-4/5 xl:mr-auto xl:basis-1/2">
			<PrefetchLink href={link}>
				<div className="group relative h-[515px] w-full sm:h-[650px]">
					{image ? (
						<CldImage
							src={image.public_id}
							alt={image.context?.custom?.alt ?? title}
							fill
							sizes="(min-width: 1580px) 352px, (min-width: 1280px) calc(14.29vw + 129px), (min-width: 1160px) 432px, (min-width: 780px) calc(34.17vw + 43px), (min-width: 480px) 355px, calc(73.75vw + 16px)"
							className={`mx-auto aspect-auto rounded-md object-cover sm:mx-0`}
						/>
					) : (
						<div className="h-[515px] w-full rounded-t-md bg-tertiary-foreground sm:h-[650px]" />
					)}
					<div className="absolute inset-0 h-14 w-full self-end rounded-b-md bg-primary">
						<h4 className="mt-1 text-balance text-center text-2xl text-primary-foreground">{title}</h4>
					</div>

					<div className="absolute inset-0 -translate-x-full transform bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-transform duration-1000 ease-in-out group-hover:translate-x-full group-hover:opacity-100" />
				</div>
			</PrefetchLink>
		</CarouselItem>
	);
};
