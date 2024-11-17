import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export const defaultLocale = async () => process.env.NEXT_PUBLIC_LANGUAG;

export default getRequestConfig(async () => {
	const cookieStore = await cookies();
	const lang = cookieStore.get("NEXT_LANGUAGE")?.value || "";

	const locale = ["en", "pl"].includes(lang) ? lang : (await defaultLocale()) || "en";

	return {
		locale,
		messages: (await import(`../../messages/${locale}.json`)).default,
	};
});
