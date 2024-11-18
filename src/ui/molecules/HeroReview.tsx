import Link from "next/link";
import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/ui/shadcn/card";

import { getGoogleReviews } from "@/actions/googleActions";

export const HeroReview = async () => {
	const googleReviews = await getGoogleReviews();

	if (!googleReviews || googleReviews.reviews.length === 0) {
		return;
	}

	const randomReview = googleReviews.reviews[Math.floor(Math.random() * googleReviews.reviews.length)];

	return (
		<Link href={"#opinie"}>
			<Card className="cursor-pointer rounded-b-lg rounded-t-none bg-cardblue ps-1 text-cardblue-foreground md:rounded-none">
				<div className="absolute -left-2 top-0 h-14 w-14 -translate-x-1/2 -translate-y-0 transform text-secondary">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						<path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
					</svg>
				</div>
				<CardHeader>
					<CardTitle className="line-clamp-1 text-xl text-cardblue-foreground sm:text-2xl">
						{randomReview?.author_name}
					</CardTitle>
					<CardDescription className="text-cardblue-foreground">
						{`${randomReview?.rating}/5`} | {randomReview?.relative_time_description}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="line-clamp-3 text-base text-cardblue-foreground">{randomReview?.text}</p>
				</CardContent>
			</Card>
		</Link>
	);
};
