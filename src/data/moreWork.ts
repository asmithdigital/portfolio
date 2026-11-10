// The row of three smaller cards under the case study tiles on the home page.
// This is the only file to edit to change them.
//
// Each card has a title, a short blurb, a tile colour and either a screenshot (image + alt)
// or no image. A card without an image shows a neutral placeholder block until a
// screenshot is added. The cards are not links yet.
import type { ImageMetadata } from 'astro';
import uofaBanner from '../assets/images/uofa-banner.png';
import claimsFigma from '../assets/images/raa-claims-figma.png';

export type MoreWorkItem = {
	title: string;
	blurb: string;
	/** Tile background, matching the .project-card colour classes in draft.css. */
	background: 'lime' | 'cyan' | 'lavender' | 'mint' | 'peach';
	image?: ImageMetadata;
	/** Needed with an image. */
	alt?: string;
};

export const moreWork: MoreWorkItem[] = [
	{
		title: 'University of Adelaide website',
		blurb:
			'Front-end developer and UX designer in an Agile team, rebuilding the university website on Drupal from a custom JavaScript design system.',
		background: 'mint',
		image: uofaBanner,
		alt: 'University of Adelaide website on a tablet, a laptop and a phone, with the Find your degree search',
	},
	{
		title: 'RAA core products',
		blurb:
			'Claims, My Account, payments and renewals: improving the everyday member journeys through research and usability testing, release after release.',
		background: 'lime',
		image: claimsFigma,
		alt: 'Figma design of the motor claim review step, showing the claim summary before lodging',
	},
	{
		title: 'RAA partner and new products',
		blurb:
			'Early discovery and testing for energy, solar and a white label finance partnership, working alongside service design.',
		background: 'peach',
	},
];
