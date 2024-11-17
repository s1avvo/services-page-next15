import Image from "next/image";
import { PrefetchLink } from "@ui/PrefetchLink";
import { Navigation } from "@ui/Navigation";

export const Header = () => {
	return (
		<header className="fixed top-0 z-50 w-full p-4">
			<div className="flex-no-wrap mx-auto flex h-16 max-w-screen-2xl items-center justify-between rounded-lg bg-background px-4 shadow-lg sm:px-8">
				<PrefetchLink href="/" aria-label="KLIMA Logo">
					<Image
						src={"/assets/klima-logo.svg"}
						alt="KLIMA Logo"
						width={164.9}
						height={37.9}
						aria-label="KLIMA Logo"
					/>
				</PrefetchLink>

				<Navigation />
			</div>
		</header>
	);
};
