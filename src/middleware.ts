import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
	const response = NextResponse.next();

	if (!request.cookies.has("NEXT_LANGUAGE")) {
		const header = request.headers.get("accept-language");
		const acceptLanguage = header?.split(",")[0]?.split(";")[0]?.split("-")[0] || "";

		response.cookies.set("NEXT_LANGUAGE", acceptLanguage);
	}

	return response;
}
