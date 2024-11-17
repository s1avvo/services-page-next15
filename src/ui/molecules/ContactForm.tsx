"use client";

import { useTransition } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { useTranslations } from "next-intl";
import { useToast } from "@/ui/shadcn/use-toast";
import { type ContactFormData, ContactFormSchema } from "@/lib/schema";

import { Card, CardHeader, CardTitle, CardContent } from "@/ui/shadcn/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/ui/shadcn/form";
import { Button } from "@/ui/shadcn/button";
import { Input } from "@/ui/shadcn/input";
import { Select, SelectTrigger, SelectItem, SelectValue, SelectContent } from "@/ui/shadcn/select";
import { Textarea } from "@/ui/shadcn/textarea";
import { Checkbox } from "@/ui/shadcn/checkbox";

import { sendMessageAction } from "@/actions/contactActions";

const defaultValues: ContactFormData = {
	name: "",
	email: "",
	phone: "",
	subject: "",
	message: "",
	terms: false,
};

export const ContactForm = () => {
	const [isPending, startTransition] = useTransition();
	const t = useTranslations("/kontakt.contactForm");
	const subjectItemsKey = ["quotation", "support", "other"] as const;

	const form = useForm<z.infer<typeof ContactFormSchema>>({
		resolver: zodResolver(ContactFormSchema),
		defaultValues,
	});

	const { toast } = useToast();

	async function onSubmit(data: z.infer<typeof ContactFormSchema>) {
		startTransition(async () => {
			const res = await sendMessageAction(data);

			if (res?.success) {
				toast({
					variant: "default",
					title: t("success"),
				});

				form.reset();
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
		<Card className="mb-8 w-full min-w-[300px] max-w-md">
			<CardHeader>
				<CardTitle>{t("title")}</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-6">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem className="col-span-2">
									<FormControl>
										<Input placeholder={t("namePlaceholder")} {...field} />
									</FormControl>
									<FormMessage> {form.formState.errors[field.name]?.message || ""} </FormMessage>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem className="col-span-2">
									<FormControl>
										<Input placeholder={t("emailPlaceholder")} {...field} />
									</FormControl>
									<FormMessage> {form.formState.errors[field.name]?.message || ""} </FormMessage>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem className="col-span-2">
									<FormControl>
										<Input placeholder={t("phonePlaceholder")} {...field} maxLength={9} />
									</FormControl>
									<FormMessage> {form.formState.errors[field.name]?.message || ""} </FormMessage>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="subject"
							render={({ field }) => (
								<FormItem className="col-span-2">
									<Select onValueChange={field.onChange} value={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder={t("subjectPlaceholder")} />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{subjectItemsKey.map((key) => (
												<SelectItem key={key} value={key}>
													{t(`subjectItems.${key}.name`)}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage> {form.formState.errors[field.name]?.message || ""} </FormMessage>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem className="col-span-2">
									<FormControl>
										<Textarea
											placeholder={t("messagePlaceholder")}
											className="resize-none"
											{...field}
											rows={8}
										/>
									</FormControl>
									<FormMessage> {form.formState.errors[field.name]?.message || ""} </FormMessage>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="terms"
							render={({ field }) => (
								<FormItem className="col-span-2">
									<div className="flex flex-row items-center space-x-2">
										<FormControl>
											<Checkbox checked={field.value} onCheckedChange={field.onChange} id="terms1" />
										</FormControl>
										<FormLabel htmlFor="terms1">
											<Link
												href={t("terms.href")}
												className="font-normal underline hover:text-secondary"
												target="_blank"
												rel="noopener noreferrer"
											>
												{t("terms.termsPlaceholder")}
											</Link>
										</FormLabel>
									</div>
								</FormItem>
							)}
						/>
						<Button type="submit" className="col-span-2 ml-auto" disabled={isPending}>
							{t("submitButton")}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};
