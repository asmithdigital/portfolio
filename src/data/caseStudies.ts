// Case study tiles on the home page. Each tile links to its full page at `href`.
// The older placeholder pages at /portfolio/case-studies/<slug>/ still build from this list.

import type { ImageMetadata } from 'astro';
import raaTravelHome from '../assets/images/raa-travel-home.png';
import qtbSprintSketches from '../assets/images/qtb-sprint-IMG_0314.jpg';

export type CaseStudy = {
	slug: string;
	label: string;
	title: string;
	teaser: string;
	image: ImageMetadata;
	alt: string;
	/** Full case study page, as a site path without the base, for example '/case-study/raa-travel/'. */
	href: string;
	/** Tile background, matching the .project-card colour classes. */
	background: 'lime' | 'cyan' | 'lavender' | 'mint';
};

export const caseStudies: CaseStudy[] = [
	{
		slug: 'travel',
		label: 'RAA Travel',
		title: 'Rebuilding online search and book for RAA Travel',
		teaser:
			'I led the UX end to end, from in-store interviews and a discovery design sprint to prototypes, testing and iteration across flights, stays, holidays, cruises and car hire.',
		image: raaTravelHome,
		alt: 'RAA Travel home page showing search for flights, stays and holidays',
		href: '/case-study/raa-travel/',
		background: 'cyan',
	},
	{
		slug: 'quote-to-buy',
		label: 'RAA Insurance',
		title: 'Quote to buy: finding the real conversion blocker',
		teaser:
			'The business assumed people were dropping out at payment because of payment options. A design sprint built on five years of research showed the real blocker was member identity matching, and the roadmap changed.',
		image: qtbSprintSketches,
		alt: 'Four people standing at a design sprint wall, reviewing solution sketches together.',
		href: '/case-study/raa-quote-to-buy/',
		background: 'lavender',
	},
];
