import { HomeCooperatesList } from "@ui/HomeCooperatesList";

export const HomeCooperation = ({ title }: { title: React.ReactNode }) => {
	return (
		<section>
			<div className="mx-auto mb-16 mt-12 flex max-w-screen-xl flex-col items-center justify-between divide-x-0 divide-y px-4 sm:mt-20 md:flex-row md:divide-x md:divide-y-0">
				{/* Left Side: Text */}
				<div className="mb-8 basis-1/3 pr-0 md:mb-0 md:pr-8">
					<h4 className="ml-auto max-w-xs text-center text-2xl text-primary md:text-right">{title}</h4>
				</div>

				{/* Right Side: Companies cooperate with */}
				<div className="mr-auto w-full max-w-screen-md basis-2/3 overflow-hidden px-0 pt-8 sm:px-4 md:pt-0">
					<div className="relative inline-flex h-20 w-full flex-nowrap overflow-hidden">
						<div className="absolute left-0 top-0 z-10 h-20 w-24 bg-gradient-to-r from-background/100 to-background/0 sm:w-36" />
						<div className="absolute right-0 top-0 z-10 h-20 w-24 bg-gradient-to-l from-background to-background/0 sm:w-36" />

						<ul className="relative flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4">
							<HomeCooperatesList />
						</ul>
						<ul className="relative flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-4">
							<HomeCooperatesList />
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};
