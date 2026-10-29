// Site-wide settings for the header menu, contact block and internal links.

export const draftConfig = {
	/**
	 * Path to a resume file inside public/, for example 'andrew-smith-resume.pdf'.
	 * When null, the contact block shows the email address only.
	 */
	resumeFile: null as string | null,
};

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Builds a site URL that respects the configured base: siteHref('/process/') is /portfolio/process/. */
export function siteHref(path = '/') {
	return `${base}/${path.replace(/^\//, '')}`;
}

/** Builds a URL to a file in public/, respecting the configured base. */
export function publicHref(file: string) {
	return `${base}/${file.replace(/^\//, '')}`;
}

/** Header menu items, in display order. Used on desktop and mobile. */
export const navLinks: { label: string; href: string }[] = [
	{ label: 'Case studies', href: siteHref('/#case-studies') },
	{ label: 'Process', href: siteHref('/process/') },
	{ label: 'Blog', href: siteHref('/#blog') },
];
