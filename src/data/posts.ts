// Blog posts, in display order. Used by the home page, the process page and the
// previous and next links at the end of each post. Each post's body lives in
// src/pages/blog/<slug>.astro.

import type { ImageMetadata } from 'astro';
import journeyMap1 from '../assets/images/journey-map-1.png';
import orchestrationDiagram from '../assets/images/claude-orchestration-layer-diagram.png';
import uxBenchmarking from '../assets/images/ux-benchmarking.png';
import travelSprintAffinity from '../assets/images/travel-sprint-affinity.jpg';

export type Post = {
	slug: string;
	title: string;
	/** One line under the H1. Also the meta description and the card intro. */
	standfirst: string;
	image: ImageMetadata;
	alt: string;
};

export const posts: Post[] = [
	{
		slug: 'making-the-experience-visible',
		title: 'Making the experience visible',
		standfirst:
			'Journey maps and design systems do the same job: they turn what a team knows into something everyone can see and use.',
		image: journeyMap1,
		alt: 'Journey explorer showing phases, drop-offs, an emotion curve and prioritised solutions',
	},
	{
		slug: 'ai-in-the-design-process',
		title: 'AI in the design process',
		standfirst: 'Using AI to take on the slow work, so more of our time goes into the judgement calls that matter.',
		image: orchestrationDiagram,
		alt: 'Diagram of an AI layer connecting the design system, journey maps, research and standards',
	},
	{
		slug: 'measuring-experience-quality',
		title: 'Measuring experience quality over time',
		standfirst:
			'One usability study tells you how things are today. Benchmarking tells you whether they are getting better.',
		image: uxBenchmarking,
		alt: 'UX benchmarking dashboard showing effectiveness, efficiency, satisfaction and desirability',
	},
	{
		slug: 'design-sprints',
		title: 'Design sprints, and when to use one',
		standfirst: 'What a design sprint is, how the five days work, and what I learned facilitating two of them.',
		image: travelSprintAffinity,
		alt: 'Team affinity mapping with sticky notes on a large window during a design sprint',
	},
];

export function getPost(slug: string) {
	const post = posts.find((item) => item.slug === slug);
	if (!post) throw new Error(`Unknown post: ${slug}`);
	return post;
}
