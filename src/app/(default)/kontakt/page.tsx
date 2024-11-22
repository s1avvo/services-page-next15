import { Suspense } from "react";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { HeaderCarousel } from "@ui/HeaderCarousel";
import { HeaderCarouselItem } from "@ui/HeaderCarouselItem";
import { Article } from "@ui/Article";
import { Image600 } from "@ui/Image600";
import { Features } from "@ui/Features";
import { FeaturesCard } from "@ui/FeaturesCard";
import { ContactForm } from "@ui/ContactForm";
import { Skeleton } from "@/ui/shadcn/skeleton";

import { contactWebsiteJsonLd, JsonLd } from "@/ui/JsonLd";

export const experimental_ppr = true;

export const generateMetadata = async (): Promise<Metadata> => {
	const t = await getTranslations("/kontakt.metadata");
	const canonical = new URL(`${process.env.NEXT_PUBLIC_URL}/kontakt`);

	return {
		title: t("title"),
		description: t("description"),
		alternates: { canonical },
	} satisfies Metadata;
};

export default async function ContactPage() {
	const t = await getTranslations("/kontakt");

	return (
		<>
			<JsonLd jsonLd={contactWebsiteJsonLd()} />

			{/* Banner */}
			<section className="relative flex min-h-[400px] items-center justify-center bg-primary">
				<div className="absolute -bottom-6 h-6 w-full max-w-screen-2xl rounded-b-lg bg-secondary" />

				<div className="mt-16 flex w-full max-w-screen-2xl flex-col items-center justify-between px-8 sm:mt-24 sm:flex-row sm:px-6 lg:px-8">
					<h1 className="mb-28 mt-20 max-w-sm text-balance text-3xl text-primary-foreground drop-shadow-md sm:mb-0 sm:mt-0 sm:text-4xl">
						{t("header.title")}
					</h1>
					<HeaderCarousel>
						{(["0", "1"] as const).map((key) => (
							<HeaderCarouselItem
								key={key}
								slug={t(`header.section.${key}.slug`)}
								title={t(`header.section.${key}.title`)}
								description={t(`header.section.${key}.description`)}
							/>
						))}
					</HeaderCarousel>
				</div>
			</section>

			<div className="mx-auto mt-4 max-w-screen-xl space-y-16 px-0 sm:mt-24 sm:space-y-24 sm:px-6 lg:px-8">
				{/* About Us */}
				<section className="flex flex-col items-center justify-center md:flex-row">
					<Image600 imageId={t("aboutUs.imageId")} />

					<Article
						slug={t("aboutUs.slug")}
						subtitle={t("aboutUs.subtitle")}
						title={t.rich("aboutUs.title", {
							span: (chunks) => <span className="text-secondary">{chunks}</span>,
						})}
						description={t("aboutUs.description")}
					/>
				</section>

				{/* Features */}
				<Features
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

				{/* Contact form */}
				<section className="flex flex-col items-center justify-center md:flex-row">
					<Article
						slug={t("contact.slug")}
						subtitle={t("contact.subtitle")}
						title={t.rich("contact.title", {
							span: (chunks) => <span className="text-secondary">{chunks}</span>,
						})}
						description={t("contact.description")}
					/>

					<ContactForm />
				</section>
			</div>

			{/* Google Map with Customer Pin */}
			<section className="mt-12 w-full overflow-hidden">
				<Suspense fallback={<Skeleton className="h-[420px] w-full" />}>
					<GoogleMapsEmbed
						apiKey={`${process.env.GOOGLE_API_KEY}`}
						height={420}
						width="100%"
						mode="place"
						q="PF+KLIMA+Chłodnictwo,+Klimatyzacja,+Wentylacja"
					/>
				</Suspense>
			</section>
		</>
	);
}
