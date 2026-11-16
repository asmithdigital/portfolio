// University of Adelaide case study. All words and images for
// /case-study/university-of-adelaide/ live here. See ./types.ts for what each block does.
//
// This is a career showcase, not a staged project, so sections have no numbers and
// only "The first design system" has subheadings. The banner is the sub-page
// screenshot cropped to its header and hero photo, so no page text sits behind the
// title. The other images are shared with other pages, so they stay in
// src/assets/images/. Do not use uofa-banner.png here: it is the device mock-up made
// for the home page tile.
import type { CaseStudyData } from './types';
import bannerImage from '../../assets/case-study/university-of-adelaide/website-research-page-hero.png';
import subPage from '../../assets/images/uofa-subpage.png';
import mobileMenu from '../../assets/images/uofa-mobile-global-menu.png';
import styleGuide from '../../assets/images/uofa-styleguide.png';

export const universityOfAdelaide: CaseStudyData = {
	meta: {
		title: 'University of Adelaide case study | Andrew Smith',
		description:
			'Web design, UX and the university’s first design system: five years at the University of Adelaide, from web designer and front-end developer to lead designer on the website rebuild.',
	},
	banner: {
		eyebrow: 'Case study',
		title: 'University of Adelaide',
		subtitle: 'Web design, UX and the university’s first design system',
		role: 'Web designer, front-end developer and lead UX designer',
		dates: '2014 to 2019',
		image: bannerImage,
	},
	intro:
		'I spent five years at the University of Adelaide. I started as a web designer and front-end developer, became the lead designer on the website rebuild, and introduced UX to the university along the way. This page covers the work across those years, with the website rebuild in the middle.',
	slides: [
		{
			stage: { label: 'Designing and building the web' },
			blocks: [
				{
					type: 'list',
					items: [
						'Designed and coded pages for the university website in HTML, CSS and JavaScript',
						'Built single-page campaign websites with the marketing team, for student recruitment, research and other campaigns',
						'Kept the website consistent, looking after our design files and patterns and running our own accessibility audits',
						'Joined the stand-ups of several IT project teams as the design advocate, helping with QA and with building internal and student-facing tools the university’s way',
					],
				},
			],
		},
		{
			stage: { label: 'The website rebuild' },
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'The university’s website ran on a custom-built content management system. We rebuilt it on Drupal.',
					],
				},
				{
					type: 'list',
					items: [
						'Agile coaches set up a co-located Scrum team: developers, product managers and content writers, with other designers joining when I needed them',
						'I was the lead designer and front-end developer for the project, which ran over several years',
					],
				},
			],
		},
		{
			stage: { label: 'Bringing UX into the university' },
			blocks: [
				{
					type: 'list',
					items: [
						'Introduced UX to the team and the wider university, and presented the process',
						'Ran research with students and staff: student interviews, pop-up interviews with students, and usability testing',
						'Used it on features like the degree finder, to help students find the right degree',
					],
				},
			],
		},
		{
			stage: { label: 'The first design system' },
			title: 'The problem',
			blocks: [
				{
					type: 'text',
					paragraphs: [
						'Dozens of small teams across IT and marketing were building university websites and tools. Some were a project manager and one developer, others were full teams. To match the university’s look, they viewed the source of our website and copied the colours and styles as best they could. When they sent their work to me to check, I’d send back a long list of fixes, most of them for things they’d had to make up themselves.',
					],
				},
				{
					type: 'note',
					text: 'Consistency isn’t just looks. If the colours, spacing or behaviour change from page to page, students start to lose trust.',
				},
			],
		},
		{
			stage: { label: 'The first design system' },
			title: 'What I built',
			blocks: [
				{
					type: 'list',
					items: [
						'The university’s first design system, built as part of the rebuild: front-end code, designs and guidance in one place, with accessibility built in',
						'Teams could build their own CSS and JavaScript files with only the components and plugins they needed, loaded from a CDN, or include everything',
						'Guidance on performance, like putting key CSS straight into the page so it loaded fast',
						'The Drupal build ran in Docker containers, so other teams could spin up their own environment and build their apps on the same code, with the design system as the front end',
					],
				},
			],
			images: [
				{
					src: styleGuide,
					caption: 'The style guide, with documented components and code examples',
					alt: 'University of Adelaide style guide page documenting the audio player and playlist components, with HTML code examples',
				},
			],
		},
		{
			stage: { label: 'The first design system' },
			title: 'What changed',
			blocks: [
				{
					type: 'list',
					items: [
						'Teams across IT and marketing adopted it for the website and for their own products',
						'Instead of long lists of fixes, I only needed to give small tweaks at the end, which cut rework a lot',
					],
				},
			],
		},
		{
			stage: { label: 'What launched' },
			blocks: [
				{ type: 'text', paragraphs: ['The new website on Drupal, built on the design system.'] },
			],
			images: [
				{
					src: subPage,
					caption: 'A research sub-page, with the section menu on the left',
					alt: 'University of Adelaide Research Institutes page, with a photo of a smiling diver, a section menu on the left and an introduction to the research institutes',
				},
				{
					src: mobileMenu,
					caption: 'The mobile menu',
					alt: 'University of Adelaide website on a phone with the menu open, listing Current Students, Staff, Alumni, Quicklinks, Study at Adelaide, Research and Innovation, Engage and About the Uni',
				},
			],
		},
		{
			stage: { label: 'After the rebuild' },
			blocks: [
				{
					type: 'list',
					items: [
						'When the project finished, a restructure moved me into creative services',
						'I kept designing for the website: new pages, improvements, support and maintenance, keeping new work consistent with the design system',
					],
				},
			],
		},
		{
			stage: { label: 'What I took from it' },
			blocks: [
				{
					type: 'list',
					items: [
						'It’s where I moved from building websites to designing them with users',
						'Working in a co-located Agile team showed me how designers, developers and content people make decisions together',
						'This is where design systems started for me, and I took that thinking into RAA',
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
