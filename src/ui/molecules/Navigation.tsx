import { getTranslations } from "next-intl/server";
import { PrefetchLink } from "@ui/PrefetchLink";
import { NavigationMobile } from "@ui/NavigationMobile";
import { LanguageSelect } from "@/ui/molecules/LanguageSelect";

export const Navigation = async () => {
	const t = await getTranslations("Global.navigation");

	return (
		<>
			{/* Desktop Navigation Menu */}
			<div className="hidden md:flex">
				<ul className="flex items-center justify-center gap-x-1">
					{(["0", "1", "2", "3"] as const).map((key) => (
						<li key={t(`${key}.href`)}>
							<PrefetchLink
								href={t(`${key}.href`)}
								className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-base text-tertiary transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
							>
								{t(`${key}.label`)}
							</PrefetchLink>
						</li>
					))}
				</ul>
				<LanguageSelect className="ml-4" />
			</div>

			{/* Mobile Navigation Menu */}
			<div className="block md:hidden">
				<NavigationMobile>
					<ul className="mt-12 flex flex-col items-stretch justify-center gap-y-2">
						{(["0", "1", "2", "3"] as const).map((key) => (
							<li key={t(`${key}.href`)}>
								<PrefetchLink
									href={t(`${key}.href`)}
									className="group inline-flex h-9 w-full items-center justify-center rounded-md bg-transparent px-4 py-2 text-base text-tertiary transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
								>
									{t(`${key}.label`)}
								</PrefetchLink>
							</li>
						))}
					</ul>
					<LanguageSelect className="absolute top-4" />
				</NavigationMobile>
			</div>
		</>
	);
};
