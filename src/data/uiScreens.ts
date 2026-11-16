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
//
// `bassCoastScreens` is a separate group shown under its own heading, with each
// title shown as a caption under the tile.
import type { ImageMetadata } from 'astro';
import footwearHome from '../assets/images/freelance-1a.png';
import footwearProducts from '../assets/images/freelance-1c.png';
import quoteStart from '../assets/images/raa-qtb-start.png';
import quoteCarUse from '../assets/images/QTB-motor.png';
import memberWebsite from '../assets/images/raa-website.png';
import travelHome from '../assets/images/raa-travel-home.png';
import logIn from '../assets/images/log-in.png';
import eventHireHome from '../assets/images/freelance-2a.png';
import universityPage from '../assets/images/uofa-subpage.png';
import yogaHomeTop from '../assets/images/graceful-grounded-yoga-home-top.png';
import yogaHomeMid from '../assets/images/graceful-grounded-yoga-home-mid.png';
import podiatryHomeDesktop from '../assets/images/bass-coast-podiatry-home-desktop.jpg';
import podiatryServicesDesktop from '../assets/images/bass-coast-podiatry-services-desktop.jpg';
import podiatryHomeMobile from '../assets/images/bass-coast-podiatry-home-mobile.png';

export interface UiScreenImage {
	title: string;
	order: number;
	placeholder?: false;
	image: ImageMetadata;
	alt: string;
	/** 'contain' shows the whole image inside the tile, for tall mobile screens. Default crops from the top. */
	fit?: 'contain';
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
		title: 'Membership website home page',
		order: 5,
		image: memberWebsite,
		alt: 'Home page with the headline "It\'s better to be a member", four quick links for insurance, claims, road service and payments, and feature cards below.',
	},
	{
		title: 'Travel website home page',
		order: 6,
		image: travelHome,
		alt: 'Travel website home page with a beach photo, a flight search form with tabs for flights, stays, cruises and car hire, and a row of holiday deal cards.',
	},
	{
		title: 'Log in page',
		order: 7,
		image: logIn,
		alt: 'Log in page with one email field and a yellow Continue button in a white card, on a background of small pale icons.',
	},
	{
		title: 'Event hire home page',
		order: 8,
		image: eventHireHome,
		alt: 'Event hire website home page with a full width photo of a couple beside a long wedding table, the headline "For your special day" and a View all products button.',
	},
	{
		title: 'University website',
		order: 9,
		image: universityPage,
		alt: 'University research page with a photo of a smiling diver in a wetsuit, a section menu on the left and an introduction to the research institutes.',
	},
	{
		title: 'Yoga studio home page, top',
		order: 10,
		image: yogaHomeTop,
		alt: 'Yoga studio home page with a dark green menu bar, a large photo of a person resting on a mat in a warmly lit room, the tagline "A nurturing yoga studio in Melbourne\'s east" and a Book a class button.',
	},
	{
		title: 'Yoga studio home page, middle',
		order: 11,
		image: yogaHomeMid,
		alt: 'Yoga website section on a dark green background, with a short teacher biography, a Contact me button and overlapping photos of the teacher and the studio.',
	},
];

export const uiScreens = [...screens].sort((a, b) => a.order - b.order);

const bassCoast: UiScreen[] = [
	{
		title: 'Home page on desktop, with opening hours, the address and a map beside the headline',
		order: 1,
		image: podiatryHomeDesktop,
		alt: 'Podiatry clinic home page with the headline "Expert foot care in Wonthaggi" over a beach photo of footprints in the sand, an Our services button, and a white card with opening hours, the street address, a Call button, a Send us a message link and a small street map.',
	},
	{
		title: 'Services page on desktop, with the page heading and the first service cards',
		order: 2,
		image: podiatryServicesDesktop,
		alt: 'Our Services page with soft blue shapes behind the heading, a photo of a podiatrist at work, and cards for laser treatment for fungal nail infections and biomechanical assessment.',
	},
	{
		title: 'Home page on mobile, with the headline, a services button and the opening hours card',
		order: 3,
		image: podiatryHomeMobile,
		alt: 'Podiatry clinic home page on a phone, with a Menu button, the headline "Expert foot care in Wonthaggi", an Our services button and a card with opening hours, the address and a Call button.',
		fit: 'contain',
	},
];

export const bassCoastScreens = [...bassCoast].sort((a, b) => a.order - b.order);
