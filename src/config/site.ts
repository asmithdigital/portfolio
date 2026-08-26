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

const defaultSiteUrl = 'https://maria-lake.vercel.app';
const envSiteUrl = process.env.SITE_URL ?? process.env.PUBLIC_SITE_URL;
const normalizedSiteUrl = (envSiteUrl || defaultSiteUrl).replace(/\/+$/, '');

export const siteConfig: SiteConfig = {
	name: 'Andrew Smith',
	title: 'Andrew Smith | UX Design Leader',
	description:
		'UX design practice spanning design systems, journey mapping, research operations, and evidence-based product design.',
	// Set SITE_URL or PUBLIC_SITE_URL to keep canonicals, robots.txt, and the sitemap aligned in each environment.
	siteUrl: normalizedSiteUrl,
	email: 'asmithdigital@gmail.com',
	locale: 'en-US',
	authorName: 'Andrew Smith',
	authorRole: 'UX Design Leader',
	keywords: [
		'UX design leader portfolio',
		'design systems',
		'journey mapping',
		'research operations',
		'product design case studies',
	],
	ogImage: '/og-image.svg',
	navLinks: [
		{ href: '/work', label: 'Work' },
		{ href: '/about', label: 'About' },
		{ href: '/resume', label: 'Resume' },
	],
	extraPages: [
		{ href: '/work/ui-design', label: 'UI Design' },
		{ href: '/work/journey-mapping', label: 'Journey Mapping' },
		{ href: '/work/research-testing', label: 'Research' },
		{ href: '/work/design-systems', label: 'Design Systems' },
		{ href: '/cookies', label: 'Cookies' },
		{ href: '/privacy', label: 'Privacy' },
		{ href: '/terms', label: 'Terms' },
		{ href: '/404', label: '404' },
	],
	legalLinks: [
		{ href: '/cookies', label: 'Cookies' },
		{ href: '/privacy', label: 'Privacy' },
		{ href: '/terms', label: 'Terms' },
	],
	socialLinks: [
		{ href: 'https://www.linkedin.com/in/asmithdigital/', label: 'LinkedIn' },
	],
};
