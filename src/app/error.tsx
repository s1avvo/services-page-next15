"use client";

import { useEffect } from "react";
import { PrefetchLink } from "@ui/PrefetchLink";
import { useTranslations } from "next-intl";
import { Button } from "@/ui/shadcn/button";

export default function Error({ error }: { error: Error & { digest?: string }; reset: () => void }) {
	const t = useTranslations("Global.error");

	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<main className="bg-primary">
			<div className="container mx-auto flex min-h-screen max-w-md flex-col justify-center">
				<h3 className="text-xl text-secondary">Error</h3>
				<h2 className="mt-3 text-2xl text-muted md:text-3xl">{t("title")}</h2>
				<p className="mt-4 text-base text-muted">{t("description")}</p>
				<div className="mt-6 flex items-center">
					<Button variant="secondary" asChild>
						<PrefetchLink href="/">{t("goBackLink")}</PrefetchLink>
					</Button>
				</div>
			</div>
		</main>
	);
}
