// RAA Travel case study deck. All slide words live here; the layout is in
// src/components/deck/Deck.astro. Facts come from _travel-analysis.md in the
// RAA Travel case study folder. Gaps are marked [Andrew to confirm].

import type { Deck } from './types';

import travelHome from '../../assets/images/raa-travel-home.png';
import sprintMap from '../../assets/images/travel-sprint-map.jpg';
import sprintVoting from '../../assets/images/travel-sprint-voting.jpg';
import sprintStoryboards from '../../assets/images/travel-sprint-storyboards.jpg';
import aliJourney from '../../assets/images/raa-journey.png';
import earlySketches from '../../assets/case-studies/travel/early-sketches.jpg';
import mobileFlow from '../../assets/case-studies/travel/flow-mobile-annotated.jpg';
import specMegaMenu from '../../assets/case-studies/travel/spec-mega-menu.jpg';
import affinityBoard from '../../assets/case-studies/travel/legacy-affinity-board.png';
import headerAccountMenu from '../../assets/case-studies/travel/enh-header-account-menu.png';
import unlockModalEmpty from '../../assets/case-studies/travel/enh-unlock-modal-empty.png';
import unlockModalError from '../../assets/case-studies/travel/enh-unlock-modal-error.png';
import experiencesBefore from '../../assets/case-studies/travel/enh-experiences-before.png';
import experiencesConcepts from '../../assets/case-studies/travel/enh-experiences-concepts.png';
import manageBookingDesktop from '../../assets/case-studies/travel/enh-manage-booking-desktop.png';

