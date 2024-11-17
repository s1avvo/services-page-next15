"use client";

import { useRouter } from "next/navigation";
import {
	Dialog,
	DialogOverlay,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/ui/shadcn/dialog";

export function Modal({ title, alt, children }: { title: string; alt: string; children: React.ReactNode }) {
	const router = useRouter();

	const handleOpenChange = () => {
		router.back();
	};

	return (
		<Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
			<DialogOverlay className="bg-black/40">
				<DialogContent className="min-w-fit overflow-hidden">
					<DialogHeader>
						<DialogTitle>{title}</DialogTitle>
						<DialogDescription>{alt}</DialogDescription>
					</DialogHeader>
					{children}
				</DialogContent>
			</DialogOverlay>
		</Dialog>
	);
}
