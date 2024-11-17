type FeaturesProps = {
	children: React.ReactNode;
	subtitle?: string;
	title: React.ReactNode;
	description: string;
};

export const Features = ({ children, subtitle, title, description }: FeaturesProps) => {
	return (
		<section className="mx-auto mt-16 flex max-w-screen-xl flex-col flex-wrap items-center px-4 sm:mt-24 md:flex-row md:items-stretch md:justify-center">
			{/* Top Side: Text Content */}
			{subtitle && (
				<h5 className="mb-4 max-w-min text-nowrap border-b-2 border-secondary px-8 text-center text-lg uppercase text-secondary">
					{subtitle}
				</h5>
			)}
			<h2 className="w-full text-center text-3xl text-primary sm:text-4xl">{title}</h2>
			<p className="mt-8 w-full max-w-screen-md text-balance px-4 text-center text-lg text-tertiary">
				{description}
			</p>
			<div className="relative mt-10 w-full" />

			{/* Bottom Side: Customer Features */}
			{children}
		</section>
	);
};
