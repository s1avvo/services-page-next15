import { StarFilledIcon } from "@radix-ui/react-icons";

export const RatingStars = ({ rating }: { rating: number }) => {
	return (
		<div className="flex h-9 items-center gap-1">
			{Array.from({ length: rating ?? 0 }).map((_, i) => (
				<StarFilledIcon key={i} className="inline-block text-[#ffd200]" />
			))}
		</div>
	);
};
