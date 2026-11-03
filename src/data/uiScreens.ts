// Finished screens shown on the UI design page, in display order.
// The gallery overlay uses the same order.
//
// To add a screen:
// 1. Put the image in src/assets/images/ and import it below.
// 2. Add an entry to `uiScreens` with real alt text and a size.
//
// Sizes, on a grid of 4 columns (2 on phones):
//   small = 1 x 1, wide = 2 x 1, tall = 1 x 2, large = 2 x 2.
// Keep the total area a multiple of 4 and the grid has no gaps. For example, add
// one large tile, two wide tiles, or four small tiles at a time.
//
// Set fit: 'contain' for images that must not be cropped, such as a phone in a device frame.
import type { ImageMetadata } from 'astro';
import raaTravelHome from '../assets/images/raa-travel-home.png';
import raaMobileHotel from '../assets/images/raa-mobile-hotel.png';
import raaFuelMap from '../assets/images/raa-fuel-map.png';
import uofaBanner from '../assets/images/uofa-banner.png';
import footwearProducts from '../assets/images/freelance-1c.png';
import footwearProduct from '../assets/images/freelance-1d.png';
import uofaMobileMenu from '../assets/images/uofa-mobile-global-menu.png';
import footwearRange from '../assets/images/freelance-1b.png';
import footwearHome from '../assets/images/freelance-1a.png';
import eventHireProducts from '../assets/images/freelance-2b.png';
import uofaSubpage from '../assets/images/uofa-subpage.png';
import yogaAbout from '../assets/images/freelance-3a.png';
import yogaSection from '../assets/images/freelance-3b.png';
import raaQtbStart from '../assets/images/raa-qtb-start.png';
import paymentPortal from '../assets/images/payment-portal.png';
import eventHireProduct from '../assets/images/freelance-2c.png';
import qtbMotor from '../assets/images/QTB-motor.png';
import raaHoliday from '../assets/images/raa-holiday.png';
import logIn from '../assets/images/log-in.png';
import raaWebsite from '../assets/images/raa-website.png';
import eventHireHome from '../assets/images/freelance-2a.png';
import podiatryHome from '../assets/images/freelance-4a.png';

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
		image: uofaBanner,
		alt: 'A university website on three screen sizes: a research page on a tablet, the home page with a degree search on a larger screen, and the same search on a phone.',
		size: 'wide',
	},
	{
		image: footwearProducts,
		alt: 'Online store products page with filter and sort controls above a grid of wool slippers and baby boots with prices.',
		size: 'small',
	},
	{
		image: footwearProduct,
		alt: 'Online store product page for baby boots, with a photo gallery, size options, a quantity field, Add to cart and Buy with Shop buttons, and a product description.',
		size: 'small',
	},
	{
		image: uofaMobileMenu,
		alt: 'University website on a phone with its navigation menu open, listing links for students, staff, alumni, study, research and more.',
		size: 'tall',
		fit: 'contain',
	},
	{
		image: footwearRange,
		alt: 'Online store page section with magazine logos, a photo of stacked wool slippers beside a short brand story, and a grid of products with prices.',
		size: 'small',
	},
	{
		image: footwearHome,
		alt: 'Online footwear store home page with a large photo of wool slippers, the headline "Experience Pure Comfort in Every Step" and a Shop Now button.',
		size: 'large',
	},
	{
		image: eventHireProducts,
		alt: 'Event hire products page with a photo of a wedding table, a category list and featured products on the left, and a grid of product categories with item counts.',
		size: 'small',
	},
	{
		image: uofaSubpage,
		alt: 'University research page with a photo of a smiling diver in a wetsuit, a section menu on the left and an introduction to the research institutes.',
		size: 'large',
	},
	{
		image: yogaAbout,
		alt: 'Yoga website section on a dark green background, with a short teacher biography, a Contact me button and overlapping photos of the teacher and the studio.',
		size: 'wide',
	},
	{
		image: yogaSection,
		alt: 'Yoga website section on a dark green background, headed "How Yoga Supports a Better Life", with a Book class button between photos of a glowing lamp and a singing bowl.',
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
		image: eventHireProduct,
		alt: 'Event hire product page for a round black tablecloth, with a photo of the item, a quantity control and an Add to your enquiry basket button below a large banner photo.',
		size: 'wide',
	},
	{
		image: qtbMotor,
		alt: 'Second step of a car insurance quote form, asking how the car is used, how far it drives each year and whether it is financed, with a progress tracker and a helper message.',
		size: 'large',
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
		image: raaWebsite,
		alt: 'Home page with the headline "It\'s better to be a member", four quick links for insurance, claims, road service and payments, and feature cards below.',
		size: 'wide',
	},
	{
		image: eventHireHome,
		alt: 'Event hire website home page with a full width photo of a couple beside a long wedding table, the headline "For your special day" and a View all products button.',
		size: 'large',
	},
	{
		image: podiatryHome,
		alt: 'Podiatry clinic home page with a photo of a foot, a Make an Appointment button, opening hours, a phone number and an introduction to the services.',
		size: 'large',
	},
];
