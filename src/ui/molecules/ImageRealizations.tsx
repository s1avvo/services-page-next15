import Link from "next/link";
import { CldImage } from "@ui/CldImage";

import { type CloudinaryResource } from "@/lib/schema";

export const ImageRealizations = ({ public_id, context, height, width }: CloudinaryResource) => {
	return (
		<div className="group block overflow-hidden rounded-lg">
			<Link href={`/${public_id}`} scroll={false}>
				<CldImage
					width={width}
					height={height}
					src={public_id}
					alt={context?.custom?.alt || "Default image alt"}
					sizes="(min-width: 1360px) 400px, (min-width: 1040px) calc(26.67vw + 43px), (min-width: 780px) calc(50vw - 28px), calc(96.52vw - 22px)"
					className="aspect-auto h-72 w-full object-cover group-hover:opacity-50"
				/>

				<ScaleIcon
					height="64px"
					width="64px"
					className="absolute right-4 top-4 rounded-full bg-secondary p-3 text-muted opacity-0 transition-opacity duration-100 ease-in group-hover:opacity-100"
				/>
			</Link>
		</div>
	);
};

export function ScaleIcon(props: React.SVGAttributes<SVGSVGElement>) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
			<path d="M200-200v-240h66.67v173.33H440V-200H200Zm493.33-320v-173.33H520V-760h240v240h-66.67Z" />
		</svg>
	);
}
