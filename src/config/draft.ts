// Settings for the process-led home page, the header menu and the case-study tiles.

import wayOfWorking2 from '../assets/images/way-of-working-2.png';
import miroIdeation from '../assets/images/miro-ideation-example.png';
import travelAffinity from '../assets/images/travel-sprint-affinity.jpg';
import travelWireframes from '../assets/images/travel-sd-wireframes.png';
import usertesting2 from '../assets/images/usertesting-2.png';
import claimsFigma from '../assets/images/raa-claims-figma.png';
import uxBenchmarking from '../assets/images/ux-benchmarking.png';

export type StageSlug =
	| 'frame'
	| 'discover'
	| 'define-and-align'
	| 'design-and-prototype'
	| 'test'
	| 'deliver'
	| 'measure-and-loop-back';

export type Thumbnail = {
	image: ImageMetadata;
	alt: string;
	/** CSS object-position: which part of the image stays in view when cropped. */
	position: string;
	/** 1 = no zoom. 1.5 = 50% closer. Zoom grows out from `position`. */
	zoom: number;
};

/**
 * Stage thumbnails on the draft home page, all in one place.
 *
 * To adjust in the browser: run `npm run dev`, open /portfolio/, and edit
 * the values below. The page reloads on save. You can also try values live in
 * DevTools on the `--thumb-position` and `--thumb-zoom` custom properties of each
 * `.draft-thumb` element, then copy the result back here.
 */
export const draftThumbnails = {
	layout: {
		/** Thumbnail shape on every screen size. */
		aspectRatio: '3 / 2',
		/** Thumbnail width on wider screens (210px). */
		desktopWidth: '13.125rem',
		/** Thumbnail width on phones (90px). */
		mobileWidth: '5.625rem',
	},
	stages: {
		frame: {
			image: wayOfWorking2,
			alt: 'Ways of working framework with the pathway panel open, showing dual-track discovery, solution discovery and existing components.',
			position: 'left top',
			zoom: 1,
		},
		discover: {
			image: miroIdeation,
			alt: 'Miro board showing current state analysis, annotated observations and design options.',
			position: 'left top',
			zoom: 1,
		},
		'define-and-align': {
			image: travelAffinity,
			alt: 'Team affinity mapping with sticky notes on a large window during the RAA Travel sprint.',
			position: 'center',
			zoom: 1,
		},
		'design-and-prototype': {
			image: travelWireframes,
			alt: 'RAA Travel booking wireframes for search, detail, payment and confirmation screens.',
			position: 'left top',
			zoom: 1,
		},
		test: {
			image: usertesting2,
			alt: "Moderated usability session showing a participant's screen with a tagged transcript and observation notes.",
			position: 'left top',
			zoom: 1,
		},
		deliver: {
			image: claimsFigma,
			alt: 'Figma file showing motor claims rebuild screens, including the review and lodge step.',
			position: 'left top',
			zoom: 1,
		},
		'measure-and-loop-back': {
			image: uxBenchmarking,
			alt: 'Usability benchmarking dashboard for an insurance quote, showing effectiveness, efficiency, satisfaction and desirability.',
			position: 'left top',
			zoom: 1,
		},
	} satisfies Record<StageSlug, Thumbnail>,
};

/**
 * Home page tiles and Practices menu items, in display order.
 * Each opens the case-study page at /portfolio/work/<slug>.
 * Tile images, titles and colours come from the live site's src/data/projects.ts
 * (matched by `liveHref`), so the tiles look exactly like the live home page.
 */
export const draftPracticeLinks: {
	label: string;
	liveHref: string;
	/** Case-study path, turned into /portfolio/work/<slug> by draftHref. */
	draftPath: string;
	/** Optional tile text that replaces the live tile title. */
	tileTitle?: string;
}[] = [
	{ label: 'UX and product process', liveHref: '/portfolio/work/ux-process', draftPath: '/ux-process' },
	{ label: 'Workshop facilitation', liveHref: '/portfolio/work/workshops', draftPath: '/workshops' },
	{ label: 'Journey mapping', liveHref: '/portfolio/work/journey-mapping', draftPath: '/journey-mapping' },
	{ label: 'Design systems', liveHref: '/portfolio/work/design-systems', draftPath: '/design-systems' },
	{ label: 'Benchmarking', liveHref: '/portfolio/work/research-benchmarking', draftPath: '/research-benchmarking' },
	{ label: 'AI tooling', liveHref: '/portfolio/work/ai-tooling', draftPath: '/ai-tooling' },
	{
		label: 'UI design and working with UI teams',
		liveHref: '/portfolio/work/ui-design',
		draftPath: '/ui-design',
		tileTitle: 'UI fluency, and working alongside UI design teams.',
	},
];

export const draftConfig = {
	/**
	 * Path to a resume file inside public/, for example 'andrew-smith-resume.pdf'.
	 * When null, the contact block shows the email address only.
	 */
	resumeFile: null as string | null,
};

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Builds a site URL: draftHref('/') is the home page, draftHref('/design-systems') is /portfolio/work/design-systems. */
export function draftHref(path = '/') {
	if (path === '/') return `${base}/`;
	return `${base}/work${path}`;
}

/** Builds a URL to a file in public/, respecting the configured base. */
export function publicHref(file: string) {
	return `${base}/${file.replace(/^\//, '')}`;
}
