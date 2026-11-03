// Finished screens shown on the UI design page, in display order.
//
// To add a screen:
// 1. Put the image in src/assets/images/ and import it below.
// 2. Add an entry to `uiScreens` with real alt text and a size.
//
// Sizes, on a grid of 4 columns (2 on phones):
//   small = 1 x 1, wide = 2 x 1, tall = 1 x 2, large = 2 x 2.
// Each row of the grid should add up to full columns so no gaps are left.
//
// Set fit: 'contain' for images that must not be cropped, such as a phone in a device frame.
import type { ImageMetadata } from 'astro';
import raaTravelHome from '../assets/images/raa-travel-home.png';
import raaMobileHotel from '../assets/images/raa-mobile-hotel.png';
import raaFuelMap from '../assets/images/raa-fuel-map.png';
import raaBanner from '../assets/images/raa-banner.png';
import raaQtbStart from '../assets/images/raa-qtb-start.png';
import paymentPortal from '../assets/images/payment-portal.png';
import raaHoliday from '../assets/images/raa-holiday.png';
import logIn from '../assets/images/log-in.png';
import qtbMotor from '../assets/images/QTB-motor.png';
import raaWebsite from '../assets/images/raa-website.png';

export type UiScreenSize = 'small' | 'wide' | 'tall' | 'large';

export interface UiScreen {
	image: ImageMetadata;
	alt: string;
	size: UiScreenSize;
	fit?: 'cover' | 'contain';
}

export const uiScreens: UiScreen[] = [
	{
		image: raaTravelHome,
		alt: 'Travel website home page with a beach photo, a flight search form with tabs for flights, stays, cruises and car hire, and a row of holiday deal cards.',
		size: 'large',
	},
	{
		image: raaMobileHotel,
		alt: 'Hotel results on a phone, showing a selected hotel in Waikiki with its star rating, discounted price and a Book button, above more hotel options.',
		size: 'tall',
		fit: 'contain',
	},
	{
		image: raaFuelMap,
		alt: 'Fuel price map in a phone app, with prices pinned across Adelaide streets, an address search field and the lowest price marked in green.',
		size: 'tall',
		fit: 'contain',
	},
	{
		image: raaBanner,
		alt: 'A travel website on three screen sizes: car hire results on a tablet, the home page on a larger screen and flight details on a phone.',
		size: 'wide',
	},
	{
		image: raaQtbStart,
		alt: 'First step of a car insurance quote form, with a progress tracker, expandable legal notices and fields to enter a number plate and find the car.',
		size: 'small',
	},
	{
		image: paymentPortal,
		alt: 'Make a payment page with two choices: check due payments, or pay in full by entering a product or policy number.',
		size: 'small',
	},
	{
		image: raaHoliday,
		alt: 'Cruise holiday page with a photo gallery, trip details such as 28 nights from Adelaide, and a price panel with an Enquire now button.',
		size: 'small',
	},
	{
		image: logIn,
		alt: 'Log in page with one email field and a yellow Continue button in a white card, on a background of small pale icons.',
		size: 'small',
	},
	{
		image: qtbMotor,
		alt: 'Second step of a car insurance quote form, asking how the car is used, how far it drives each year and whether it is financed, with a progress tracker and a helper message.',
		size: 'large',
	},
	{
		image: raaWebsite,
		alt: 'Home page with the headline "It\'s better to be a member", four quick links for insurance, claims, road service and payments, and feature cards below.',
		size: 'wide',
	},
];
