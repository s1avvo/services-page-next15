"use client";

import { useState } from "react";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetHeader,
	SheetTitle,
	SheetDescription,
} from "@/ui/shadcn/sheet";
import { Button } from "@/ui/shadcn/button";

export const NavigationMobile = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button variant="ghost" size={"icon"}>
					<MenuIcon />
				</Button>
			</SheetTrigger>
			<SheetContent className="w-3/4 max-w-sm">
				<SheetHeader>
					<SheetTitle className="hidden" />
				</SheetHeader>
				<div
					onClick={(e) => {
						if (e.target instanceof HTMLElement && e.target.closest("a")) {
							setIsOpen(false);
						}
					}}
				>
					{children}
				</div>
				<SheetDescription className="hidden" />
			</SheetContent>
		</Sheet>
	);
};

export function MenuIcon(props: React.SVGAttributes<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 -960 960 960"
			width="24px"
			fill="#5f6368"
		>
			<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
		</svg>
	);
}
