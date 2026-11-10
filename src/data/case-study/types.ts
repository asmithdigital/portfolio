// Shapes for case study pages. Each case study keeps all of its words and image
// references in one data file next to this one, for example raa-travel.ts.
//
// How a data file becomes a page (see src/layouts/CaseStudy.astro):
// - Each slide is a subheading (H3) in the "On this page" menu.
// - Consecutive slides with the same stage label share one section (H2).
// - Blocks render in the order listed. Images sit to the right of the text on
//   wide screens and under it on small screens, with the caption as alt text
//   unless `alt` is given.
import type { ImageMetadata } from 'astro';

export type CaseStudyImage = {
	src: ImageMetadata;
	/** Shown under the image. Also used as the alt text when `alt` is not set. */
	caption?: string;
	/** Needed when there is no caption. */
	alt?: string;
};

export type CaseStudyBlock =
	/** Running text: one string per paragraph. */
	| { type: 'text'; paragraphs: string[] }
	/** A short intro line, slightly larger than running text. */
	| { type: 'lead'; text: string }
	/** A small heading (H4) with optional bullet points under it. */
	| { type: 'list'; heading?: string; items: string[] }
	/** Quote callout. Use an array for several quotes that share one attribution. */
	| { type: 'quote'; text: string | string[]; cite?: string }
	/** Big number callouts in a row. */
	| { type: 'stats'; items: { value: string; label: string }[] }
	/** Numbered points with a title and a line of detail. */
	| { type: 'points'; items: { title: string; text: string }[] }
	/** A table with a header row. Every row has one cell per column. */
	| { type: 'table'; caption: string; columns: string[]; rows: string[][] }
	/** Horizontal timeline that stacks on small screens. */
	| { type: 'timeline'; items: { date: string; title: string; text: string }[] }
	/** Numbered cards, used for "What I'd do differently". */
	| { type: 'cards'; items: { title: string; text: string }[] }
	/** A short standout note, for example the takeaway under a table. */
	| { type: 'note'; text: string };

export type CaseStudySlide = {
	/** Stage label shown above the slide title, for example { number: '02', label: 'Understand' }. */
	stage: { number?: string; label: string };
	/** Slide title, used as the subheading. */
	title: string;
	blocks: CaseStudyBlock[];
	images?: CaseStudyImage[];
};

export type CaseStudyData = {
	/** Page <title> and meta description. */
	meta: { title: string; description: string };
	banner: {
		eyebrow: string;
		title: string;
		subtitle: string;
		role: string;
		dates: string;
		image: ImageMetadata;
		/** The banner image is decorative behind the title, so this is usually empty. */
		alt?: string;
		/** CSS object-position for the cropped background, for example 'center top'. */
		position?: string;
	};
	/** Opening paragraph under the banner, before the first section. */
	intro?: string;
	slides: CaseStudySlide[];
	/** Link to the other case study at the bottom of the page. `href` is a site path, without the base. */
	related: { label: string; title: string; href: string };
};

/** A section in the "On this page" menu, built by the layout from the slides. */
export type CaseStudyNavSection = {
	id: string;
	number?: string;
	label: string;
	slides: { id: string; title: string }[];
};