export const travelDeck: Deck = {
	title: 'RAA Travel case study (draft) | Andrew Smith',
	description: 'Draft slide deck: leading UX on RAA Travel online search and book.',
	slides: [
		{
			layout: 'title',
			title: 'RAA Travel: online search and book',
			subtitle: 'Andrew Smith, Lead UX',
			images: [{ src: travelHome, alt: 'RAA Travel home page with search tabs for flights, stays, holidays, cruises, car hire and experiences' }],
			notes:
				"This is RAA Travel, South Australia's motoring club moving its travel business from enquiry-only web pages to online search and book. I led the UX, from discovery through launch and into the enhancements that followed.",
		},
		{
			layout: 'text',
			eyebrow: 'The brief and my role',
			title: 'From enquiry pages to online search and book',
			subtitle:
				'Flights, stays, holidays, cruises, car hire and experiences, on desktop and mobile, for members and non-members.',
			points: [
				'I led UX end to end, from discovery to post-launch enhancements',
				'I ran the U1 research engagement and facilitated the discovery sprint, with in-store interviews alongside the product manager',
				"I designed and prototyped in Axure and Figma, and extended RAA's shared design system with new travel components",
			],
			notes:
				'RAA wanted to be its members\' first choice for travel, but the website could only take enquiries. I led the UX. I ran the U1 research engagement end to end, from the brief and recruitment to every session, the synthesis and the playbacks. I facilitated the discovery design sprint and ran in-store interviews with the product manager. I did the design and prototyping in Axure and Figma, and added the travel components to the shared design system.',
		},
		{
			layout: 'timeline',
			eyebrow: 'Timeline',
			title: 'The project at a glance',
			steps: [
				{ when: '2018', what: 'Member survey of 1,104 people' },
				{ when: 'Late 2019', what: 'Discovery design sprint' },
				{ when: '2020 [Andrew to confirm]', what: 'Move to a UK travel platform vendor under COVID budget pressure' },
				{ when: 'Dec 2020 to Jan 2021', what: 'U1 research with 29 participants' },
				{ when: '15 Dec 2021', what: 'Launch, starting with hotels' },
				{ when: '2022 [Andrew to confirm]', what: 'Flights, accommodation, experiences and holidays, then car hire' },
				{ when: 'May 2022', what: 'U1 live-site study, 32 sessions' },
			],
			notes:
				"The work started with a 2018 member survey and a discovery sprint in late 2019. In 2020, under COVID budget pressure, the business moved from a planned in-house build to a UK travel platform vendor. We launched on 15 December 2021 with hotels, then turned products on one at a time as their integrations were ready. [Andrew to confirm the dates for each product.]",
		},
		{
			layout: 'text',
			box: 1,
			title: "Members didn't think of RAA for travel, and the site couldn't book anything",
			points: [
				"Ambition: become members' first choice for travel, with full online search and book",
				"Success meant more bookings, more enquiries and happier customers, but the travel analytics were duplicated and couldn't be trusted as a baseline",
				'Guardrails: keep a person in the loop, protect the trust in the RAA brand, and work within the platform and a COVID-delayed timeline',
			],
			source: 'Sources: Travel strategy; analytics review, March 2020',
			notes:
				"The strategy was clear on the ambition, and the business already had solutions in mind: online search and book, an app, web chat. My first job was to ask which customer problem each one solved. I tried to set a baseline early, but the travel analytics were duplicated across interim setups and couldn't be trusted. So we agreed success in words: bookings, enquiries, satisfaction. I was clear that better online content might lower enquiry numbers, because people still wanted to call or visit an agent.",
		},
		{
			layout: 'stats',
			box: 2,
			title: 'Start with what we know, then fill the gaps',
			stats: [
				{ value: '1,104', label: 'members in the 2018 segmentation survey' },
				{ value: '41', label: 'people in a tree test of the travel menu, 2020' },
				{ value: '15', label: 'remote usability tests of the holidays catalogue, 2020' },
				{ value: '29', label: 'U1 participants: 17 members, 12 non-members [Andrew to confirm, the report also says 18 and 11]' },
			],
			source: 'U1 research: workshops, depth interviews and prototype tests, December 2020 to January 2021',
			notes:
				"I started with what RAA already had: the member survey, the strategy and stakeholders in marketing, product and the stores. Market research tells you what people say they'll do, so I added behavioural research: in-store interviews, a tree test, remote usability testing and workshops with stakeholders and a travel agent. Then I ran the U1 study across all five member segments, with members and non-members, using workshops, depth interviews and prototype tests.",
		},
		{
			layout: 'quotes',
			box: 2,
			title: 'Three things came up in every source',
			subtitle:
				"People didn't know RAA did travel, non-members thought it was members-only, and everyone researched heavily before trusting anyone with a booking.",
			quotes: [
				{
					text: "I would be happy to give it a go because you are RAA, but if it didn't work the first time, I wouldn't come back.",
					who: 'Member, sprint prototype test',
				},
				{
					text: "I wouldn't book without enough information, because of many unanswered questions.",
					who: 'Participant, usability test',
				},
				{ text: "Scary how common it is that people don't know we do travel.", who: 'RAA travel agent' },
			],
			notes:
				"These three quotes sum it up. Trust in RAA got people through the door, but only once. People needed far more information before they'd book. And our own agents told us how few people knew RAA did travel at all.",
		},
		{
			layout: 'image',
			box: 3,
			title: 'The real journey: research, planning, booking',
			points: [
				"Mapped end to end with stakeholders and a travel agent, then brought to life with U1's personas",
				'The pain clustered at research and enquiry: no firm prices, inclusions or availability, then a wait for an agent',
				'Behind the scenes: manual payment processing, no BPAY or interest-free, enquiries lost in email',
			],
			images: [
				{
					src: aliJourney,
					alt: 'Persona journey map for Ali, a young professional, with stages from research to booking and rows for moods, touchpoints, pain points and opportunities',
					caption: 'Persona journey map. Research by U1, the external research agency.',
				},
			],
			notes:
				"We mapped the journey from the first dream through to coming home, first with stakeholders, then sense-checked with a travel agent. U1's personas brought the emotions to life: excitement, then overwhelm, then anxiety at booking, with 'prices starting from' as a low point. Behind the scenes there was manual payment processing, no BPAY or interest-free option, and enquiries that disappeared into email.",
		},
		{
			layout: 'text',
			box: 3,
			title: 'The problem in one sentence',
			subtitle:
				"Families and younger members researching online dropped out at research and enquiry, because they couldn't see enough to feel confident and couldn't act on it straight away.",
			points: [
				'The site looked like a store, but was really a portal to an agent',
				'Prices, inclusions, availability, reviews and member benefits were missing',
				"Low awareness: RAA wasn't where people started their research",
			],
			notes:
				"The root causes were linked. Our site looked like an online store, but you couldn't buy anything, and you couldn't get a firm price without asking an agent and waiting. Customers needed information to feel confident, and it wasn't there. And RAA simply wasn't on their list when they started researching.",
		},
		{
			layout: 'text',
			box: 4,
			title: 'The bet, and the riskiest assumption',
			points: [
				'How might we make it easier for customers while still supporting full choice, and bridge booking online with the rest of the trip?',
				'Desirable and usable had good evidence. Buildable on the vendor platform had the least: we designed against a platform with no documentation',
				"So I wrote the design up as a specification that could be cut back to an MVP once the platform's limits were known",
			],
			notes:
				"The sprint gave us nine 'how might we' questions and a goal: a new channel where customers dream about travel and then book with RAA, joined up with stores and phone. I sorted the assumptions into desirable, usable, buildable and viable. The riskiest, with the least evidence, was buildability on the vendor platform, so I specified the ideal design in a way that could be cut down. If I'm honest, we never wrote the bet as one measurable hypothesis. [Andrew to confirm: was a hypothesis or business case written elsewhere?]",
		},
		{
			layout: 'images',
			box: 5,
			title: 'Discovery design sprint, late 2019',
			subtitle:
				'Map, sketch, decide, prototype, test. Crazy 8s and dot voting, with a decider making the final call, and a prototype tested with members on day five.',
			images: [
				{ src: sprintMap, alt: 'Whiteboard map with the sprint goal, customer types and dot votes', caption: 'Day 1: the map and goal' },
				{ src: sprintVoting, alt: 'Whiteboard storyboard with sketches and red dot votes', caption: 'Storyboard and dot votes' },
				{ src: sprintStoryboards, alt: 'A team member reviewing hand-drawn solution sketches on the wall', caption: 'Solution sketches' },
			],
			notes:
				"Everyone sketched alone with Crazy 8s, we storyboarded, voted with dots, and the decider made the final call. That gave us a tested prototype covering entry from an email, search, results, a wishlist and handing it to an agent. Customers liked the wishlist and live chat, and four out of five searched for flights first.",
		},
		{
			layout: 'images',
			box: 5,
			title: 'From sketches to a specified design',
			subtitle:
				'Iterated through usability testing and U1 prototype sessions, then documented as flows and components for the build.',
			images: [
				{ src: earlySketches, alt: 'Four hand-drawn travel screens: category tiles, streams, results with filters and a product page', caption: 'Early sketches, 2020' },
				{ src: mobileFlow, alt: 'Mobile wireframe flow with red connectors from home to search, results, product, wishlist and enquiry', caption: 'Mobile flow, March 2021' },
				{ src: specMegaMenu, alt: 'Annotated design specification page for the holidays mega menu on desktop and mobile', caption: 'Design specification, April 2021' },
			],
			notes:
				'Over the next eighteen months I iterated that concept. Some ideas held up strongly: the central search box, the wishlist, and the contextual enquiry with call-back. Others needed fixing. I tested the information architecture with card sorting and tree testing, then produced desktop and mobile flows and a component-level specification, so it could be cut back to fit the platform.',
		},
		{
			layout: 'stats',
			box: 6,
			title: 'Tested at every stage',
			stats: [
				{ value: '5 [Andrew to confirm]', label: 'members testing the sprint prototype' },
				{ value: '41', label: 'people in the menu tree test' },
				{ value: '16', label: 'U1 prototype sessions' },
				{ value: '32', label: 'U1 sessions on the live site, May 2022' },
			],
			notes:
				'We tested at every stage: members on sprint day five, a tree test with 41 people, 15 remote usability tests, 16 prototype sessions run with U1, and a 32-session study of the live site after launch.',
		},
		{
			layout: 'image',
			box: 6,
			title: 'What testing changed',
			points: [
				"The heart icon became an 'Add to wishlist' label; the navigation became sticky; 'Log in / Sign up' replaced a staff-looking 'User' link",
				'Enquiries became contextual to the product, with response times set out',
				'Tabs stopped being used for navigation, and flexible dates came into the search',
			],
			images: [{ src: affinityBoard, alt: 'Miro affinity board of sticky notes from remote usability testing', caption: 'Affinity board from remote usability testing, 2020' }],
			notes:
				"Each round changed the design. The heart icon wasn't recognised, so it became a text label. People felt lost when the menu scrolled away, so it became sticky. A 'User' link looked like staff login, so it became Log in or Sign up. And people wanted to know when they'd hear back from an enquiry.",
		},
		{
			layout: 'stats',
			box: 6,
			title: 'After launch: easy to use, but no commercial numbers',
			subtitle:
				'The live-site study found the site easy to use, and showed where the platform hurt: sub-sites people got lost in, unclear member pricing, and losing a flight booking to buy insurance.',
			stats: [
				{ value: '70.6', label: 'System Usability Scale, overall (32 sessions, May 2022)' },
				{ value: '67.1', label: 'lowest segment score (Simple Living)' },
				{ value: '[Andrew to confirm]', label: 'bookings or conversion after launch' },
			],
			source: 'Live-site research by U1, the external research agency, May 2022',
			notes:
				"Six months after launch we ran a 32-session study of the live site. It scored 70.6 on the System Usability Scale, in the 'good' range, with Simple Living, our most price-driven segment, lowest at 67.1. I worked through the issues it found with the vendor's designer. What I can't show you is the commercial result, because the platform didn't have tracking in place at launch.",
		},
		{
			layout: 'image',
			eyebrow: 'What came next',
			title: 'Unlocking member savings',
			points: [
				'New header entry points: Manage booking, and an Account menu with Unlock member savings',
				'A member check by last name and date of birth, with loading and error states designed',
				'Prompt card options explored before choosing a brand-approved treatment [Andrew to confirm the final choice]',
			],
			images: [
				{ src: headerAccountMenu, alt: 'Travel home page header with Search, Contact us, Find an RAA shop, Manage booking and an Account menu listing Unlock member savings', caption: 'New header and Account menu' },
				{ src: unlockModalError, alt: 'Your member details modal with last name, date of birth, a loading spinner and an error message', caption: 'Member check: loading and error states' },
			],
			notes:
				"The live-site study told us member pricing wasn't clear upfront. So after launch I designed ways to unlock member savings: an Account menu entry, a member check by last name and date of birth with every state designed, and prompt cards that invite members to unlock lower prices. [Andrew to confirm what shipped and any results.]",
		},
		{
			layout: 'images',
			eyebrow: 'What came next',
			title: 'Finding experiences and managing bookings',
			subtitle:
				'The experiences search mixed places and products in one list. The concepts separate them. Manage booking gives one place to find car hire, flight and hotel bookings. [Andrew to confirm release dates and results]',
			images: [
				{ src: experiencesBefore, alt: 'Experiences search dropdown mixing locations and experience products in one list', caption: 'Before: places and products in one list' },
				{ src: experiencesConcepts, alt: 'Three concepts for the experiences dropdown that separate locations from experiences', caption: 'Concepts: places and experiences separated' },
				{ src: manageBookingDesktop, alt: 'Manage booking page with car hire and flights and stays routes', caption: 'Manage booking MVP' },
			],
			notes:
				"Two more enhancements. The experiences search mixed locations and products in one dropdown, so I looked at how Klook and others handle it and designed concepts that keep them apart. And Manage booking brought car hire, flight and hotel bookings into one place, on desktop and mobile.",
		},
		{
			layout: 'text',
			eyebrow: "What I'd do differently",
			title: 'Agree the baseline and the tracking before release',
			points: [
				"There was no reliable baseline, and tracking wasn't in place on the platform, so I couldn't show the commercial result",
				'Now tracking goes into the acceptance criteria before release, alongside a baseline agreed at kickoff',
				'I would also write the bet as one measurable hypothesis, and test the riskiest assumption, the platform, first',
			],
			notes:
				"The biggest lesson is measurement. We had no reliable baseline, and tracking wasn't in place on the platform at launch, so I can show usability but not the business result. Now I put tracking into the acceptance criteria before anything is released, and agree the baseline at kickoff. I'd also write the bet as a single hypothesis, and test the platform risk much earlier.",
		},
		{
			layout: 'title',
			title: 'Thank you',
			subtitle: 'asmithdigital@gmail.com · linkedin.com/in/andrewstephensmith',
			notes: 'Happy to go deeper on any part of this, especially the research and the post-launch work.',
		},
	],
};
