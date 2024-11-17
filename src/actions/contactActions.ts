"use server";
import { Resend } from "resend";
import { ContactFormEmail } from "@ui/ContactFormEmailTemplate";
import {
	type NewsletterFormData,
	type ContactFormData,
	ContactFormSchema,
	NewsletterFormSchem,
} from "@/lib/schema";

export async function sendMessageAction(formData: ContactFormData) {
	if (!process.env.RESEND_API_KEY) {
		return;
	}

	const resend = new Resend(process.env.RESEND_API_KEY);
	const result = ContactFormSchema.safeParse(formData);

	if (result.error) {
		return { success: false, error: result.error.errors[0]?.message };
	}

	try {
		const { name, email, phone, subject, message } = result.data;

		const { data, error } = await resend.emails.send({
			from: "Strona KLIMA <strona@klima.pl>",
			to: [`${process.env.EMAIL_TO}`],
			subject: `Wiadomość od: ${name} <${email}>`,
			text: `Imię i nazwisko: ${name}\nEmail: ${email}\nTelefon: ${phone}\nTemat: ${subject}\nWiadomość: ${message}`,
			react: ContactFormEmail({ name, phone, email, subject, message }),
		});

		if (!data) {
			return { success: false, error };
		}

		return { success: true };
	} catch (error) {
		return { success: false, error };
	}
}

export async function signForNewsletterAction(formData: FormData) {
	if (!process.env.RESEND_API_KEY || !process.env.RESEND_AUDIENCE_ID) {
		return;
	}

	const resend = new Resend(process.env.RESEND_API_KEY);
	const result = NewsletterFormSchem.safeParse(Object.fromEntries(formData));

	if (result.error) {
		return { success: false, error: result.error.errors[0]?.message };
	}

	try {
		const { email } = result.data;
		const { data, error } = await resend.contacts.create({
			email: email,
			audienceId: process.env.RESEND_AUDIENCE_ID,
		});

		if (!data) {
			return { success: false, error };
		}

		return { success: true };
	} catch (error) {
		return { success: false, error };
	}
}
