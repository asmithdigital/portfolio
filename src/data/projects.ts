import type { ImageMetadata } from 'astro';
import raaJourneyImage from '../assets/images/raa-journey.png';
import uxBenchmarkingImage from '../assets/images/ux-benchmarking.png';
import raaBannerImage from '../assets/images/raa-banner.png';
import uofaStyleguideImage from '../assets/images/uofa-styleguide.png';

export type Project = {
	name: string;
	title: string;
	description: string;
	background: 'lime' | 'cyan' | 'lavender' | 'mint';
	variant: 'desktop' | 'split' | 'mobile' | 'board';
	href: string;
	image: ImageMetadata;
	alt: string;
	imageClass: string;
};

export const workPageSize = 10;

export const projects: Project[] = [
	{
		name: 'UI Design & Product Delivery',
		title: 'RAA Travel — end-to-end UX and UI across a multi-product booking platform',
		description:
			'Research, interaction design, prototyping, and high-fidelity UI across flights, stays, holidays, car hire, and cruise — web and mobile responsive.',
		background: 'lime',
		variant: 'desktop',
		href: '/portfolio/work/ui-design',
		image: raaBannerImage,
		alt: 'RAA Travel website shown across desktop, tablet, and mobile',
		imageClass: 'project-preview-image',
	},
	{
		name: 'Journey Mapping',
		title: 'Journey mapping at RAA — making member experience visible across product squads',
		description:
			'Connecting research, analytics, and team knowledge into shared maps that aligned product and design teams around real member needs.',
		background: 'cyan',
		variant: 'split',
		href: '/portfolio/work/journey-mapping',
		image: raaJourneyImage,
		alt: 'RAA Travel journey map showing member stages, moods, touchpoints, and pain points',
		imageClass: 'project-preview-image',
	},
	{
		name: 'UX Research & Testing',
		title: 'UX benchmarking at RAA — measuring effectiveness, efficiency, and desirability over time',
		description:
			'Building a formal research practice from scratch, including benchmarking dashboards, usability testing cadence, and a quantitative metrics framework.',
		background: 'lavender',
		variant: 'board',
		href: '/portfolio/work/research-testing',
		image: uxBenchmarkingImage,
		alt: 'Usability benchmarking dashboard showing effectiveness, efficiency, satisfaction metrics',
		imageClass: 'project-preview-image',
	},
	{
		name: 'Design Systems',
		title: 'University of Adelaide — a custom design system built for the whole university',
		description:
			'A JavaScript-based design system application built from scratch, used by all development teams across the university for public and internal digital products.',
		background: 'mint',
		variant: 'desktop',
		href: '/portfolio/work/design-systems',
		image: uofaStyleguideImage,
		alt: 'University of Adelaide styleguide application showing component documentation',
		imageClass: 'project-preview-image',
	},
];
