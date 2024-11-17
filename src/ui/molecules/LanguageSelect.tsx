"use client";

import { useTransition } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/ui/shadcn/select";

import { setLanguageAction } from "@/actions/languageActions";

export const LanguageSelect = ({ className }: { className?: string }) => {
	const [isPending, startTransition] = useTransition();
	const t = useTranslations("Global.language");

	return (
		<Select
			onValueChange={(value) =>
				startTransition(async () => {
					await setLanguageAction(value);
				})
			}
			disabled={isPending}
		>
			<SelectTrigger
				isIcon={false}
				className={cn("flex w-[35px] items-center justify-center px-0 py-0 shadow-none", className)}
			>
				<SelectValue placeholder={t("namePlaceholder")} />
			</SelectTrigger>
			<SelectContent className="min-w-[2rem]">
				<SelectItem value="pl" disabled={t("namePlaceholder") === "PL"}>
					PL
				</SelectItem>
				<SelectItem value="en" disabled={t("namePlaceholder") === "EN"}>
					EN
				</SelectItem>
			</SelectContent>
		</Select>
	);
};
