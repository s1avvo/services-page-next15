"use client";

import { useTransition } from "react";
import { useTranslations } from "next-intl";
import Form from "next/form";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { toast } from "@/ui/shadcn/use-toast";
import { Input } from "@/ui/shadcn/input";
import { Button } from "@/ui/shadcn/button";

import { signForNewsletterAction } from "@/actions/contactActions";

export const NewsletterForm = () => {
	const t = useTranslations("Global.newsletter");

	const [isPending, startTransition] = useTransition();

	async function signForNewsletter(data: FormData) {
		startTransition(async () => {
			const res = await signForNewsletterAction(data);

			if (res?.success) {
				toast({
					variant: "default",
					title: t("success"),
				});
			} else {
				toast({
					variant: "destructive",
					title: t("error"),
					description: String(res?.error),
				});
			}
		});
	}

	return (
		<div>
			<h4 className="text-2xl text-muted">{t("title")}</h4>
			<p className="mt-4 max-w-2xl text-sm text-accent sm:text-base">{t("description")}</p>

			<Form action={signForNewsletter} className="mt-4 flex w-full max-w-sm items-center gap-2">
				<Input id="email" type="email" placeholder={t("emailPlaceholder")} name="email" required />
				<Button variant={"secondary"} size={"sm"} type="submit" disabled={isPending}>
					<span className="hidden sm:inline-block">{t("submitButton")}</span>
					<ChevronRightIcon className="inline-block sm:hidden" />
				</Button>
			</Form>
		</div>
	);
};
