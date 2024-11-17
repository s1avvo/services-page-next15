import { Card, CardContent, CardFooter, CardHeader } from "@/ui/shadcn/card";
import { Skeleton } from "@/ui/shadcn/skeleton";

export const HomeReviewCardSkeleton = () => {
	return (
		<section className="mx-auto mt-16 max-w-screen-xl sm:mt-20">
			<div className="mx-auto max-w-md px-4 md:px-8">
				<Skeleton className="mx-auto mb-6 h-10" />
				<Skeleton className="mx-auto mb-8 h-7 w-[85%]" />
				<Skeleton className="mx-auto h-11 w-40 rounded-md px-8" />
			</div>

			<hr className="mx-auto mt-8 max-w-xs" />

			<div className="-ml-4 flex md:px-8">
				{Array.from({ length: 3 }, (_, index) => (
					<div key={index} className="in-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3">
						<div className="mx-auto max-w-sm md:max-w-md">
							<div className="mb-4 mt-6 flex w-full cursor-pointer items-center justify-center">
								<Card className="w-full bg-tertiary/80">
									<CardHeader>
										<Skeleton className="mb-2 h-7 sm:h-10" />
										<Skeleton className="h-5 w-32" />
									</CardHeader>
									<CardContent>
										<Skeleton className="mt-2 h-5 w-[98%]" />
										<Skeleton className="mt-2 h-5 w-[95%]" />
										<Skeleton className="mt-2 h-5 w-[70%]" />
									</CardContent>

									<CardFooter>
										<Skeleton className="h-9 w-36" />
									</CardFooter>
								</Card>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
