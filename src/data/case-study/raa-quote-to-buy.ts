// RAA Quote to Buy case study. All words and images for /case-study/raa-quote-to-buy/ live here.
// See ./types.ts for what each block does.
//
// Source: RAA-QTB-web-copy-v2.md and RAA-QTB-case-study-v2.pptx.
// Confidentiality: never add the unblurred journey explorer, Miro board screenshots,
// or any drop-off, match rate, win rate or roadmap figures to this page.
import type { CaseStudyData } from './types';
import galleryWalk from '../../assets/case-study/raa-quote-to-buy/ideation-gallery-walk.jpg';
import quoteJourney from '../../assets/case-study/raa-quote-to-buy/car-insurance-quote-journey.png';
import evidenceWall from '../../assets/case-study/raa-quote-to-buy/evidence-wall-illustration.png';
import personaQuinn from '../../assets/case-study/raa-quote-to-buy/persona-quick-quote-quinn.png';
import personaDonald from '../../assets/case-study/raa-quote-to-buy/persona-detailed-donald.png';
import insightCards from '../../assets/case-study/raa-quote-to-buy/insight-cards-illustration.png';
import solutionSketch from '../../assets/case-study/raa-quote-to-buy/solution-sketch-dot-votes.jpg';
import lightningDemos from '../../assets/case-study/raa-quote-to-buy/lightning-demos.jpg';
import winningSketch from '../../assets/case-study/raa-quote-to-buy/winning-sketch-payment-page.jpg';
import quoteStart from '../../assets/case-study/raa-quote-to-buy/quote-start-log-in-banner.png';
import journeyExplorer from '../../assets/case-study/raa-quote-to-buy/journey-explorer-blurred.png';

