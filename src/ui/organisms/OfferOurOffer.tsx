import { Image600 } from "@ui/Image600";

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
		<div className={`items-center justify-center md:flex ${reverse ? "flex-row-reverse" : "flex-row"}`}>
			<Image600 imageId={imageId} />

			<div className="mx-8 mt-8 md:mt-0 md:max-w-md" id={slug}>
				<div className="space-y-4 sm:space-y-8">
					<h2 className="text-2xl text-primary md:text-3xl">{title}</h2>
					<p className="mt-8 text-pretty text-base text-paragraf">{description}</p>
					<h4 className="text-lg uppercase text-secondary">{footer.toUpperCase()}</h4>
				</div>
			</div>
		</div>
	);
};
