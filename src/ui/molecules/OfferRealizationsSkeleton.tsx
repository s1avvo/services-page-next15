import { Skeleton } from "@/ui/shadcn/skeleton";

export const OfferRealizationsSkeleton = () => {
	return (
		<ul className="mt-8 grid grid-cols-2 gap-2 lg:grid-cols-3">
			{Array.from({ length: 6 }, (_, index) => (
				<Skeleton key={index} className="aspect-auto h-72 w-full" />
			))}
		</ul>
	);
};
