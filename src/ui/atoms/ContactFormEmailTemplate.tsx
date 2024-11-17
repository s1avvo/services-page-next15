type ContactFormEmailProps = {
	name: string;
	email: string;
	phone: string;
	subject: string;
	message: string;
};

export const ContactFormEmail = ({ name, email, phone, subject, message }: ContactFormEmailProps) => {
	return (
		<section className="my-10 flex w-3/4 max-w-xl flex-col items-center justify-center rounded-md bg-white px-6 py-8 shadow-sm drop-shadow-sm dark:bg-gray-900">
			<header className="self-start">
				<a href="http://klima.pl" target="_blank" rel="noopener noreferrer">
					<img src={`${process.env.NEXT_PUBLIC_URL}/pf_logo.png`} alt="klima.com" />
				</a>
			</header>

			<main className="mt-8">
				<p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">Od: {`${name} <${email}>`}</p>
				<h2 className="text text-gray-700 dark:text-gray-200">{subject}</h2>

				<p className="mt-2 font-light leading-loose text-gray-600 dark:text-gray-300">{message}</p>

				<p className="mt-8 text-gray-600 dark:text-gray-300">
					{name}
					<br />
					tel: {phone} <br />
					email: {email}
					<br />
				</p>
			</main>

			<footer className="mt-8">
				<p className="text-sm text-gray-500 dark:text-gray-400">
					Wiadomość została wysłana ze strony{" "}
					<a
						href="http://klima.pl"
						className="text-primary dark:text-blue-400"
						target="_blank"
						rel="noreferrer"
					>
						klima.com{" "}
					</a>
					<span className="mt-3 text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} klima</span>
				</p>
			</footer>
		</section>
	);
};
