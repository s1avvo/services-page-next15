import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { HeroImage } from "@ui/HeroImage";
import { HeroReview } from "@ui/HeroReview";
import { HeroReviewSkeleton } from "@ui/HeroReviewSkeleton";
import { Article } from "@ui/Article";
import { HomeOfferCarousel } from "@ui/HomeOfferCarousel";
import { HomeOfferCarouselItem } from "@ui/HomeOfferCarouselItem";
import { Features } from "@ui/Features";
import { HomeFeaturesCard } from "@ui/HomeFeaturesCard";
import { HomeReviews } from "@ui/HomeReviews";
import { HomeReviewCardSkeleton } from "@ui/HomeReviewCardSkeleton";
import { HomeCooperation } from "@ui/HomeCooperation";
import { Button } from "@/ui/shadcn/button";

import { homeWebsiteJsonLd, JsonLd } from "@/ui/JsonLd";
import { HeroImageSkeleton } from "@/ui/molecules/HeroImageSkeleton";

export const experimental_ppr = true;

export const metadata: Metadata = {
	alternates: { canonical: `${process.env.NEXT_PUBLIC_URL}` },
} satisfies Metadata;

export default async function Home() {
	const t = await getTranslations("/");

	return (
		<>
			<JsonLd jsonLd={homeWebsiteJsonLd()} />

			{/* Hero Page Section */}
			<section className="mx-auto mt-24 flex max-w-screen-2xl flex-col items-center justify-between py-6 lg:flex-row lg:py-8">
				{/* Left Side: Text Content */}
				<div className="ml-0 max-w-lg basis-1/2 px-4 md:max-w-2xl md:px-0 lg:ml-8 lg:mr-0 lg:max-w-3xl xl:mr-auto">
					<h1 className="text-center text-3xl text-primary sm:text-4xl md:text-5xl lg:text-left">
						{t.rich("hero.title", {
							span: (chunks) => (
								<span className="text-tertiary">
									<br />
									{chunks}
								</span>
							),
						})}
					</h1>
					<p className="mx-auto mt-8 max-w-md px-4 text-center text-base text-tertiary sm:px-0 lg:mx-0 lg:text-left">
						{t("hero.description")}
					</p>
					<div className="flex justify-center lg:justify-start">
						<Button variant={"default"} size={"lg"} className="mt-8 text-xl" asChild>
							<Link href={"#oferta"}>
								{t("hero.action")}
								<ChevronDownIcon width={28} height={28} className="ml-2" />
							</Link>
						</Button>
					</div>
				</div>

				{/* Right Side: Image, Decorative Elements and Customer Review */}
				<div className="relative mt-16 flex-1 md:w-2/3 lg:ml-20 lg:mr-0 lg:mt-0">
					<Suspense fallback={<HeroImageSkeleton />}>
						<HeroImage imageId={t("hero.imageId")} />
					</Suspense>

					{/* Dynamic Component - Random customer review */}
					<div className="relative inset-x-0 bottom-0 z-20 w-full sm:absolute sm:max-w-md md:-mr-16 md:-translate-x-24 xl:mr-0 xl:-translate-x-32">
						<Suspense fallback={<HeroReviewSkeleton />}>
							<HeroReview />
						</Suspense>
					</div>
				</div>
			</section>

			{/* Offer Page Section */}

			<section className="mx-auto mt-16 flex max-w-screen-2xl flex-col items-center justify-center sm:mt-24 md:flex-row">
				<HomeOfferCarousel>
					{(["forBusiness", "forHome"] as const).map((key) => (
						<HomeOfferCarouselItem
							key={key}
							link={t(`offer.items.${key}.link`)}
							title={t(`offer.items.${key}.title`)}
							imageId={t(`offer.items.${key}.imageId`)}
						/>
					))}
				</HomeOfferCarousel>

				<Article
					className="order-first sm:order-none md:w-1/2 lg:mx-16"
					slug="oferta"
					subtitle={t("offer.subtitle")}
					title={t.rich("offer.title", {
						span: (chunks) => <span className="text-secondary">{chunks}</span>,
					})}
					description={t("offer.description")}
				/>
			</section>

			{/* Features Page Section */}
			<Features
				subtitle={t("features.subtitle")}
				title={t.rich("features.title", {
					span: (chunks) => <span className="text-secondary">{chunks}</span>,
				})}
				description={t("features.description")}
			>
				{(["0", "1", "2", "3", "4", "5"] as const).map((key) => (
					<HomeFeaturesCard
						key={key}
						title={t(`features.items.${key}.title`)}
						description={t(`features.items.${key}.description`)}
						icon={t(`features.items.${key}.icon`)}
						alt={t(`features.items.${key}.title`)}
					/>
				))}
			</Features>

			{/* Dynamic Component - Customers review Page Section */}
			<Suspense fallback={<HomeReviewCardSkeleton />}>
				<HomeReviews
					title={t.rich("reviews.title", {
						span: (chunks) => <span className="text-secondary">{chunks}</span>,
					})}
					action={t("reviews.action")}
				/>
			</Suspense>

			{/* Cooperating with Us companies Page Section */}
			<HomeCooperation
				title={t.rich("cooperation.title", {
					span: (chunks) => (
						<span className="text-secondary">
							{chunks}
							<br />
						</span>
					),
				})}
			/>
		</>
	);
}
