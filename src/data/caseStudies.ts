// Case study tiles on the home page and their placeholder pages at /portfolio/case-studies/<slug>/.

import type { ImageMetadata } from 'astro';
import raaTravelHome from '../assets/images/raa-travel-home.png';
import qtbSprintSketches from '../assets/images/qtb-sprint-IMG_0314.jpg';
import uofaBanner from '../assets/images/uofa-banner.png';

export type CaseStudy = {
	slug: string;
	label: string;
	title: string;
	teaser: string;
	image: ImageMetadata;
	alt: string;
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
		background: 'lavender',
	},
	{
		slug: 'university-website',
		label: 'University of Adelaide',
		title: 'Rebuilding the university website, design system first',
		teaser:
			'As front-end developer and UX designer in a co-located Agile team, I helped rebuild the university website on Drupal over several years, starting from a custom design system.',
		image: uofaBanner,
		alt: 'University of Adelaide website banner',
		background: 'mint',
	},
];
