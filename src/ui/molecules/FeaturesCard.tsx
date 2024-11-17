import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/ui/shadcn/card";

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
				<CardDescription className="text-pretty text-center text-base">{description}</CardDescription>
			</CardContent>
		</Card>
	);
};
