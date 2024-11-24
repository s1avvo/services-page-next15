import { Suspense } from "react";
import { Image600 } from "@ui/Image600";
import { Skeleton } from "@/ui/shadcn/skeleton";

type OfferOurOfferProps = {
	title: string;
	slug: string;
	description: string;
	footer: string;
	imageId: string;
	reverse?: boolean;
};

export const OfferOurOffer = ({
	title,
	slug,
	description,
	footer,
	imageId,
	reverse = false,
}: OfferOurOfferProps) => {
	return (
		<article className={`items-center justify-center md:flex ${reverse ? "flex-row-reverse" : "flex-row"}`}>
			<Suspense
				fallback={
					<Skeleton className="h-[600px] w-full rounded-t-md sm:mx-8 md:mx-4 md:w-1/2 lg:mx-8 lg:w-1/3" />
				}
			>
				<Image600 imageId={imageId} />
			</Suspense>

			<section className="mx-8 mt-8 md:mt-0 md:max-w-md" id={slug}>
				<div className="space-y-4 sm:space-y-8">
					<h2 className="text-2xl text-primary md:text-3xl">{title}</h2>
					<p className="mt-8 text-pretty text-base text-muted-foreground">{description}</p>
					<p className="text-lg uppercase text-secondary">{footer.toUpperCase()}</p>
				</div>
			</section>
		</article>
	);
};
