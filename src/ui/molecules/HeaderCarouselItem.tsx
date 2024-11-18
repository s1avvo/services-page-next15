import Link from "next/link";
import { CarouselItem } from "@/ui/shadcn/carousel";
import { Card, CardContent, CardFooter } from "@/ui/shadcn/card";
import { Button } from "@/ui/shadcn/button";

type HeaderCarouselItemProps = {
	slug: string;
	title: string;
	description: string;
};

export const HeaderCarouselItem = ({ slug, title, description }: HeaderCarouselItemProps) => {
	return (
		<CarouselItem className="px-4">
			<Card className="bg-primary/0 shadow-none">
				<CardContent>
					<hr className="mb-4 ml-auto h-1 max-w-20 bg-muted" />
					<p className="text-end text-cardblue-foreground">{description}</p>
				</CardContent>
				<CardFooter>
					<Button variant={"outline"} size={"lg"} className="ml-auto" asChild>
						<Link href={`#${slug}`}>{title}</Link>
					</Button>
				</CardFooter>
			</Card>
		</CarouselItem>
	);
};
