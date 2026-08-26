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
	navLinks: SiteLink[];
	extraPages: SiteLink[];
	legalLinks: SiteLink[];
	socialLinks: SiteLink[];
};

export const siteConfig: SiteConfig = {
	name: 'Andrew Smith',
	title: 'Andrew Smith | UX Design Leader & Manager',
	description:
		'Portfolio of Andrew Smith — UX Design Leader and Manager with 20 years across design systems, journey mapping, research operations, product design, and front-end development.',
	siteUrl: 'https://asmithdigital.github.io/portfolio',
	email: 'asmithdigital@gmail.com',
	locale: 'en-AU',
	authorName: 'Andrew Smith',
	authorRole: 'UX Design Leader & Manager',
	keywords: [
		'UX design leader',
		'UX manager portfolio',
		'design systems Adelaide',
		'journey mapping',
		'research operations',
		'product design case studies',
		'Andrew Smith UX',
		'senior UX designer Adelaide',
	],
	ogImage: '/og-image.svg',
	navLinks: [
		{ href: '/portfolio/work', label: 'Work' },
		{ href: '/portfolio/about', label: 'About' },
		{ href: '/portfolio/resume', label: 'Resume' },
	],
	extraPages: [
		{ href: '/portfolio/work/ui-design', label: 'UI Design' },
		{ href: '/portfolio/work/journey-mapping', label: 'Journey Mapping' },
		{ href: '/portfolio/work/research-testing', label: 'Research' },
		{ href: '/portfolio/work/design-systems', label: 'Design Systems' },
	],
	legalLinks: [],
	socialLinks: [
		{ href: 'https://www.linkedin.com/in/asmithdigital/', label: 'LinkedIn' },
	],
};
