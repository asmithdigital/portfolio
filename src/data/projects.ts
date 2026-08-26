import type { ImageMetadata } from 'astro';
import raaJourneyImage from '../assets/images/raa-journey.png';
import uxBenchmarkingImage from '../assets/images/ux-benchmarking.png';
import raaBannerImage from '../assets/images/raa-banner.png';
import uofaBannerImage from '../assets/images/uofa-banner.png';

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
		title: 'The design is only as good as how well it survives handover',
		description:
			'From information architecture and interaction design through to high-fidelity UI, prototyping, and QA — across web, mobile, and native app products.',
		background: 'lime',
		variant: 'desktop',
		href: '/portfolio/work/ui-design',
		image: raaBannerImage,
		alt: 'RAA Travel website shown across desktop, tablet, and mobile',
		imageClass: 'project-preview-image',
	},
	{
		name: 'Journey Mapping',
		title: 'An argument you can see is one you can actually win',
		description:
			'Making the member experience visible — connecting research, analytics, and team knowledge into a shared reference that turns opinion into evidence.',
		background: 'cyan',
		variant: 'split',
		href: '/portfolio/work/journey-mapping',
		image: raaJourneyImage,
		alt: 'RAA Travel journey map showing member stages, moods, touchpoints, and pain points',
		imageClass: 'project-preview-image',
	},
	{
		name: 'UX Research & Testing',
		title: 'Testing at the end checks a decision after it is expensive to change',
		description:
			'Usability benchmarking, confidence testing, and research operations — building the infrastructure that makes testing a habit rather than a one-off event.',
		background: 'lavender',
		variant: 'board',
		href: '/portfolio/work/research-testing',
		image: uxBenchmarkingImage,
		alt: 'Usability benchmarking dashboard showing effectiveness, efficiency, satisfaction, and desirability metrics',
		imageClass: 'project-preview-image',
	},
	{
		name: 'Design Systems',
		title: 'Give a design a memory and a hundred screens will share it',
		description:
			'Component libraries, token architecture, and documentation built from scratch — including a custom styleguide application used across an entire university.',
		background: 'mint',
		variant: 'desktop',
		href: '/portfolio/work/design-systems',
		image: uofaBannerImage,
		alt: 'University of Adelaide website shown across desktop, tablet, and mobile',
		imageClass: 'project-preview-image',
	},
];