export const raaQuoteToBuy: CaseStudyData = {
	meta: {
		title: 'Quote to Buy case study | Andrew Smith',
		description:
			'Finding the real blocker in online insurance: a discovery and design sprint on RAA’s car, home and landlord insurance quote and buy journey.',
	},
	banner: {
		eyebrow: 'Case study',
		title: 'Quote to Buy',
		subtitle: 'Finding the real blocker in online insurance',
		role: 'UX Manager and sprint facilitator',
		dates: '2025 to 2026',
		image: galleryWalk,
		position: 'center 40%',
	},
	intro:
		'This is RAA’s online insurance quote and buy journey, for car, home and landlord insurance. I was managing the UX team and facilitated the sprint. The business believed payment options were stopping people buying online. The evidence took us somewhere else.',
	slides: [
		{
			stage: { number: '01', label: 'Kickoff' },
			title: 'The challenge',
			blocks: [
				{
					type: 'lead',
					text: 'The business believed people were dropping out at payment because we didn’t offer enough ways to pay.',
				},
				{
					type: 'text',
					paragraphs: [
						'The ask came with a solution attached: add more ways to pay. I didn’t say no. I parked it and asked what problem it would solve and how we’d know.',
						'Success was more quotes finished online, and fewer people pushed to the phone. The limits were real: a legacy platform, approvals from our insurance partner, and a payment gateway that wasn’t reliable.',
					],
				},
				{ type: 'list', heading: 'Our job', items: ['Test that belief before committing delivery time to it'] },
				{
					type: 'list',
					heading: 'What success meant',
					items: ['More quotes completed online, and fewer members pushed to call us'],
				},
				{
					type: 'list',
					heading: 'Limits',
					items: ['A legacy platform, partner approval for changes, and an unreliable payment gateway'],
				},
			],
			images: [{ src: quoteJourney, caption: 'The car insurance quote journey' }],
		},
		{
			stage: { label: 'My role' },
			title: 'What I did',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'I was managing the UX team, and I facilitated the sprint. Discovery was a team effort. I worked alongside service design, senior managers in experience design, product managers, business analysts, content, UX and subject matter experts to bring five years of research together, write the insight cards and make the business case.',
						'With the other designers, I built prototypes, ran the testing and analysed what we found. Afterwards I built a tool to keep the research visible to the squad.',
					],
				},
				{
					type: 'list',
					items: [
						'Facilitated a two-week discovery and design sprint as UX Manager',
						'Brought five years of research together with service design, senior managers, product, business analysis, content and UX, into insight cards and the business case',
						'Interviewed stakeholders and subject matter experts alongside the team',
						'Planned and facilitated the ideation workshop: agenda, script, prep and evidence wall',
						'Built prototypes and ran the testing with the other designers, then analysed and affinity mapped the results together',
						'Afterwards, built a linked journey and insight tool for the squad',
					],
				},
			],
			images: [{ src: galleryWalk, caption: 'Gallery walk during the ideation workshop' }],
		},
		{
			stage: { label: 'Overview' },
			title: 'How the two weeks ran',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'It wasn’t a textbook five-day sprint. The first week was discovery. Stakeholders could only give us half a day, so I compressed the ideation part of a Google Ventures sprint into four hours on the Monday of week two.',
						'The rest of that week went to prototyping and testing. Then in October we tested the new design against the current one.',
					],
				},
				{
					type: 'timeline',
					items: [
						{
							date: 'Before',
							title: 'Five years of research',
							text: 'Usability tests, benchmarks, analytics, a third-party UX review',
						},
						{
							date: 'Week 1',
							title: 'Discovery',
							text: 'Research into one board, stakeholder interviews, insights, how might we, leadership vote',
						},
						{
							date: 'Week 2, Monday',
							title: 'Ideation workshop',
							text: 'Four hours, seven people, one how might we',
						},
						{
							date: 'Week 2',
							title: 'Prototype and test',
							text: 'Clickable prototype tested with members and non-members',
						},
						{
							date: 'Oct 2025',
							title: 'Side-by-side test',
							text: 'New payment design against the current one, 20 people',
						},
						{ date: '2026', title: 'Journey tool and roadmap', text: 'Insights linked to the roadmap' },
					],
				},
				{
					type: 'note',
					text: 'Not a classic five-day sprint: the first week was discovery, then a compressed day of ideation, then testing.',
				},
			],
		},
		{
			stage: { number: '02', label: 'Understand' },
			title: 'Start with what we know',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'We started with what we already knew, before talking to anyone new. Working with service design, senior managers, product, business analysis, content and UX, we pulled five years of research into one board: usability studies, benchmarks, analytics, journey maps and a third-party review. Every note traced back to its source, so nothing on the wall was opinion.',
						'We also interviewed stakeholders and subject matter experts across product, business analysis, UX and delivery. They gave us the limits behind the symptoms: the legacy platform, slow partner approvals and an unreliable payment gateway.',
					],
				},
				{
					type: 'list',
					heading: 'Five years of research in one place',
					items: [
						'Usability tests, benchmarking, analytics, journey maps and a third-party UX review',
						'Every insight traced back to its source, so nothing on the wall was opinion',
					],
				},
				{
					type: 'list',
					heading: 'Stakeholder interviews',
					items: [
						'Product, business analysis, UX and delivery',
						'They pointed to a legacy platform, slow partner approvals and an unreliable payment gateway',
					],
				},
			],
			images: [
				{
					src: evidenceWall,
					caption: 'The evidence wall, recreated for this case study. The real board stays with RAA',
					alt: 'Illustrated evidence wall titled Quote to buy: what we already know, with sticky notes in five columns: usability tests, benchmarks, analytics, third-party review and stakeholders',
				},
			],
		},
		{
			stage: { number: '02', label: 'Understand' },
			title: 'Who we were designing for',
			blocks: [
				{
					type: 'lead',
					text: 'We didn’t build new personas. We used three from RAA’s existing set, built earlier across quote, My Account, claims and renewals.',
				},
				{
					type: 'text',
					paragraphs: [
						'We didn’t build new personas for this. We used three from RAA’s existing set, so the sprint stayed focused on real people. Quinn wants a fast price and will leave if it’s slow. Patrick needs cover right now, often after hours, and hates being pushed to the phone. Donald wants control over how he pays, and expects us to know he’s a member. Donald turned out to matter most.',
					],
				},
				{
					type: 'list',
					items: [
						'Quick Quote Quinn: wants a fast price, and will leave if it’s slow',
						'Panicking Patrick: needs cover now, often after hours, and doesn’t want to be pushed to the phone',
						'Detailed Donald: wants to choose when and how he pays, and expects RAA to know he’s a member',
					],
				},
			],
			images: [
				{ src: personaQuinn, alt: 'Quick Quote Quinn persona card, front and back' },
				{ src: personaDonald, alt: 'Detailed Donald persona card, front and back' },
			],
		},
		{
			stage: { number: '03', label: 'Journey and pain' },
			title: 'What past research told us',
			blocks: [
				{
					type: 'lead',
					text: 'Before any new testing, we turned the evidence wall into insight cards: who, what they want, why, and what stops them.',
				},
				{
					type: 'text',
					paragraphs: [
						'This was still discovery week, so everything here came from past research, not new testing. We wrote each insight in one format: who, what they want, why, and what stops them.',
						'Most of it was about payment. But the third quote wasn’t. That member wasn’t stopped by payment options. They were stopped because we couldn’t verify who they were. That clue mattered later.',
					],
				},
				{ type: 'quote', text: 'Why are there so many payment pages? Just put it all together.' },
				{ type: 'quote', text: 'Paying through the phone is old fashioned.' },
				{
					type: 'quote',
					text: 'I couldn’t get to the final payments page as they wanted to call me for verification.',
				},
			],
			images: [
				{
					src: insightCards,
					caption: 'Insight cards, recreated for this case study',
					alt: 'Illustrated insight cards in a wants, because, but format for Panicking Patrick and Quick Quote Quinn, and a pink card labelled The clue with the verification quote, tagged not about payment options',
				},
			],
		},
		{
			stage: { number: '04', label: 'Riskiest assumption' },
			title: 'Leadership voted, and payments won',
			blocks: [
				{
					type: 'lead',
					text: 'At the end of discovery week, leadership voted on the how might we statements. This one won, so it became the workshop’s focus:',
				},
				{
					type: 'quote',
					text: 'How might we make insurance payments simple and flexible, so members can pay quickly, in the way and at the time that works for them?',
				},
				{
					type: 'text',
					paragraphs: [
						'At the end of discovery week, leadership voted on the how might we statements, and payments won. I went with it, but I named the riskiest assumption up front: was payment really the main blocker? The plan was to prototype the best idea, then test it against what we already had, so the evidence would tell us.',
					],
				},
				{
					type: 'list',
					heading: 'Riskiest assumption',
					items: ['That payment options are the main reason people don’t buy online'],
				},
				{
					type: 'list',
					heading: 'How we’d check it',
					items: ['Prototype the best idea, then test it against the current design'],
				},
			],
			images: [{ src: solutionSketch, caption: 'Solution sketch with dot votes' }],
		},
		{
			stage: { number: '05', label: 'Ideas and screens' },
			title: 'A day and a half of ideation, in four hours',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'Stakeholders only had half a day, so I compressed the ideation days of a Google Ventures sprint into four hours. I planned the agenda and script, and sent a prep email asking everyone to bring one printed idea from any industry.',
						'On the day we did lightning demos, Crazy Eights, three-panel solution sketches, a silent gallery walk with dot votes, then a super vote. Silent, individual work means the loudest voice doesn’t win.',
					],
				},
				{
					type: 'list',
					items: [
						'Lightning demos: everyone brought one printed idea from any industry',
						'Crazy Eights: eight quick sketches in eight minutes',
						'Three-panel solution sketches: problem, idea, outcome',
						'Gallery walk and dot votes, then a super vote',
						'I planned the agenda, script and prep email, and facilitated the day: 4 hours, 7 people',
					],
				},
			],
			images: [{ src: lightningDemos, caption: 'Lightning demos: patterns from other apps and services' }],
		},
		{
			stage: { number: '05', label: 'Ideas and screens' },
			title: 'What came out of the workshop',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'The group chose one payment page where you choose how and how often you pay, and the page updates. I wrote up the outcome: the chosen idea, plus a backlog of eight more ideas in priority order, with instalments at the top.',
						'I worked with the other designers to turn the sketches into a clickable prototype. The final screens stayed with RAA, so I’m showing the winning sketch.',
					],
				},
				{
					type: 'list',
					heading: 'One dynamic payment page',
					items: [
						'Choose how and how often you pay, and the page updates',
						'I worked with the other designers to turn the sketches into a clickable prototype',
					],
				},
				{
					type: 'list',
					heading: 'My part',
					items: ['Wrote up the outcome: the chosen idea, plus a backlog of eight more ideas in priority order'],
				},
			],
			images: [{ src: winningSketch, caption: 'The winning sketch: one page for method and frequency' }],
		},
		{
			stage: { number: '06', label: 'Test' },
			title: 'Testing the idea, then testing the assumption',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'With the other designers, I planned and ran each round, then we analysed the sessions and affinity mapped the findings together. Each round answered a different question. First, does the idea work? People liked it and everyone paid. Second, do people understand our payment words? Half expected a discount for paying yearly, which we don’t offer.',
						'The third round tested the assumption, not the idea: the new design against the current one, with the same tasks. The result was the same both ways. Everyone could pay, so the payment page wasn’t what was stopping people.',
					],
				},
				{
					type: 'table',
					caption: 'Testing rounds and what we learned',
					columns: ['Round', 'Who', 'What we learned'],
					rows: [
						[
							'Sprint prototype, Sep 2025',
							'6 people',
							'Can people pay with the new design? Everyone did, and rated it 4 or 5 out of 5 for ease',
						],
						[
							'Payment wording, Oct 2025',
							'6 people',
							'Do people understand the words? We checked “pay later”, monthly versus yearly and auto-renew. Half expected a discount for paying yearly',
						],
						[
							'New design against current design, Oct 2025',
							'20 people, 5 per test',
							'Is the new design better than today’s? Two tests on each. Everyone paid in both, and ease scores were about the same',
						],
					],
				},
				{
					type: 'note',
					text: 'The current payment page already worked. Payment options weren’t what stopped people buying.',
				},
			],
		},
		{
			stage: { number: '07', label: 'Measure and learn' },
			title: 'The real blocker was earlier',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'The real blocker was earlier in the journey. Members we couldn’t match to their record were pushed to the phone to verify, which is what the verification quote was telling us.',
						'It was a known technical problem, but stakeholders wanted payments as a quick win. The process tested their idea properly and gave us the evidence to point to the bigger lever. Logging in from within the quote is now live.',
					],
				},
				{
					type: 'list',
					items: [
						'Members who couldn’t be matched to their record were pushed to the phone to verify',
						'It was a known technical problem. The testing gave us the evidence to put it ahead of more payment options',
					],
				},
				{
					type: 'list',
					heading: 'Where it’s at',
					items: [
						'Log in from within the quote is now live',
						'Better member recognition became the priority, ahead of more payment options',
					],
				},
			],
			images: [
				{
					src: quoteStart,
					caption: 'Live today: members can log in to pre-fill the quote (raa.com.au)',
					alt: 'Start your quote page with a banner reading Already have My Account? Log in to pre-fill your details',
				},
			],
		},
		{
			stage: { label: 'Beyond the sprint' },
			title: 'Making research visible to the squad',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'After the sprint, I built a tool so anyone in the squad, including the product manager, could click a pain point and see the research behind it, the idea it led to, and where it sits.',
						'I used AI to build it, with one strict rule: never invent a number, quote or source. Then I wrote a playbook so the other UX leads could do the same for their products.',
					],
				},
				{
					type: 'list',
					items: [
						'Built a linked journey and insight tool with AI help',
						'Every pain point links to the research behind it, the idea it led to, the metric and its roadmap status',
						'One rule: never invent a number, quote or source',
						'Wrote a playbook so other UX leads could build their own',
					],
				},
			],
			images: [
				{
					src: journeyExplorer,
					caption: 'The QTB Journey Explorer I built. Business figures and roadmap detail blurred',
					alt: 'QTB Journey Explorer showing journey phases and steps, an emotion line from hopeful to frustrated, and blurred metrics and solution cards',
				},
			],
		},
		{
			stage: { label: 'Reflection' },
			title: 'What I’d do differently',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'Three things I’d do differently. Testing the stakeholders’ idea was right, but I’d also test the real problem in the same round, because past research already pointed to it. I’d map the whole journey before choosing a focus, not just one step. And I’d measure outcomes, not just usability: agree the number up front and check it after release.',
					],
				},
				{
					type: 'cards',
					items: [
						{
							title: 'Test the real problem alongside the idea',
							text: 'Parking the payments idea and testing it was right. But past research already hinted at verification, so I’d test the whole quote journey as a member in the same round.',
						},
						{
							title: 'Map the whole journey before choosing a focus',
							text: 'The sprint zoomed in on one step. The journey map I built afterwards showed the bigger lever was earlier, at member recognition.',
						},
						{
							title: 'Measure outcomes, not just usability',
							text: 'We had analytics, but judged the design on usability scores. I’d agree the outcome up front, like quotes finished online and calls to verify, and check it after release.',
						},
					],
				},
			],
		},
	],
	related: {
		label: 'Other case study',
		title: 'RAA Travel: designing online search and book',
		href: '/case-study/raa-travel/',
	},
};
