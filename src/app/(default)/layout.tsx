import { Header } from "@ui/Header";
import { Footer } from "@ui/Footer";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main className="w-full overflow-hidden">{children}</main>
			<Footer />
		</>
	);
}
