// RAA Travel case study. All words and images for /case-study/raa-travel/ live here.
// See ./types.ts for what each block does.
import type { CaseStudyData } from './types';
import bannerDevices from '../../assets/images/raa-banner.png';
import sprintDay1 from '../../assets/case-study/raa-travel/design-sprint-day-1-goal.jpg';
import uxPlanTimeline from '../../assets/case-study/raa-travel/ux-plan-timeline-2020.png';
import sprintMap from '../../assets/case-study/raa-travel/sprint-map-dreaming-to-booking.jpg';
import inStoreInterview from '../../assets/case-study/raa-travel/in-store-member-interview.png';
import workshopWall from '../../assets/case-study/raa-travel/workshop-wall-customer-tasks.jpg';
import u1Persona from '../../assets/case-study/raa-travel/u1-persona.png';
import u1JourneyMap from '../../assets/case-study/raa-travel/u1-persona-journey-map.png';
import sprintVoting from '../../assets/case-study/raa-travel/sprint-voting-on-ideas.jpg';
import storyboardWall from '../../assets/case-study/raa-travel/storyboard-wall-dot-votes.jpg';
import prototypeHome from '../../assets/case-study/raa-travel/sprint-prototype-home.png';
import prototypeResults from '../../assets/case-study/raa-travel/sprint-prototype-results-filters.png';
import prototypeV09 from '../../assets/case-study/raa-travel/prototype-v0-9.png';
import megaMenuSpec from '../../assets/case-study/raa-travel/mega-menu-spec.png';
import wishlistFlow from '../../assets/case-study/raa-travel/wishlist-enquiry-flow.png';
import mobileFlow from '../../assets/case-study/raa-travel/mobile-flow-annotated.png';
import liveHolidayPage from '../../assets/case-study/raa-travel/live-site-holiday-page.png';
import liveMobileResults from '../../assets/case-study/raa-travel/live-site-mobile-results.png';

