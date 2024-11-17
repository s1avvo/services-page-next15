import type pl from "./messages/pl.json";

type Messages = typeof pl;

declare global {
	// Use type safe message keys
	interface IntlMessages extends Messages {}
}
