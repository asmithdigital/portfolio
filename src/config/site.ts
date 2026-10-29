export type SiteLink = {
	href: string;
	label: string;
};

export type SiteConfig = {
	name: string;
	title: string;
	description: string;
	siteUrl: string;
	email: string;
	locale: string;
	authorName: string;
	authorRole: string;
	keywords: string[];
	ogImage: string;
	legalLinks: SiteLink[];
	socialLinks: SiteLink[];
};

export const siteConfig: SiteConfig = {
	name: 'Andrew Smith',
	title: 'Andrew Smith | UX and product designer',
	description:
		'Andrew Smith, UX and product designer in Adelaide. I work with product managers and engineers to find the real problem, test ideas with people, and measure what changed.',
	siteUrl: 'https://asmithdigital.github.io/portfolio',
	email: 'asmithdigital@gmail.com',
	locale: 'en-AU',
	authorName: 'Andrew Smith',
	authorRole: 'UX and product designer',
	keywords: [
		'UX designer Adelaide',
		'UX designer portfolio',
		'UX research and usability testing',
		'design sprints and workshops',
		'journey mapping',
		'design systems',
		'UX benchmarking',
		'Andrew Smith UX',
	],
	ogImage: '/og-image.svg',
	legalLinks: [],
	socialLinks: [
		{ href: 'https://www.linkedin.com/in/andrewstephensmith/', label: 'LinkedIn' },
	],
};
