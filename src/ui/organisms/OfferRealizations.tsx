import { ImageRealizations } from "@ui/ImageRealizations";

import { getListImages } from "@/actions/cloudinaryActions";

export const OfferRealizations = async ({ realizationTab }: { realizationTab: string | undefined }) => {
	if (!realizationTab || realizationTab.length === 0) {
		return null;
	}

	const realizations = await getListImages(realizationTab);

	return (
		<>
			{realizations && realizations.length > 0 ? (
				<ul role="list" className="mt-8 grid grid-cols-2 gap-2 lg:grid-cols-3">
					{realizations.map((data, index) => (
						<li key={index} className="relative">
							<ImageRealizations {...data} />
						</li>
					))}
				</ul>
			) : (
				<div className="mt-8 flex h-[584px] items-center justify-center rounded-lg bg-primary-foreground text-xl font-light text-tertiary">
					No images
				</div>
			)}
		</>
	);
};
