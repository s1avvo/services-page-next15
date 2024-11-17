import { HomeReviewsInfo } from "@ui/HomeReviewsInfo";
import { HomeReviewCarouselItem } from "@ui/HomeReviewCarouselItem";
import { Carousel, CarouselContent } from "@/ui/shadcn/carousel";
import { Button } from "@/ui/shadcn/button";

import { getGoogleReviews } from "@/actions/googleActions";

export const HomeReviews = async (props: { title: React.ReactNode; action: string }) => {
	const googleReview = await getGoogleReviews();

	if (!googleReview || googleReview.reviews.length === 0) return null;

	return (
		<section className="mx-auto mt-16 max-w-screen-xl sm:mt-20" id="opinie">
			{/* Top Side: Header */}
			<div className="px-4 md:px-8">
				<h3 className="text-center text-2xl text-primary">{props.title}</h3>
				<div className="mt-4 flex flex-col items-center gap-8">
					<HomeReviewsInfo rating={googleReview.rating} rating_total={googleReview.user_ratings_total} />
					<Button variant={"default"} size={"lg"}>
						{props.action}
					</Button>
				</div>
				<hr className="mx-auto mt-8 max-w-xs" />
			</div>

			{/* Bottom Side: Google Reviews */}
			<Carousel
				opts={{ align: "start", slidesToScroll: 1, loop: false }}
				orientation="horizontal"
				className="mb-8 w-full px-0 md:px-8"
			>
				<CarouselContent>
					{googleReview.reviews.map((data, index) => (
						<HomeReviewCarouselItem key={index} {...data} />
					))}
				</CarouselContent>
			</Carousel>
		</section>
	);
};
