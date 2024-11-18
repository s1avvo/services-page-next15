import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/shadcn/card";

type HomeFeaturesCardProps = {
	icon: string;
	alt: string;
	title: string;
	description: string;
};

export const HomeFeaturesCard = ({ icon, alt, title, description }: HomeFeaturesCardProps) => {
	return (
		<div className="px-0 py-2 sm:px-4 sm:py-4 md:w-1/2 lg:w-1/3">
			<Card className="h-full border-2 border-dashed border-primary">
				<CardHeader>
					<div className="flex items-center gap-4">
						<Image src={icon} width={50} height={50} alt={alt} className="aspect-square" />
						<CardTitle className="text-xl">{title}</CardTitle>
					</div>
				</CardHeader>
				<CardContent>
					<p className="text-sm sm:text-base">{description}</p>
				</CardContent>
			</Card>
		</div>
	);
};
