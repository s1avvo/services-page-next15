"use client";

import { useState, useRef, useEffect } from "react";
import { ClockIcon } from "@radix-ui/react-icons";
import { Card, CardHeader, CardContent, CardDescription, CardTitle, CardFooter } from "@/ui/shadcn/card";
import { Button } from "@/ui/shadcn/button";
import { RatingStars } from "@/ui/atoms/RatingStars";
import { CarouselItem } from "@/ui/shadcn/carousel";

type HomeReviewCarouselItemProps = {
	author_name: string;
	text: string;
	relative_time_description: string;
	rating: number;
};

export const HomeReviewCarouselItem = ({
	author_name,
	text,
	rating,
	relative_time_description,
}: HomeReviewCarouselItemProps) => {
	const textRef = useRef<HTMLDivElement>(null);
	const [collapsed, setCollapsed] = useState(false);
	const [numberOfLines, setNumberOfLines] = useState(0);

	useEffect(() => {
		if (textRef.current) {
			const containerHeight = textRef.current.clientHeight;
			const lines = Math.floor(containerHeight / 28.8);

			setCollapsed(lines > 3);
			setNumberOfLines(lines);
		}
	}, [text]);

	return (
		<CarouselItem className="mx-auto max-w-sm basis-full md:max-w-md md:basis-1/2 lg:basis-1/3">
			<div className="mb-4 mt-6 flex w-full items-center justify-center">
				<Card className="cursor-pointer">
					<CardHeader>
						<CardTitle className="text-xl">{author_name}</CardTitle>
						<div className="flex items-center gap-2">
							<ClockIcon className="text-secondary" />{" "}
							<CardDescription>{relative_time_description}</CardDescription>
						</div>
					</CardHeader>
					<CardContent ref={textRef}>
						<p className={`${collapsed ? "line-clamp-3" : "line-clamp-none"}`}>{text}</p>
					</CardContent>

					<CardFooter className="flex items-center justify-between">
						<RatingStars rating={rating} />
						{numberOfLines > 3 && (
							<Button variant={"ghost"} size={"sm"} onClick={() => setCollapsed(!collapsed)}>
								{collapsed ? "Czytaj więcej" : "Zamknij"}
							</Button>
						)}
					</CardFooter>
				</Card>
			</div>
		</CarouselItem>
	);
};
