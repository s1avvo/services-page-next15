import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/ui/shadcn/tabs";

export const OfferRealizationsTabs = ({ tabs }: { tabs: { title: string; slug: string }[] }) => {
	return (
		<Tabs defaultValue={tabs[0]?.slug} className="mx-auto mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8">
			<TabsList className="mx-auto w-full rounded-none bg-background">
				{tabs.map(({ title, slug }) => (
					<TabsTrigger
						key={slug}
						value={slug}
						asChild
						className="rounded-b-none border-b-2 border-b-primary/0 py-3 text-base hover:bg-primary-foreground data-[state=active]:border-b-primary/100 data-[state=active]:text-primary data-[state=active]:shadow-none"
					>
						<Link href={`?realizacje=${slug}`} scroll={false}>
							{title}
						</Link>
					</TabsTrigger>
				))}
			</TabsList>
		</Tabs>
	);
};
