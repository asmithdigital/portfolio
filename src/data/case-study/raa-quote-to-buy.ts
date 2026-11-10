// RAA Quote to Buy case study. All words and images for /case-study/raa-quote-to-buy/ live here.
// See ./types.ts for what each block does.
import type { CaseStudyData } from './types';
import galleryWalk from '../../assets/case-study/raa-quote-to-buy/ideation-gallery-walk.jpg';
import quoteJourney from '../../assets/case-study/raa-quote-to-buy/car-insurance-quote-journey.png';
import researchBoard from '../../assets/case-study/raa-quote-to-buy/miro-research-board.png';
import personaQuinn from '../../assets/case-study/raa-quote-to-buy/persona-quick-quote-quinn.png';
import personaDonald from '../../assets/case-study/raa-quote-to-buy/persona-detailed-donald.png';
import evidenceWall from '../../assets/case-study/raa-quote-to-buy/miro-evidence-wall.png';
import solutionSketch from '../../assets/case-study/raa-quote-to-buy/solution-sketch-dot-votes.jpg';
import lightningDemos from '../../assets/case-study/raa-quote-to-buy/lightning-demos.jpg';
import winningSketch from '../../assets/case-study/raa-quote-to-buy/winning-sketch-payment-page.jpg';

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
		'This is RAA’s online insurance quote and buy journey, for car, home and landlord insurance. I was managing the UX team. The business believed payment options were stopping people buying online. I facilitated a discovery and design sprint to test that, and the evidence took us somewhere else.',
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
						'The ask came with a solution attached: add more payment options. I didn’t say no. I parked it and asked what problem it would solve and how we’d know.',
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
						'I was managing the UX team, and I facilitated the sprint. I led the discovery and synthesis: pulling five years of research into one Miro board, writing insight cards, building three personas and the business case.',
						'I interviewed stakeholders, planned and ran the ideation workshop, and set up the testing my team ran. The squad’s UX lead designed the UI, and we worked with content, service design and product throughout.',
					],
				},
				{
					type: 'list',
					items: [
						'Facilitated a two-week discovery and design sprint as UX Manager',
						'Led discovery and synthesis: five years of research in one place, insight cards, three personas and the business case',
						'Ran stakeholder interviews with product, business analysis, UX and delivery',
						'Planned and facilitated the ideation workshop: agenda, script, prep and evidence wall',
						'Set up the usability testing my team ran, and reviewed the results',
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
						'It wasn’t a textbook five-day sprint. The first week was discovery, the first diamond. Stakeholders could only give us half a day, so I compressed the ideation part of a Google Ventures sprint into four hours on the Monday of week two.',
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
						'I started with what we already knew. Five years of research, pulled into one Miro board: usability studies, benchmarks, analytics, journey maps and a third-party review. Every insight on the wall traced back to its source.',
						'I also interviewed stakeholders across product, business analysis, UX and delivery. They gave us the constraints behind the symptoms: the legacy platform, slow partner approvals and the payment gateway.',
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
						'They pointed to a legacy platform, slow partner approvals and a payment gateway problem',
					],
				},
			],
			images: [{ src: researchBoard, caption: 'Miro board: research brought together before the sprint' }],
		},
		{
			stage: { number: '02', label: 'Understand' },
			title: 'Personas built from the evidence',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'I built three personas from the research, each with a confidence level. Quinn wants a fast price and will leave if it’s slow. Patrick needs cover right now, often after hours, and hates being pushed to the phone.',
						'Donald is the engaged member who wants control over how he pays, and expects us to know he’s a member. Donald turned out to matter most.',
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
			title: 'What members told us',
			blocks: [
				{
					type: 'lead',
					text: 'Insight cards in one format: who, what they want, why, and what stops them.',
				},
				{
					type: 'text',
					paragraphs: [
						'I wrote the insights in one format: who, what they want, why, and what stops them. For example, Patrick wants to buy after hours, but he’s pushed to call during business hours.',
						'The quotes were mostly about payment. But look at the third one. That member wasn’t stopped by payment options. They were stopped because we couldn’t verify who they were. That clue mattered later.',
					],
				},
				{ type: 'quote', text: 'Why are there so many payment pages? Just put it all together.' },
				{ type: 'quote', text: 'Paying through the phone is old fashioned.' },
				{
					type: 'quote',
					text: 'I couldn’t get to the final payments page as they wanted to call me for verification.',
				},
			],
			images: [{ src: evidenceWall, caption: 'Miro: preparing the evidence wall' }],
		},
		{
			stage: { number: '04', label: 'Riskiest assumption' },
			title: 'The question we took into ideation',
			blocks: [
				{
					type: 'quote',
					text: 'How might we make insurance payments simple and flexible, so members can pay quickly, in the way and at the time that works for them?',
				},
				{
					type: 'text',
					paragraphs: [
						'Leadership voted on the how-might-we statements, and payments won. So that was our question for the workshop. But I named the riskiest assumption up front: that payments really was the main blocker.',
						'The plan was to prototype the best idea and test it against what we had, so the evidence would tell us.',
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
						'Stakeholders only had half a day, so I compressed the ideation part of a Google Ventures sprint into four hours. I sent a prep email asking everyone to bring one printed idea.',
						'We did lightning demos, Crazy Eights, three-panel solution sketches, a silent gallery walk with dot votes, then a super vote. Silent, individual work means the loudest voice doesn’t win.',
					],
				},
				{
					type: 'list',
					items: [
						'Lightning demos: everyone brought one printed idea from any industry',
						'Crazy Eights: eight quick sketches in eight minutes',
						'Three-panel solution sketches: problem, idea, outcome',
						'Gallery walk and dot votes, then a super vote',
						'Ground rules: no laptops or email, silent work with music',
					],
				},
			],
			images: [{ src: lightningDemos, caption: 'Lightning demos: patterns from other apps and services' }],
		},
		{
			stage: { number: '05', label: 'Ideas and screens' },
			title: 'The idea we chose',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'The group chose a single dynamic payment page: pick your method and frequency, and the page updates. Other ideas went into a prioritised backlog, with instalments at the top.',
						'The squad’s UX lead turned the sketches into the prototype. The final screens stayed with RAA, so the sketches are shown here.',
					],
				},
				{
					type: 'list',
					heading: 'One dynamic payment page',
					items: ['Card, bank account, PayPal, Google Pay and Apple Pay', 'Monthly or yearly, updating as you choose'],
				},
				{
					type: 'list',
					heading: 'Saved for later, in priority order',
					items: ['Pay in instalments, saved payment details, deferred payment, after-hours payment'],
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
						'We tested the sprint prototype and people liked it. But I wanted to test the assumption, not just the idea. So we ran the new design and the current design side by side, with the same tasks.',
						'Twenty people, and both scored about the same. Everyone could pay either way. So the payment page wasn’t what was stopping people.',
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
							'Everyone completed the payment. Rated 4.8 out of 5 for ease',
						],
						[
							'Payment wording, Oct 2025',
							'6 people',
							'What “pay later”, card fees and auto-renew mean to people',
						],
						[
							'New design against current design, Oct 2025',
							'20 people, 4 tests',
							'Both designs scored about the same, and everyone completed both',
						],
					],
				},
				{ type: 'note', text: 'Once people reached the payment page, they could already pay.' },
			],
		},
		{
			stage: { number: '06', label: 'Measure and learn' },
			title: 'The real blocker was earlier',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'The real blocker was earlier in the journey. Members who couldn’t be matched to their record were pushed to the phone to verify. That’s what the verification quote was telling us.',
						'The evidence moved the roadmap: logging in from within the quote is live, member matching and login improvements are in progress, and more payment options moved down the list.',
					],
				},
				{
					type: 'list',
					items: [
						'Members who couldn’t be matched to their record were pushed to the phone to verify',
						'The evidence moved the roadmap from payment options to member recognition',
					],
				},
				{
					type: 'list',
					heading: 'Where it’s at',
					items: [
						'Log in from within the quote: live',
						'Member matching improvements and more login options: in progress',
						'Expanding payment options: moved down the list',
					],
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
						'After the sprint, I built a tool so anyone in the squad, including the product manager, could click a pain point and see the research behind it, the idea it led to, and whether it’s on the roadmap.',
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
		},
		{
			stage: { label: 'Reflection' },
			title: 'What I’d do differently',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'Three things I’d do differently. Test the assumption before the workshop: a quick test of the current page would have saved us a day on the wrong problem. Map the whole journey, not just one step, because the bigger lever was earlier. And agree the measure up front, so we can show the result.',
					],
				},
				{
					type: 'cards',
					items: [
						{
							title: 'Test the assumption first',
							text: 'A quick test of the current payment page before the workshop would have shown it wasn’t the main blocker, and focused the day on the right problem.',
						},
						{
							title: 'Map the whole journey, not one step',
							text: 'The sprint zoomed in on payments. The bigger lever was earlier, when members were recognised and verified.',
						},
						{
							title: 'Agree the measure up front',
							text: 'Set the baseline and the tracking at kickoff, so the result of each change can be seen.',
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
