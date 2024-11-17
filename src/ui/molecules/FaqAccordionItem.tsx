import { AccordionItem, AccordionTrigger, AccordionContent } from "@/ui/shadcn/accordion";

type FaqAccordionItemProps = {
	slug: string;
	title: string;
	description: string;
};

export const FaqAccordionItem = ({ slug, title, description }: FaqAccordionItemProps) => {
	return (
		<AccordionItem value={slug}>
			<AccordionTrigger className="gap-2 text-pretty text-base">{title}</AccordionTrigger>
			<AccordionContent>
				<p className="whitespace-pre-wrap text-pretty text-base">{description}</p>
			</AccordionContent>
		</AccordionItem>
	);
};
