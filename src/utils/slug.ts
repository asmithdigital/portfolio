/** Turns a heading into a URL fragment: "What I’d do differently" becomes "what-id-do-differently". */
export const slugify = (text: string) =>
	text
		.toLowerCase()
		.replace(/[’']/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');

/** Returns a slugify function that adds -2, -3 and so on when a slug repeats on the page. */
export const uniqueSlugger = () => {
	const seen = new Map<string, number>();
	return (text: string) => {
		const base = slugify(text) || 'section';
		const count = (seen.get(base) ?? 0) + 1;
		seen.set(base, count);
		return count === 1 ? base : `${base}-${count}`;
	};
};
