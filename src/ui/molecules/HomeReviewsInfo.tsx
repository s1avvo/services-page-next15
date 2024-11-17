import Link from "next/link";
import { RatingStars } from "@/ui/atoms/RatingStars";
import { Button } from "@/ui/shadcn/button";

export const HomeReviewsInfo = ({ rating, rating_total }: { rating: number; rating_total: number }) => {
	return (
		<div className="flex items-center gap-2 text-base text-primary">
			<GoogleIcon width="32" height="32" className="inline-block" />
			{rating}/5
			<RatingStars rating={rating} />
			<Button variant={"link"} asChild>
				<Link
					href="https://www.google.com/search?sca_esv=f91b01bb931c3269&tbm=lcl&sxsrf=ADLYWILrsckIwyJcKMLXxxnTqw7nI07lPw:1720009216334&q=PF+KLIMA+Ch%C5%82odnictwo,+Klimatyzacja,+Wentylacja.+Opinie&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NTczNTUzMjcyMTUzMzM2Njcy3sDI-IrRPMBNwdvH09dRwTnjaFN-Sl5mckl5vo6Cd05mbmJJZVViclaijkJ4al5JZQ6IrafgX5CZl5m6iJVcnQBaeiC4jgAAAA&rldimm=5765562724566633723&hl=pl-PL&sa=X&ved=2ahUKEwisgebS7YqHAxUESPEDHTzHCmwQ9fQKegQIHxAF&biw=1536&bih=695&dpr=1.25#lkt=LocalPoiReviews"
					target="_blank"
					rel="noreferrer"
				>
					{`(${rating_total})`}
				</Link>
			</Button>
		</div>
	);
};

export function GoogleIcon(props: React.SVGAttributes<SVGSVGElement>) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
			<path
				fill="#FFC107"
				d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
			></path>
			<path
				fill="#FF3D00"
				d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
			></path>
			<path
				fill="#4CAF50"
				d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
			></path>
			<path
				fill="#1976D2"
				d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
			></path>
		</svg>
	);
}
