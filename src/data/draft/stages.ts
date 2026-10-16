// Content for the seven stages on the draft home page.
// Each stage: a title and two short paragraphs (55 words or fewer in total).
// Thumbnails and their crop settings live in src/config/draft.ts (draftThumbnails).

import type { StageSlug } from '../../config/draft';

/** Shared image type. */
export type Figure = {
	image: ImageMetadata;
	alt: string;
	caption?: string;
};

export type Stage = {
	slug: StageSlug;
	number: number;
	title: string;
	/** Two short paragraphs. */
	paragraphs: [string, string];
};

export const stages: Stage[] = [
	{
		slug: 'frame',
		number: 1,
		title: 'Frame the work',
		paragraphs: [
			'With the product manager and engineers, we turn a vague request into a clear question. We agree what we are trying to change and how we will know it worked.',
			'Then we pick the path: dual-track discovery, solution discovery, or existing components. Service design, content and business analysts join early.',
		],
	},
	{
		slug: 'discover',
		number: 2,
		title: 'Discover',
		paragraphs: [
			"We start with what we already know, then go direct to people: in-store interviews, moderated sessions and observation. Analytics show where people drop off. Conversations show why.",
			"On quote to buy, this showed about 38 to 40 percent of quotes were deferred because the member's identity could not be verified.",
		],
	},
	{
		slug: 'define-and-align',
		number: 3,
		title: 'Define and align',
		paragraphs: [
			'Workshops and design sprints get a room full of opinions to one decision, with product, engineering, content, service design and front-line staff in it.',
			'I co-facilitated the Travel sprint and facilitated the quote-to-buy sprint alongside my senior manager. The decision is documented in Figma, Confluence and Jira.',
		],
	},
	{
		slug: 'design-and-prototype',
		number: 4,
		title: 'Design and prototype',
		paragraphs: [
			'Flows and information architecture first. Then sketches, wireframes and prototypes at the fidelity the question needs, using the design system.',
			'Wireframes go in front of members and the staff who use the system. When a click-through cannot answer the question, I build a working prototype in code.',
		],
	},
	{
		slug: 'test',
		number: 5,
		title: 'Test',
		paragraphs: [
			'I plan, recruit, moderate and synthesise usability testing myself, including people with assistive needs as standard. I trust what people do over what they say.',
			'Product managers join the review and prioritisation, and engineers observe.',
		],
	},
	{
		slug: 'deliver',
		number: 6,
		title: 'Deliver with engineers',
		paragraphs: [
			'I stay embedded in the squad, a sprint or two ahead, and refine the backlog with the team. Handover is dev-mode specs and documented decisions.',
			'I review what shipped against the design and keep the design system and journey maps up to date.',
		],
	},
	{
		slug: 'measure-and-loop-back',
		number: 7,
		title: 'Measure and loop back',
		paragraphs: [
			'After release we benchmark effectiveness, efficiency, satisfaction and desirability with the same protocol each time.',
			'On home and contents quotes, 39 people succeeded, 1 failed, and the mean time was 4 minutes. Results feed the journey maps and the next round.',
		],
	},
];

export function getStage(slug: StageSlug) {
	const stage = stages.find((item) => item.slug === slug);
	if (!stage) throw new Error(`Unknown draft stage: ${slug}`);
	return stage;
}