export const raaTravel: CaseStudyData = {
	meta: {
		title: 'RAA Travel case study | Andrew Smith',
		description:
			'Designing online search and book for RAA Travel: leading the UX from the first design sprint in 2019 through to launch and live-site research in 2022.',
	},
	banner: {
		eyebrow: 'Case study',
		title: 'RAA Travel',
		subtitle: 'Designing online search and book',
		role: 'Lead UX',
		dates: '2019 to 2022',
		image: bannerDevices,
		alt: 'The RAA Travel website on a tablet, a laptop and a phone',
		layout: 'split',
		// Matches the image's own background, so the devices sit on one continuous colour.
		background: '#86b9e4',
		foreground: '#0d1014',
	},
	intro:
		'This is RAA Travel, where I led the UX for the move to online search and book, from the first design sprint in 2019 through to launch and the live-site research in 2022. This page follows the way I run any project: agree the problem, understand the people, explore and test ideas, deliver, then measure and learn. I’m also upfront about what I’d do differently.',
	slides: [
		{
			stage: { number: '01', label: 'Kickoff' },
			title: 'The challenge',
			blocks: [
				{
					type: 'quote',
					text: 'We want to create a new channel for customers to dream about travel and then book with RAA.',
				},
				{
					type: 'text',
					paragraphs: [
						'The goal came out of day one of the design sprint I facilitated in November 2019. At the time, travel was sold in store and over the phone. The website had a holidays page, but you couldn’t book anything on it.',
						'Success was simple: more people researching and booking travel online with RAA. The guardrails were trust, because members trust RAA, and our agents, because we didn’t want online to compete with them. The limits were the legacy CMS and, later, a vendor platform.',
					],
				},
				{
					type: 'list',
					heading: 'Where we started',
					items: ['Travel was sold in store and by phone. The website showed holidays but couldn’t book anything'],
				},
				{ type: 'list', heading: 'What success meant', items: ['More travel researched and booked online with RAA'] },
				{
					type: 'list',
					heading: 'Guardrails and limits',
					items: [
						'Keep member trust. Online works with our travel agents, not against them. Legacy CMS, then a vendor platform',
					],
				},
			],
			images: [{ src: sprintDay1, caption: 'Design sprint, day 1: agreeing the goal (Nov 2019)' }],
		},
		{
			stage: { label: 'My role' },
			title: 'What I did',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'My role was lead UX. I facilitated the sprint, interviewed members in store, and ran workshops with stakeholders and with our travel agents.',
						'I led the discovery and testing, and I ran the research agency engagement end to end: getting the budget, writing the brief and discussion guides, organising recruitment, sitting in every session and running the playbacks. I designed the prototype in Axure and wrote the spec for the vendor. After launch I reviewed each release and set up research on the live site.',
					],
				},
				{
					type: 'list',
					items: [
						'Facilitated a five-day design sprint with business, marketing, engineering and design',
						'Interviewed members in store, and ran workshops with stakeholders and our travel agents',
						'Led discovery and testing: analytics and content review, IA tests and usability tests',
						'Briefed and ran the research engagement with U1, an external research agency',
						'Designed the Axure prototype to version 0.9, and wrote the UX spec for the platform',
						'After launch, reviewed each release and ran research on the live site',
					],
				},
			],
			images: [{ src: uxPlanTimeline, caption: 'My UX plan and timeline for the legacy web phase (2020)' }],
		},
		{
			stage: { label: 'Overview' },
			title: 'How the work ran',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'Here’s the shape of it. The sprint ran in late 2019, then discovery through 2020, slowed by COVID. The research agency round ran over summer 2020-21, followed by IA testing and a spec in early 2021, launch in December 2021 with hotels first, and a live-site study in May 2022.',
						'The move to a vendor platform was a business decision during COVID: we could have built it in house, but the business chose to buy rather than build.',
					],
				},
				{
					type: 'timeline',
					items: [
						{
							date: 'Nov to Dec 2019',
							title: 'Design sprint',
							text: '5 days. In-store interviews. Prototype tested with members',
						},
						{
							date: '2020',
							title: 'Discovery',
							text: 'Stakeholder and travel agent workshops, analytics, content and IA, usability tests. COVID pause',
						},
						{
							date: 'Dec 2020 to Jan 2021',
							title: 'U1 research',
							text: '29 people: workshops, interviews and prototype tests',
						},
						{
							date: 'Mar to Apr 2021',
							title: 'IA and spec',
							text: 'Card sort and tree test, playback, UX design spec',
						},
						{ date: 'Dec 2021', title: 'Launch', text: 'Hotels first, then flights and car hire in 2022' },
						{ date: 'May 2022', title: 'Live-site study', text: '32 sessions. Recommendations into the backlog' },
					],
				},
				{
					type: 'note',
					text: 'The business chose a vendor platform in 2020 as COVID tightened budgets. Building in house was possible, but too costly at the time.',
				},
			],
		},
		{
			stage: { number: '01', label: 'Kickoff' },
			title: 'Questions before answers',
			blocks: [
				{
					type: 'lead',
					text: 'On day 1 the team wrote 19 questions we needed answered before anyone designed a screen.',
				},
				{
					type: 'text',
					paragraphs: [
						'Before anyone sketched, we wrote down the questions we needed to answer. There were 19. These four were the big ones. Writing them down meant that at the end of the week we could check which ones we’d actually answered.',
					],
				},
				{
					type: 'list',
					items: [
						'How do we know customers even want this?',
						'How do we transfer trust from an agent to RAA?',
						'What’s the real customer journey?',
						'Does this need to work as a stand-alone website?',
					],
				},
			],
			images: [{ src: sprintMap, caption: 'Sprint map: the journey from dreaming to booking' }],
		},
		{
			stage: { number: '02', label: 'Understand' },
			title: 'Start with what we know',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'I always start with what’s already known: stakeholder interviews across the business, the strategy and segmentation, and analytics, which turned out to be unreliable.',
						'Then during the sprint I interviewed members as they walked into our Mile End store, with the product manager. They Google first, but like talking to a person. They want a rough price early. And they’d book online, as long as it’s simple.',
					],
				},
				{
					type: 'list',
					heading: 'What we had',
					items: [
						'Stakeholder interviews: marketing, travel product, executive, customer-facing staff and technology',
						'Travel strategy and member segmentation',
						'Analytics, which we found we couldn’t rely on',
					],
				},
				{
					type: 'list',
					heading: 'Talking to members in store',
					items: ['During the sprint I interviewed members as they walked into our Mile End store, with the product manager'],
				},
				{ type: 'quote', text: 'Happy to book online as long as it’s not too many screens' },
			],
			images: [{ src: inStoreInterview, caption: 'In-store member interviews, Mile End (Dec 2019)' }],
		},
		{
			stage: { number: '02', label: 'Understand' },
			title: 'Listening to the frontline',
			blocks: [
				{
					type: 'lead',
					text: 'I ran workshops with project stakeholders, then with our travel agents, to test our assumptions.',
				},
				{
					type: 'text',
					paragraphs: [
						'I ran two workshops. First with project and product stakeholders, using a value proposition canvas to capture what we believed about customers. Then with our travel agents, the frontline staff, to check those beliefs and the journey map from past research.',
						'The agents were blunt: people don’t know we do travel, and they want a ballpark price early. Their top-voted customer job was being able to plan, book and manage online.',
					],
				},
				{
					type: 'list',
					items: [
						'Value proposition canvas: customer jobs, pains and gains',
						'Journey map from past research, checked and added to by the agents',
					],
				},
				{
					type: 'quote',
					text: ['Scary how common it is that people don’t know we do travel.', 'They want that ballpark.'],
					cite: 'Travel agents, 2020 workshop',
				},
			],
			images: [{ src: workshopWall, caption: 'Workshop wall: customer tasks with dot votes' }],
		},
		{
			stage: { number: '02', label: 'Understand' },
			title: 'Filling the gap with research',
			blocks: [
				{
					type: 'lead',
					text: 'I ran the engagement with U1, an external research agency, from start to finish.',
				},
				{
					type: 'text',
					paragraphs: [
						'To fill the gap I brought in U1. I got the budget approved, wrote the brief and the discussion guides, handled recruitment with our recruitment team, and sat in on every session.',
						'In all, 29 people across five segments, members and non-members, took part through workshops, depth interviews and prototype testing. Then I synthesised with the agency and ran the playbacks.',
					],
				},
				{
					type: 'stats',
					items: [
						{ value: '29', label: 'participants' },
						{ value: '17 / 12', label: 'members / non-members' },
						{ value: '5', label: 'customer segments' },
					],
				},
				{
					type: 'list',
					items: [
						'Secured the budget and wrote the brief',
						'Discussion guides, recruitment and every session',
						'Synthesis with the agency, then playbacks to stakeholders',
					],
				},
			],
			images: [{ src: u1Persona, caption: 'Persona from the U1 research (credit U1)' }],
		},
		{
			stage: { number: '03', label: 'Journey and pain' },
			title: 'Three things came up in every source',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'Across the sprint test, the workshops, the legacy web testing and the agency research, the same three things kept coming up. People didn’t know RAA did travel. Nobody would book without enough information to feel confident. And people wanted both: research online, but a real person when it matters.',
						'The quote sums up the stakes: trust gets them to try us once, so it has to work first time.',
					],
				},
				{
					type: 'points',
					items: [
						{ title: 'People didn’t know RAA did travel', text: 'Non-members assumed it was for members only' },
						{
							title: 'Nobody books without enough information',
							text: 'Price, what’s included and reviews build the confidence to book',
						},
						{
							title: 'They want online and a person',
							text: 'Research online, but talk to an agent when it matters',
						},
					],
				},
				{
					type: 'quote',
					text: 'I’d be happy to give it a go because you are RAA, but if it didn’t work the first time, I wouldn’t come back.',
				},
			],
			images: [{ src: u1JourneyMap, caption: 'Persona journey map from the U1 research (credit U1)' }],
		},
		{
			stage: { number: '04', label: 'Riskiest assumption' },
			title: 'What we bet on, and what to test first',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'From the questions we wrote how-might-we statements and voted. The riskiest assumptions were whether members would book online with us at all, and whether they could use it, so that’s what we tested first, on day five.',
						'Later the riskiest assumption became whether the vendor platform could deliver what we designed, and that turned out to be the hardest one.',
					],
				},
				{
					type: 'list',
					heading: 'How might we…',
					items: [
						'Help people find information without needing to call',
						'Give an easy choice: walk in, talk or click',
						'Let people lock in flights online first',
					],
				},
				{
					type: 'list',
					heading: 'Riskiest assumptions',
					items: [
						'Desirable: will members book travel online with RAA?',
						'Usable: can they find and book what they want?',
						'Later, buildable: can the platform deliver the design?',
					],
				},
			],
			images: [{ src: sprintVoting, caption: 'Sprint: voting on ideas' }],
		},
		{
			stage: { number: '05', label: 'Ideas and screens' },
			title: 'From sketches to a prototype in a week',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'The sprint followed the standard week: map, sketch, decide, prototype, test. I built the prototype in Axure: a central search, results with filters, a wishlist, an enquiry path and live chat. On the Friday we tested it with five members.',
					],
				},
				{
					type: 'list',
					items: [
						'Map, sketch, decide, storyboard and prototype',
						'Axure prototype: central search, results and filters, wishlist, enquiry and live chat',
						'Tested with five members on day five',
					],
				},
			],
			images: [
				{ src: storyboardWall, caption: 'Storyboard wall with dot votes' },
				{ src: prototypeHome, caption: 'Sprint prototype: home' },
				{ src: prototypeResults, caption: 'Sprint prototype: results and filters' },
			],
		},
		{
			stage: { number: '06', label: 'Test' },
			title: 'Test, learn, change, test again',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'I don’t test once. Every round answered a different question. The sprint test told us people search flights first and want flexible dates. The legacy web test, with 15 people online because of COVID, told us the site looked like a shop you couldn’t buy from.',
						'The tree tests sorted out the menu and labels. And the agency’s prototype testing confirmed the design felt familiar and simple, with specific fixes.',
					],
				},
				{
					type: 'table',
					caption: 'Testing rounds and what we learned',
					columns: ['Round', 'Who', 'What we learned'],
					rows: [
						[
							'Sprint test, Dec 2019',
							'5 members',
							'Most searched flights first. Wanted flexible dates. Didn’t know RAA did travel',
						],
						[
							'Legacy web, 2020',
							'15 people, online',
							'“Looks like an online store, but you can’t book much.” Start the search simply',
						],
						['Tree test, 2020', '41 people', 'Where labels and menu groups failed'],
						['IA card sort and tree test, Mar 2021', 'Online panel', 'Menu and categories for the new site'],
						[
							'U1 prototype tests, 2021',
							'16 interviews',
							'“Familiar and uncomplicated.” Sticky menu, clearer wishlist, enquiry in context',
						],
					],
				},
			],
		},
		{
			stage: { number: '05', label: 'Ideas and screens' },
			title: 'What changed because of testing',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'These are the design changes that came straight from testing. Start simple with one central search, then filter. Give flights their own path. Make the purpose and member benefits obvious.',
						'The heart icon wasn’t understood, so the wishlist got a text button. Enquiries happen in the context of the product, with an honest response time. And the menu came from the tree tests, not opinion.',
					],
				},
				{
					type: 'list',
					items: [
						'Central search first, extra filters after',
						'Flights given their own path, because people start there',
						'Clear site purpose, member benefits and how to join',
						'Wishlist with save and share, using a text button, not just a heart',
						'Enquiry from the product page, with clear response times',
						'Mega menu built from the tree test results',
					],
				},
			],
			images: [
				{ src: prototypeV09, caption: 'Prototype v0.9 (2021)' },
				{ src: megaMenuSpec, caption: 'Mega menu spec' },
				{ src: wishlistFlow, caption: 'Wishlist and enquiry flow' },
			],
		},
		{
			stage: { number: '05', label: 'Deliver' },
			title: 'Designing for a platform we didn’t control',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'Then the hard part. The vendor gave us no documentation, so I worked from their demo sites. I wrote a UX spec to bridge the ideal design and what the platform could do, mapped the desktop and mobile flows up to the vendor’s booking flow, and worked with content on the templates.',
						'The honest bit: the vendor treated designs as guidelines, and we couldn’t touch the booking flow. Hotels launched on 15 December 2021, then flights after some integration defects, then car hire.',
					],
				},
				{
					type: 'list',
					items: [
						'No documentation from the vendor, so I analysed their demo sites',
						'Wrote a UX spec to take the design from the ideal (v0.9) to what the platform could do',
						'Mapped desktop and mobile flows up to the vendor’s booking flow',
						'Worked with the content team on CMS templates',
					],
				},
				{
					type: 'list',
					heading: 'The reality',
					items: [
						'Designs were treated as guidelines, and the booking flow was off limits. Hotels launched on 15 December 2021, then flights and car hire',
					],
				},
			],
			images: [{ src: mobileFlow, caption: 'Mobile flow with annotations, handing off to the booking flow (2021)' }],
		},
		{
			stage: { number: '06', label: 'Measure and learn' },
			title: 'Testing the live site',
			blocks: [
				{ type: 'lead', text: 'Five months after launch I brought U1 back to test the live site.' },
				{
					type: 'stats',
					items: [
						{
							value: '70.6',
							label: 'System Usability Scale score, 32 sessions, May 2022. Above the industry average of about 68',
						},
					],
				},
				{
					type: 'text',
					paragraphs: [
						'Once it was live, I brought the agency back to test the real thing. 32 sessions and a usability score of 70.6, a bit above the industry average. It showed the site was easy to use overall, and exactly where the platform was hurting the experience.',
						'Those recommendations fed the backlog, and I kept working on Travel features after I moved into managing the team.',
					],
				},
				{
					type: 'list',
					items: [
						'Easy to use overall, with clear problems where the platform got in the way',
						'Recommendations went into the backlog for the next releases',
						'I kept improving Travel after moving into the UX manager role',
					],
				},
			],
			images: [
				{ src: liveHolidayPage, caption: 'Live site: holiday page' },
				{ src: liveMobileResults, caption: 'Mobile results' },
			],
		},
		{
			stage: { label: 'Reflection' },
			title: 'What I’d do differently',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'Three things I’d do differently. First, the number. I put an analytics plan and a UX baseline in my 2020 plan, but tracking sat with the business and was never set up on the platform, so I can’t show you a before and after. That’s why I now agree the baseline at kickoff and put tracking in the acceptance criteria.',
						'Second, get the platform constraints before designing the ideal. Third, set up the loop from live insights to the backlog before go-live.',
					],
				},
				{
					type: 'cards',
					items: [
						{
							title: 'Agree the number at kickoff',
							text: 'I planned an analytics plan and a UX baseline in 2020, but tracking sat with the business and wasn’t set up on the platform, so we couldn’t show the result. Now I agree the baseline at kickoff and put tracking in the acceptance criteria.',
						},
						{
							title: 'Get the platform constraints first',
							text: 'We designed the ideal, then cut it back. Next time I’d push for the platform gap analysis before the detailed design.',
						},
						{
							title: 'Close the loop after launch',
							text: 'At handover there was no process for live insights to reach the backlog. I’d set that up before go-live.',
						},
					],
				},
			],
		},
	],
	related: {
		label: 'Other case study',
		title: 'Quote to Buy: finding the real blocker in online insurance',
		href: '/case-study/raa-quote-to-buy/',
	},
};
