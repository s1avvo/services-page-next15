"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/ui/shadcn/button";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const t = useTranslations("Global.errorGloba");

	return (
		<html>
			<body>
				<main className="bg-primary">
					<h3 className="text-xl text-secondary">Error</h3>
					<h2 className="mt-3 text-2xl text-muted md:text-3xl">{t("title")}</h2>
					<p className="mt-4 text-base text-muted">{error.message}</p>
					{(error.digest || error.stack) && (
						<details>
							<summary>{t("moreDetails")}</summary>
							{error.digest && <p>{error.digest}</p>}
							{error.stack && <pre>{error.stack}</pre>}
						</details>
					)}
					<div className="mt-6 flex items-center">
						<Button variant="secondary" onClick={() => reset()}>
							{t("action")}
						</Button>
					</div>
				</main>
			</body>
		</html>
	);
}
