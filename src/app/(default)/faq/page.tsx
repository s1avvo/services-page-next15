import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { HeaderCarousel } from "@ui/HeaderCarousel";
import { HeaderCarouselItem } from "@ui/HeaderCarouselItem";
import { FaqAccordionItem } from "@ui/FaqAccordionItem";
import { Accordion } from "@/ui/shadcn/accordion";

export const generateMetadata = async (): Promise<Metadata> => {
	const t = await getTranslations("/faq.metadata");
	const canonical = new URL(`${process.env.NEXT_PUBLIC_URL}/faq`);

	return {
		title: t("title"),
		description: t("description"),
		alternates: { canonical },
	} satisfies Metadata;
};

export default async function FaqPage() {
	const t = await getTranslations("/faq");
	const accordionItemsKey = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;

	return (
		<>
			<section className="relative flex min-h-[400px] items-center justify-center bg-primary">
				<div className="absolute -bottom-6 h-6 w-full max-w-screen-2xl rounded-b-lg bg-secondary" />

				<div className="mt-16 flex w-full max-w-screen-2xl flex-col items-center justify-between px-8 sm:mt-24 sm:flex-row sm:px-6 lg:px-8">
					<h1 className="mb-28 mt-20 max-w-sm text-balance text-3xl text-primary-foreground drop-shadow-md sm:mb-0 sm:mt-0 sm:text-4xl">
						{t("header.title")}
					</h1>
					<HeaderCarousel>
						{(["0", "1", "2", "3"] as const).map((key) => (
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

			<div className="mx-auto mb-16 mt-16 max-w-3xl space-y-16 px-4 sm:mt-24 sm:space-y-20 md:px-4 lg:px-0">
				<Accordion type="single" collapsible className="text-tertiary" id={t("klimatyzacja.slug")}>
					<h3 className="mb-4 text-2xl text-primary">{t("klimatyzacja.title")}</h3>

					{accordionItemsKey.map((key) => (
						<FaqAccordionItem
							key={key}
							slug={`${t("klimatyzacja.slug")}-${key}`}
							title={t(`klimatyzacja.items.${key}.title`)}
							description={t(`klimatyzacja.items.${key}.description`)}
						/>
					))}
				</Accordion>

				<Accordion type="single" collapsible className="text-tertiary" id={t("pompy-ciepla.slug")}>
					<h3 className="mb-4 text-2xl text-primary">{t("pompy-ciepla.title")}</h3>

					{accordionItemsKey.map((key) => (
						<FaqAccordionItem
							key={key}
							slug={`${t("pompy-ciepla.slug")}-${key}`}
							title={t(`pompy-ciepla.items.${key}.title`)}
							description={t(`pompy-ciepla.items.${key}.description`)}
						/>
					))}
				</Accordion>

				<Accordion type="single" collapsible className="text-tertiary" id={t("wentylacja.slug")}>
					<h3 className="mb-4 text-2xl text-primary">{t("wentylacja.title")}</h3>

					{accordionItemsKey.map((key) => (
						<FaqAccordionItem
							key={key}
							slug={`${t("wentylacja.slug")}-${key}`}
							title={t(`wentylacja.items.${key}.title`)}
							description={t(`wentylacja.items.${key}.description`)}
						/>
					))}
				</Accordion>

				<Accordion type="single" collapsible className="text-tertiary" id={t("chlodnictwo.slug")}>
					<h3 className="mb-4 text-2xl text-primary">{t("chlodnictwo.title")}</h3>

					{accordionItemsKey.map((key) => (
						<FaqAccordionItem
							key={key}
							slug={`${t("chlodnictwo.slug")}-${key}`}
							title={t(`chlodnictwo.items.${key}.title`)}
							description={t(`chlodnictwo.items.${key}.description`)}
						/>
					))}
				</Accordion>
			</div>
		</>
	);
}
