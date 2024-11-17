import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { Roboto } from "next/font/google";
import { Toaster } from "@/ui/shadcn/toaster";

import "@/app/globals.css";

const roboto = Roboto({ subsets: ["latin", "latin-ext"], weight: ["100", "300", "500", "700", "900"] });

export const generateMetadata = async (): Promise<Metadata> => {
	const t = await getTranslations("Global.metadata");
	const url = `${process.env.NEXT_PUBLIC_URL}`;

	return {
		metadataBase: new URL(url),
		title: t("title"),
		description: t("description"),
		openGraph: {
			title: t("openGraph.title"),
			description: t("openGraph.description"),
			url,
			locale: "pl",
			type: "website",
		},
	};
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const locale = await getLocale();
	const messages = await getMessages();

	return (
		<html lang={locale} className="h-full antialiased">
			<body className={`${roboto.className} flex min-h-svh flex-col`}>
				<NextIntlClientProvider messages={messages} locale={locale}>
					<div className="flex min-h-svh flex-1 flex-col bg-background">{children}</div>
					<Toaster />
				</NextIntlClientProvider>
				{/* <Analytics /> */}
			</body>
		</html>
	);
}
