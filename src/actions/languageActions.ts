"use server";

import { cookies } from "next/headers";

export async function setLanguageAction(lang: string) {
	const cookieStore = await cookies();

	cookieStore.set({
		name: "NEXT_LANGUAGE",
		value: lang,
		secure: true,
	});
}
