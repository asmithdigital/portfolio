// The row of two plain cards under the case study tiles on the home page.
// This is the only file to edit to change them.
//
// Each card has a title, a short blurb and either a screenshot (image + alt)
// or no image. A card without an image shows a neutral placeholder block until a
// screenshot is added. The cards are not links yet.
import type { ImageMetadata } from 'astro';
import uofaBanner from '../assets/images/uofa-banner.png';
import claimsFigma from '../assets/images/raa-claims-figma.png';

export type MoreWorkItem = {
	title: string;
	blurb: string;
	image?: ImageMetadata;
	/** Needed with an image. */
	alt?: string;
};

export const moreWork: MoreWorkItem[] = [
	{
		title: 'University of Adelaide website',
		blurb:
			'Front-end developer and UX designer in an Agile team, rebuilding the university website on Drupal from a custom JavaScript design system.',
		image: uofaBanner,
		alt: 'University of Adelaide website on a tablet, a laptop and a phone, with the Find your degree search',
	},
	{
		title: 'RAA core and partner products',
		blurb:
			'Claims, My Account, payments and renewals, plus early discovery for energy, solar and a white label finance partnership. Improving everyday member journeys through research and usability testing.',
		image: claimsFigma,
		alt: 'Figma design of the motor claim review step, showing the claim summary before lodging',
	},
];
