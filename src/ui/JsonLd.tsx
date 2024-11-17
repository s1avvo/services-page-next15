import { type WebPage, type WithContext } from "schema-dts";

export const JsonLd = <T extends WebPage>({ jsonLd }: { jsonLd: WithContext<T> }) => {
	return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

export const homeWebsiteJsonLd = (): WithContext<WebPage> => {
	return {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"@id": "https://www.klima.pl/",
		name: "KLIMA | Montaż klimatyzacji oraz innych systemów chłodniczych i wentylacyjnych.",
		url: "https://www.klima.pl/",
		thumbnailUrl: "https://www.klima.pl/pf_thumbnail.png",
		description:
			"Zapewniamy kompleksowe rozwiązania w dziedzinie systemów chłodniczych, klimatyzacyjnych oraz wentylacyjnych. Oferujemy montaż, serwis oraz sprzedaż urządzeń i systemów chłodniczych.",
		inLanguage: "pl-PL",
		isPartOf: {
			"@type": "WebSite",
			"@id": "https://www.klima.pl/#website",
			url: "https://www.klima.pl/",
			name: "KLIMA | Montaż klimatyzacji oraz innych systemów chłodniczych i wentylacyjnych.",
			description:
				"Jesteśmy firmą specjalizującą się w kompleksowych rozwiązaniach chłodniczych, klimatyzacyjnych oraz wentylacyjnych. Zapewniamy montaż, serwis oraz sprzedaż urządzeń i systemów chłodniczych.",
			inLanguage: "pl-PL",
			publisher: {
				"@type": "Organization",
				"@id": "https://www.klima.pl/#organization",
				name: "KLIMA - chłodnictwo, klimatyzacja, wentylacja.",
				url: "https://www.klima.pl/",
				logo: "https://www.klima.pl/pf_logo.png",
			},
		},
		about: {
			"@type": "Organization",
			"@id": "https://www.klima.pl/#organization",
			name: "KLIMA - chłodnictwo, klimatyzacja, wentylacja.",
			url: "https://www.klima.pl/",
			alternateName: ["KLIMA", "KLIMA"],
			logo: "https://www.klima.pl/pf_logo.png",
			sameAs: ["https://www.facebook.com/klima/"],
			address: {
				"@type": "PostalAddress",
				addressRegion: "Poznań",
				addressLocality: "Rokietnica",
				postalCode: "62-090",
				streetAddress: "ul. Zakątek 7A",
				addressCountry: {
					"@type": "Country",
					name: "PL",
				},
			},
			contactPoint: [
				{
					"@type": "ContactPoint",
					telephone: "785 532 497",
					contactType: "customer service",
					email: "klima@biuro.pl",
					areaServed: "Polska",
					availableLanguage: "Polski",
				},
			],
		},
		contentLocation: {
			"@type": "City",
			name: "Poznań",
		},
		breadcrumb: {
			"@type": "BreadcrumbList",
			"@id": "https://www.klima.pl/#breadcrumbs",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Strona Główna",
					item: "https://www.klima.pl/",
				},
			],
		},
	};
};

export const contactWebsiteJsonLd = (): WithContext<WebPage> => {
	return {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"@id": "https://www.klima.pl/kontakt",
		name: "Kontakt - Masz pytanie? Skontaktuj się z nami!",
		description:
			"Nasz doświadczony zespół przygotuje rozwiązania dostosowane do Twoich indywidualnych potrzeb. Zapraszamy do kontaktu telefonicznie, drogą e-mailową lub przez formularz kontaktowy.",
		url: "https://www.klima.pl/kontakt",
		inLanguage: "pl-PL",
		isPartOf: {
			"@type": "WebSite",
			"@id": "https://www.klima.pl/#website",
			url: "https://www.klima.pl/",
			name: "KLIMA | Montaż klimatyzacji oraz innych systemów chłodniczych i wentylacyjnych.",
			description:
				"Jesteśmy firmą specjalizującą się w kompleksowych rozwiązaniach chłodniczych, klimatyzacyjnych oraz wentylacyjnych. Zapewniamy montaż, serwis oraz sprzedaż urządzeń i systemów chłodniczych.",
			inLanguage: "pl-PL",
			publisher: {
				"@type": "Organization",
				"@id": "https://www.klima.pl/#organization",
				name: "KLIMA - chłodnictwo, klimatyzacja, wentylacja.",
				url: "https://www.klima.pl/",
				logo: "https://www.klima.pl/pf_logo.png",
			},
		},
		breadcrumb: {
			"@type": "BreadcrumbList",
			"@id": "https://www.klima.pl/kontakt/#breadcrumbs",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Strona główna",
					item: {
						"@type": "Thing",
						"@id": "https://www.klima.pl/",
					},
				},
				{
					"@type": "ListItem",
					position: 2,
					name: "Kontakt",
					item: {
						"@type": "Thing",
						"@id": "https://www.klima.pl/kontakt",
					},
				},
			],
		},
	};
};

export const offerWebsiteJsonLd = ({
	title,
	slug,
}: {
	title: string;
	slug: string;
}): WithContext<WebPage> => {
	return {
		"@context": "https://schema.org",
		"@type": "WebPage",
		"@id": `https://www.klima.pl/oferta/${slug}`,
		name: `${title}. Zobacz nasze ralizację oraz ofertę.`,
		url: `https://www.klima.pl/oferta/${slug}`,
		description:
			"Nasza oferta rozwiązań HVACR obejmuje kompleksowe rozwiązania, które są dostosowane do potrzeb zarówno klientów indywidualnych, jak i komercyjnych.",
		inLanguage: "pl-PL",
		isPartOf: {
			"@type": "WebSite",
			"@id": "https://www.klima.pl/#website",
			url: "https://www.klima.pl/",
			name: "KLIMA | Montaż klimatyzacji oraz innych systemów chłodniczych i wentylacyjnych.",
			description:
				"Jesteśmy firmą specjalizującą się w kompleksowych rozwiązaniach chłodniczych, klimatyzacyjnych oraz wentylacyjnych. Zapewniamy montaż, serwis oraz sprzedaż urządzeń i systemów chłodniczych.",
			inLanguage: "pl-PL",
			publisher: {
				"@type": "Organization",
				"@id": "https://www.klima.pl/#organization",
				name: "KLIMA - chłodnictwo, klimatyzacja, wentylacja.",
				url: "https://www.klima.pl/",
				logo: "https://www.klima.pl/pf_logo.png",
			},
		},
		breadcrumb: {
			"@type": "BreadcrumbList",
			"@id": `https://www.klima.pl/oferta/${slug}/#breadcrumbs`,
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "Strona główna",
					item: {
						"@type": "Thing",
						"@id": "https://www.klima.pl/",
					},
				},
				{
					"@type": "ListItem",
					position: 2,
					name: `Oferta`,
					item: {
						"@type": "Thing",
						"@id": `https://www.klima.pl/oferta`,
					},
				},
				{
					"@type": "ListItem",
					position: 3,
					name: `${title}`,
					item: {
						"@type": "Thing",
						"@id": `https://www.klima.pl/oferta/${slug}`,
					},
				},
			],
		},
	};
};
