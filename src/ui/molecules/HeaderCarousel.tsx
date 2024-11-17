import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/ui/shadcn/carousel";

export const HeaderCarousel = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="px-8">
			<Carousel className="relative max-w-sm sm:max-w-md lg:max-w-lg">
				<QuoteIcon className="absolute -top-12 left-12 h-14 w-14 text-secondary sm:-left-8" />
				<CarouselContent className="mx-auto">{children}</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
};

export function QuoteIcon(props: React.SVGAttributes<SVGSVGElement>) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
			<path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
		</svg>
	);
}
