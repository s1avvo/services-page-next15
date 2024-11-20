"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { type ComponentPropsWithRef } from "react";

export const PrefetchLink = (props: ComponentPropsWithRef<typeof Link>) => {
	const currentPath = usePathname();
	const router = useRouter();
	const strHref = typeof props.href === "string" ? props.href : props.href.href;

	const isActive = currentPath === strHref;

	const conditionalPrefetch = () => {
		if (strHref) {
			void router.prefetch(strHref);
		}
	};

	return (
		<Link
			{...props}
			prefetch={false}
			onMouseEnter={(e) => {
				conditionalPrefetch();
				return props.onMouseEnter?.(e);
			}}
			onPointerEnter={(e) => {
				conditionalPrefetch();
				return props.onPointerEnter?.(e);
			}}
			onTouchStart={(e) => {
				conditionalPrefetch();
				return props.onTouchStart?.(e);
			}}
			onFocus={(e) => {
				conditionalPrefetch();
				return props.onFocus?.(e);
			}}
			className={clsx(props.className, `${isActive && "bg-accent text-accent-foreground outline-none"}`)}
		/>
	);
};
