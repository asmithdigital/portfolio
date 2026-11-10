// Cards in the "More work" section of the home page. This is the only file to edit to change them.
//
// Each card has a title, a one or two line blurb, and either a screenshot (image + alt)
// or no image. A card without an image shows a neutral placeholder block with its title,
// until a screenshot is added. The cards are not links yet.
import type { ImageMetadata } from 'astro';
import uofaBanner from '../assets/images/uofa-banner.png';
import claimsFigma from '../assets/images/raa-claims-figma.png';
import myAccountFigma from '../assets/images/raa-myaccount-figma.png';
import renewalsFigma from '../assets/images/figma-renewals-example.png';
import paymentPortal from '../assets/images/payment-portal.png';

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
		title: 'RAA Claims',
		blurb: 'Online claim lodgement, claim status and document upload, improved over several rounds of usability testing.',
		image: claimsFigma,
		alt: 'Figma design of the motor claim review step, showing the claim summary before lodging',
	},
	{
		title: 'RAA My Account',
		blurb:
			'Members manage policies, payments and claims in one place. Information architecture shaped by card sorting and tree testing.',
		image: myAccountFigma,
		alt: 'Figma file for My Account, with screens for changing a direct debit day',
	},
	{
		title: 'RAA Renewals',
		blurb: 'Clearer renewal dates and easier changes to direct debit dates, tested with members.',
		image: renewalsFigma,
		alt: 'Figma screens for the renewal flow on desktop and mobile, from finding a renewal to payment',
	},
	{
		title: 'RAA Payment portal',
		blurb: 'A simpler way for members to make a payment online, tested and refined before release.',
		image: paymentPortal,
		alt: 'Make a payment page offering more payment options or paying in full by card with a policy number',
	},
	{
		title: 'RAA Energy',
		blurb: 'Early discovery and testing for solar and battery quotes and energy insights emails.',
	},
	{
		title: 'RAA Finance partner',
		blurb: 'Discovery for a white label finance partnership, mapping the journey with service design.',
	},
];
