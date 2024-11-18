import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/shadcn/card";

type FeaturesProps = {
	icon: string;
	alt: string;
	title: string;
	description: string;
};

export const FeaturesCard = ({ icon, alt, title, description }: FeaturesProps) => {
	return (
		<Card>
			<CardHeader className="items-center gap-4">
				<Image src={icon} width={75} height={75} alt={alt} />
				<CardTitle className="text-center">{title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-center">{description}</p>
			</CardContent>
		</Card>
	);
};
