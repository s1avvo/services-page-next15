import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HeaderCarousel } from "@ui/HeaderCarousel";
import { HeaderCarouselItem } from "@ui/HeaderCarouselItem";
import { OfferOurOffer } from "@ui/OfferOurOffer";
import { Features } from "@ui/Features";
import { FeaturesCard } from "@ui/FeaturesCard";
import { OfferRealizations } from "@ui/OfferRealizations";
import { OfferRealizationsTabs } from "@ui/OfferRealizationsTabs";
import { OfferRealizationsSkeleton } from "@ui/OfferRealizationsSkeleton";

import { JsonLd, offerWebsiteJsonLd } from "@/ui/JsonLd";

export const experimental_ppr = true;

const SLUG = ["oferta-dla-domu", "oferta-dla-firm"] as const;
type SlugType = (typeof SLUG)[number];

export const generateMetadata = async (props: { params: Promise<{ slug: SlugType }> }): Promise<Metadata> => {
	const { slug } = await props.params;

	if (!SLUG.includes(slug)) {
		notFound();
	}

	const t = await getTranslations("/oferta.metadata");
	const canonical = new URL(`${process.env.NEXT_PUBLIC_URL}/${slug}`);

	return {
		title: t("title"),
		description: t("description"),
		alternates: {
			canonical,
		},
	};
};

export default async function OfferPage({
	params,
	searchParams,
}: {
	params: Promise<{ slug: SlugType }>;
	searchParams: Promise<{ realizacje?: string }>;
}) {
	const { slug } = await params;
	const { realizacje } = await searchParams;

	if (!SLUG.includes(slug)) {
		notFound();
	}

	const t = await getTranslations("/oferta");

	const tabs = (["0", "1", "2"] as const).map((key) => {
		return {
			slug: t(`${slug}.tabs.${key}.slug`),
			title: t(`${slug}.tabs.${key}.title`),
		};
	});

	const realizationTab = tabs.find(({ slug }) => slug === realizacje)?.slug || tabs[0]?.slug;

	return (
		<>
			<JsonLd jsonLd={offerWebsiteJsonLd({ slug: t(`${slug}.slug`), title: t(`${slug}.title`) })} />

			{/* Banner */}
			<section className="relative flex min-h-[400px] items-center justify-center bg-primary">
				<div className="absolute -bottom-6 h-6 w-full max-w-screen-2xl rounded-b-lg bg-secondary" />

				<div className="mt-16 flex w-full max-w-screen-2xl flex-col items-center justify-between px-8 sm:mt-24 sm:flex-row sm:px-6 lg:px-8">
					<h1 className="mb-28 mt-20 max-w-sm text-balance text-3xl text-primary-foreground drop-shadow-md sm:mb-0 sm:mt-0 sm:text-4xl">
						{t(`${slug}.header.title`)}
					</h1>
					<HeaderCarousel>
						{(["0", "1", "2"] as const).map((key) => (
							<HeaderCarouselItem
								key={key}
								slug={t(`${slug}.header.section.${key}.slug`)}
								title={t(`${slug}.header.section.${key}.title`)}
								description={t(`${slug}.header.section.${key}.description`)}
							/>
						))}
					</HeaderCarousel>
				</div>
			</section>

			{/* Our offer */}
			<section className="mx-auto mt-4 max-w-screen-xl space-y-16 px-0 sm:mt-24 sm:space-y-24 sm:px-6 lg:px-8">
				{(["0", "1", "2"] as const).map((key, index) => (
					<OfferOurOffer
						key={t(`${slug}.offers.${key}.slug`)}
						imageId={t(`${slug}.offers.${key}.imageId`)}
						slug={t(`${slug}.offers.${key}.slug`)}
						title={t(`${slug}.offers.${key}.title`)}
						description={t(`${slug}.offers.${key}.description`)}
						footer={t(`${slug}.offers.${key}.footer`)}
						reverse={index % 2 !== 0}
					/>
				))}
			</section>

			{/* Features */}
			<Features
				subtitle={t("features.subtitle")}
				title={t.rich("features.title", {
					span: (chunks) => <span className="text-secondary">{chunks}</span>,
				})}
				description={t("features.description")}
			>
				{(["0", "1", "2"] as const).map((key) => (
					<div key={key} className="px-4 py-2 sm:py-4 md:w-1/2 lg:w-1/3">
						<FeaturesCard
							icon={t(`features.items.${key}.icon`)}
							alt={t(`features.items.${key}.title`)}
							title={t(`features.items.${key}.title`)}
							description={t(`features.items.${key}.description`)}
						/>
					</div>
				))}
			</Features>

			{/* Realizations Images */}
			<section className="mx-auto mb-16 mt-16 max-w-screen-xl px-4 sm:px-6 lg:px-8" id="nasze-realizacje">
				<h3 className="text-center text-2xl text-primary">
					{t.rich("realizations.title", {
						span: (chunks) => <span className="text-secondary">{chunks}</span>,
					})}
				</h3>
				<hr className="mx-auto mt-8 max-w-xs" />

				<OfferRealizationsTabs tabs={tabs} />

				<Suspense key={realizacje} fallback={<OfferRealizationsSkeleton />}>
					<OfferRealizations realizationTab={realizationTab} />
				</Suspense>
			</section>
		</>
	);
}
