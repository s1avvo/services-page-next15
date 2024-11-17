import { PrefetchLink } from "@ui/PrefetchLink";
import { Button } from "@/ui/shadcn/button";

export default function NotFound() {
	return (
		<main className="bg-primary">
			<div className="container mx-auto flex min-h-screen max-w-md flex-col justify-center">
				<h2 className="text-xl text-secondary">Błąd 404</h2>
				<h1 className="mt-3 text-2xl text-muted md:text-3xl">Nie znaleziono strony</h1>
				<p className="mt-4 text-base text-muted">Przepraszamy, strona której szukasz nie istnieje.</p>
				<div className="mt-6 flex items-center">
					<Button variant="secondary" asChild>
						<PrefetchLink href="/">Strona główna</PrefetchLink>
					</Button>
				</div>

				<div className="mt-10">
					<p className="mb-4 text-lg text-secondary">Inne nasze strony:</p>
					<ul className="space-y-2">
						<li>
							<Button variant={"link"} asChild>
								<PrefetchLink
									href={`${process.env.NEXT_PUBLIC_URL}/oferta/oferta-dla-domu`}
									className="inline-flex items-center gap-x-2 text-secondary"
								>
									Oferta dla domu
									<ArrowIcon className="h-5 w-5 rtl:rotate-180" />
								</PrefetchLink>
							</Button>
						</li>
						<li>
							<Button variant={"link"} asChild>
								<PrefetchLink
									href={`${process.env.NEXT_PUBLIC_URL}/oferta/oferta-dla-firm`}
									className="inline-flex items-center gap-x-2 text-secondary"
								>
									Oferta dla firm
									<ArrowIcon className="h-5 w-5 rtl:rotate-180" />
								</PrefetchLink>
							</Button>
						</li>
						<li>
							<Button variant={"link"} asChild>
								<PrefetchLink
									href={`${process.env.NEXT_PUBLIC_URL}/kontakt`}
									className="inline-flex items-center gap-x-2 text-secondary"
								>
									Kontakt
									<ArrowIcon className="h-5 w-5 rtl:rotate-180" />
								</PrefetchLink>
							</Button>
						</li>
						<li>
							<Button variant={"link"} asChild>
								<PrefetchLink
									href={`${process.env.NEXT_PUBLIC_URL}/faq`}
									className="inline-flex items-center gap-x-2 text-secondary"
								>
									FAQ
									<ArrowIcon className="h-5 w-5 rtl:rotate-180" />
								</PrefetchLink>
							</Button>
						</li>
					</ul>
				</div>
			</div>
		</main>
	);
}

function ArrowIcon(props: React.SVGAttributes<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
		</svg>
	);
}
