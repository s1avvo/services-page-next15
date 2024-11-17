import { Carousel, CarouselContent } from "@/ui/shadcn/carousel";

export const HomeOfferCarousel = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="relative mx-auto ml-0 mt-8 h-full w-full max-w-md flex-shrink-0 sm:mt-0 md:mx-0 md:w-6/12 md:max-w-none lg:ml-8">
			<Carousel
				opts={{ align: "center", slidesToScroll: 1, loop: false }}
				orientation="horizontal"
				className="mx-auto"
			>
				<CarouselContent>{children}</CarouselContent>
			</Carousel>
		</div>
	);
};
