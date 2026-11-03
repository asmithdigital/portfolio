// Screens shown on the UI design page. This is the only file to edit to change them.
// The grid and the lightbox follow `order`, lowest first.
//
// To add a screen:
// 1. Put the image in src/assets/images/ and import it below.
// 2. Add an entry to `uiScreens` with a title, an order, the image and real alt text.
//    Screen readers announce the title as the lightbox moves to each image.
//
// To show a tile that is still to come, use placeholder: true with a title and a status.
// It is not a link and does not open the lightbox. When the design is ready, remove
// placeholder and status, then add image and alt.
import type { ImageMetadata } from 'astro';
import footwearHome from '../assets/images/freelance-1a.png';
import footwearProducts from '../assets/images/freelance-1c.png';
import quoteStart from '../assets/images/raa-qtb-start.png';
import quoteCarUse from '../assets/images/QTB-motor.png';
import yogaSection from '../assets/images/freelance-3b.png';
import eventHireHome from '../assets/images/freelance-2a.png';
import universityPage from '../assets/images/uofa-subpage.png';
import memberWebsite from '../assets/images/raa-website.png';
import travelHome from '../assets/images/raa-travel-home.png';

export interface UiScreenImage {
	title: string;
	order: number;
	placeholder?: false;
	image: ImageMetadata;
	alt: string;
}

export interface UiScreenPlaceholder {
	title: string;
	order: number;
	placeholder: true;
	status: string;
}

export type UiScreen = UiScreenImage | UiScreenPlaceholder;

const screens: UiScreen[] = [
	{
		title: 'Online store home page',
		order: 1,
		image: footwearHome,
		alt: 'Online footwear store home page with a large photo of wool slippers, the headline "Experience Pure Comfort in Every Step" and a Shop Now button.',
	},
	{
		title: 'Online store products page',
		order: 2,
		image: footwearProducts,
		alt: 'Online store products page with filter and sort controls above a grid of wool slippers and baby boots with prices.',
	},
	{
		title: 'Insurance quote, first step',
		order: 3,
		image: quoteStart,
		alt: 'First step of a car insurance quote form, with a progress tracker, expandable legal notices and fields to enter a number plate and find the car.',
	},
	{
		title: 'Insurance quote, second step',
		order: 4,
		image: quoteCarUse,
		alt: 'Second step of a car insurance quote form, asking how the car is used, how far it drives each year and whether it is financed, with a progress tracker and a helper message.',
	},
	{
		title: 'Yoga studio website',
		order: 5,
		image: yogaSection,
		alt: 'Yoga website section on a dark green background, headed "How Yoga Supports a Better Life", with a Book class button between photos of a glowing lamp and a singing bowl.',
	},
	{
		title: 'Event hire home page',
		order: 6,
		image: eventHireHome,
		alt: 'Event hire website home page with a full width photo of a couple beside a long wedding table, the headline "For your special day" and a View all products button.',
	},
	{
		title: 'University website',
		order: 7,
		image: universityPage,
		alt: 'University research page with a photo of a smiling diver in a wetsuit, a section menu on the left and an introduction to the research institutes.',
	},
	{
		title: 'Membership website home page',
		order: 8,
		image: memberWebsite,
		alt: 'Home page with the headline "It\'s better to be a member", four quick links for insurance, claims, road service and payments, and feature cards below.',
	},
	{
		title: 'Travel website home page',
		order: 9,
		image: travelHome,
		alt: 'Travel website home page with a beach photo, a flight search form with tabs for flights, stays, cruises and car hire, and a row of holiday deal cards.',
	},
	{
		title: 'Bass Coast Podiatry',
		order: 10,
		placeholder: true,
		status: 'Coming soon',
	},
];

export const uiScreens = [...screens].sort((a, b) => a.order - b.order);
