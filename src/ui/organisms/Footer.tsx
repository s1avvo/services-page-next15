import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { PrefetchLink } from "@ui/PrefetchLink";
import { NewsletterForm } from "@ui/NewsletterForm";

const contact = {
	header: "Kontakt",
	links: [
		{
			label: "biuro@klima.pl",
			href: "mailto:biuro@klima.pl",
			icon: <EmailIcon width={24} height={24} />,
		},
		{
			label: "000 000 000",
			href: "tel:+48000000000",
			icon: <PhoneIcon width={24} height={24} />,
		},
		{
			label: "Facebook",
			href: "https://www.facebook.com",
			icon: <FacebookIcon width={24} height={24} />,
		},
		{
			label: "Instagram",
			href: "https://www.instagram.com",
			icon: <InstagramIcon width={24} height={24} />,
		},
	],
};

export const Footer = async () => {
	const t = await getTranslations("Global.footer");

	return (
		<footer className="relative w-full bg-primary py-8 sm:py-12">
			<div className="mx-auto max-w-screen-2xl px-4 sm:px-8">
				<EmailIcon
					className="absolute right-4 top-4 text-secondary sm:right-16 sm:top-10"
					height={64}
					width={64}
				/>

				<NewsletterForm />

				<section className="bg mt-16 grid grid-cols-1 items-center justify-center md:grid-cols-4">
					<Image
						src={"/assets/klima-logo.svg"}
						alt="KLIMA Logo"
						width={164.9}
						height={37.9}
						aria-label="KLIMA Logo"
						className="mx-auto"
					/>

					<div className="md:col-span-3">
						<div className="mt-6 flex flex-wrap items-start justify-start gap-x-16 gap-y-8 sm:mt-0 sm:justify-end">
							<div>
								<h4 className="mb-2 text-lg text-muted">{t("contact.header")}</h4>
								<ul role="list" className="flex flex-col items-stretch justify-center gap-y-2">
									{contact.links.map((links) => (
										<li key={links.label} className="flex items-center gap-x-4 text-secondary">
											{links.icon}
											<Link
												href={links.href}
												aria-label={links.label}
												target="_blank"
												rel="noopener noreferrer"
												className="text-nowrap text-base transition-colors duration-300 hover:text-muted"
											>
												{links.label}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div>
								<h4 className="mb-2 text-lg text-muted">{t("offer.header")}</h4>
								<ul role="list" className="flex flex-col items-stretch justify-center gap-y-2">
									{(["0", "1"] as const).map((key) => (
										<li key={t(`offer.links.${key}.label`)}>
											<PrefetchLink
												className="text-nowrap text-base text-secondary transition-colors duration-300 hover:text-muted"
												href={t(`offer.links.${key}.href`)}
											>
												{t(`offer.links.${key}.label`)}
											</PrefetchLink>
										</li>
									))}
								</ul>
							</div>
							<div>
								<h4 className="mb-2 text-lg text-muted">{t("info.header")}</h4>
								<ul role="list" className="flex flex-col items-stretch justify-center gap-y-2">
									{(["0", "1", "2"] as const).map((key) => (
										<li key={t(`info.links.${key}.label`)}>
											<PrefetchLink
												className="text-nowrap text-base text-secondary transition-colors duration-300 hover:text-muted"
												href={t(`info.links.${key}.href`)}
											>
												{t(`info.links.${key}.label`)}
											</PrefetchLink>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</section>

				<div className="mt-8 text-center text-sm text-muted">Copyright © 2024 KLIMA</div>
			</div>
		</footer>
	);
};

export function EmailIcon(props: React.SVGAttributes<SVGSVGElement>) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
			<path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z" />
		</svg>
	);
}

export function PhoneIcon(props: React.SVGAttributes<SVGSVGElement>) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor">
			<path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
		</svg>
	);
}

export function FacebookIcon(props: React.SVGAttributes<SVGSVGElement>) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor">
			<path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
		</svg>
	);
}

export function InstagramIcon(props: React.SVGAttributes<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 50 50"
			fill="currentColor"
			strokeWidth={2}
			stroke="currentColor"
		>
			<path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
		</svg>
	);
}
