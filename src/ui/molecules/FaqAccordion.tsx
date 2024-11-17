import { Accordion } from "@/ui/shadcn/accordion";

type FaqAccordionProps = {
	children: React.ReactNode;
	title: string;
	slug: string;
};

export const FaqAccordion = ({ children, title, slug }: FaqAccordionProps) => {
	return (
		<div className="px-6 lg:px-8">
			<Accordion type="single" collapsible className="text-tertiary" id={slug}>
				<h3 className="mb-4 text-2xl text-primary">{title}</h3>
				{children}
			</Accordion>
		</div>
	);
};
