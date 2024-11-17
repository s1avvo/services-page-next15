import { cn } from "@/lib/utils";

type ArticleProps = {
	slug: string;
	subtitle: string;
	title: React.ReactNode;
	description: string;
	className?: string;
};

export const Article = ({ slug, subtitle, title, description, className }: ArticleProps) => {
	return (
		<article className={cn("mx-4 mt-8 w-full px-4 sm:px-0 md:mx-8 md:mt-0 md:max-w-md", className)} id={slug}>
			<h5 className="mx-auto mb-4 max-w-min text-nowrap border-b-2 border-secondary px-8 text-center text-lg uppercase text-secondary sm:mx-0 sm:mr-auto">
				{subtitle}
			</h5>
			<h2 className="text-center text-3xl text-primary sm:text-left sm:text-4xl">{title}</h2>
			<p className="mt-8 text-pretty text-center text-base text-paragraf sm:text-left">{description}</p>
		</article>
	);
};
