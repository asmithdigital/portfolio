// Shared types for case study slide decks. Each deck is one data file in this
// folder (for example travel.ts), rendered by src/components/deck/Deck.astro.

import type { ImageMetadata } from 'astro';

/** The six boxes from the process page, used for the coloured label on a slide. */
export type DeckBox = 1 | 2 | 3 | 4 | 5 | 6;

export type DeckImage = {
	src: ImageMetadata;
	alt: string;
	/** Short caption under the image. Use it for credits, for example "Research by U1". */
	caption?: string;
};

export type DeckStat = { value: string; label: string };

export type DeckSlide = {
	/**
	 * title: big centred title slide.
	 * text: headline and points only.
	 * image: headline and points on the left, one or two images on the right.
	 * images: headline, then a row of up to three images.
	 * stats: headline and a row of numbers.
	 * quotes: headline and up to three quotes.
	 * timeline: headline and a horizontal list of dated steps.
	 */
	layout: 'title' | 'text' | 'image' | 'images' | 'stats' | 'quotes' | 'timeline';
	/** Optional six-box label shown above the headline. */
	box?: DeckBox;
	/** Small label above the headline when there is no box, for example "The brief". */
	eyebrow?: string;
	title: string;
	/** Line under the title on the title slide, or a short lead on other slides. */
	subtitle?: string;
	/** Up to three short points. */
	points?: string[];
	images?: DeckImage[];
	stats?: DeckStat[];
	quotes?: { text: string; who: string }[];
	steps?: { when: string; what: string }[];
	/** Speaker notes: the talk track. Hidden until N is pressed. */
	notes?: string;
	/** Small source line at the bottom of the slide. */
	source?: string;
};

export type Deck = {
	/** Page title, for example "RAA Travel case study". */
	title: string;
	description: string;
	slides: DeckSlide[];
};
