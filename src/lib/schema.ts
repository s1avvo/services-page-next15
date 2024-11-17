import { z } from "zod";

//Contact Form -----------------------------------------------------------------

export const ContactFormSchema = z.object({
	name: z
		.string({
			required_error: "Pole jest wymagane.",
		})
		.min(2, {
			message: "Imię musi mieć przynajmniej 2 znaki.",
		}),
	email: z
		.string({
			required_error: "Pole jest wymagane.",
		})
		.email("Podaj poprawny adres email."),
	phone: z
		.string({ required_error: "Pole jest wymagane." })
		.min(9, {
			message: "Podaj prawidłowy numer telefonu.",
		})
		.regex(/^\d{9}$/, { message: "Pole wymaga 9 cyfr bez prefixu." }),
	subject: z.string({ required_error: "Pole jest wymagane." }).trim().min(2, {
		message: "Prosze wybrać temat wiadomości.",
	}),
	message: z
		.string({ required_error: "Pole jest wymagane." })
		.min(10, {
			message: "Wiadomość musi mieć przynajmniej 10 znaków.",
		})
		.max(500, { message: "Wiadomość musi być krótszy niż 500 znaków." }),

	terms: z
		.boolean()
		.default(false)
		.refine((value) => value === true, {
			message: "Muisz zaakceptować regulamin aby przesłać formularz.",
		})
		.pipe(z.boolean()),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

// Newsletter Form ------------------------------------------------------------

export const NewsletterFormSchem = z.object({
	email: z
		.string({
			required_error: "Pole jest wymagane.",
		})
		.email("Podaj poprawny adres email."),
});

export type NewsletterFormData = z.infer<typeof NewsletterFormSchem>;

//Google Review -----------------------------------------------------------------

export const GoogleReviewSchema = z.object({
	author_name: z.string(),
	text: z.string(),
	relative_time_description: z.string(),
	rating: z.number(),
});

export type GoogleReview = z.infer<typeof GoogleReviewSchema>;

export const GoogleResponseSchema = z.object({
	result: z.object({
		reviews: z.array(GoogleReviewSchema),
		rating: z.number(),
		user_ratings_total: z.number(),
	}),
});

export type GoogleResponse = z.infer<typeof GoogleResponseSchema>;

//Cloudinary CDN -----------------------------------------------------------------

export const CloudinaryResourceSchema = z.object({
	public_id: z.string(),
	width: z.number(),
	height: z.number(),
	folder: z.string(),
	context: z
		.object({
			custom: z
				.object({
					alt: z.string().optional(),
					caption: z.string().optional(),
				})
				.optional(),
		})
		.optional(),
});

export const CloudinaryArrayResourceSchema = z.object({
	resources: z.array(CloudinaryResourceSchema),
});

export type CloudinaryResource = z.infer<typeof CloudinaryResourceSchema>;
