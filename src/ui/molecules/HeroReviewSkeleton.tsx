import { Card, CardHeader, CardContent } from "@/ui/shadcn/card";
import { Skeleton } from "@/ui/shadcn/skeleton";

export const HeroReviewSkeleton = () => {
	return (
		<Card className="w-full rounded-b-lg rounded-t-none bg-tertiary/80 ps-1 md:rounded-none">
			<div className="absolute -left-2 top-0 h-14 w-14 -translate-x-1/2 -translate-y-0 transform text-secondary">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
					<path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
				</svg>
			</div>
			<CardHeader>
				<Skeleton className="mb-2 h-7 sm:h-10" />
				<Skeleton className="h-5 w-32" />
			</CardHeader>
			<CardContent className="text-sm text-cardblue-foreground sm:text-base">
				<Skeleton className="mt-2 h-5 w-[98%]" />
				<Skeleton className="mt-2 h-5 w-[95%]" />
				<Skeleton className="mt-2 h-5 w-[70%]" />
			</CardContent>
		</Card>
	);
};
