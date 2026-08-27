import type { ImageMetadata } from 'astro';
import wayOfWorkingImage from '../assets/images/way-of-working-1.png';
import myAccountImage from '../assets/images/my-account.png';
import journeyMap1Image from '../assets/images/journey-map-1.png';
import designSystem1Image from '../assets/images/design-system-1.png';
import uxBenchmarkingImage from '../assets/images/ux-benchmarking.png';
import miroIdeationCritiqueImage from '../assets/images/miro-ideation-critique-example.png';
import freelance1aImage from '../assets/images/freelance-1a.png';

export type Project = {
  name: string;
  title: string;
  description: string;
  background: 'lime' | 'cyan' | 'lavender' | 'mint';
  variant: 'desktop' | 'split' | 'mobile' | 'board';
  href: string;
  image: ImageMetadata;
  alt: string;
  imageClass: string;
};

export const workPageSize = 10;

export const projects: Project[] = [
  {
    name: 'UX Process',
    title: 'How a piece of work moves through the UX team',
    description: 'Discovery, delivery, and design system pathways — a ways of working framework built for a team of senior designers across multiple product squads.',
    background: 'lime',
    variant: 'desktop',
    href: '/portfolio/work/ux-process',
    image: wayOfWorkingImage,
    alt: 'UX team ways of working framework showing three delivery pathways and continuous loop',
    imageClass: 'project-preview-image',
  },
  {
    name: 'UI Design',
    title: 'RAA digital products — UX and UI across web and mobile',
    description: 'End-to-end design across insurance, membership, payments, identity, and the RAA website — from research and flows through to shipped product.',
    background: 'cyan',
    variant: 'desktop',
    href: '/portfolio/work/ui-design',
    image: myAccountImage,
    alt: 'RAA My Account dashboard showing member products and account management',
    imageClass: 'project-preview-image',
  },
  {
    name: 'Journey Mapping',
    title: 'Making member experience visible and actionable',
    description: 'Journey maps that connect real metrics, research, and pain points — giving product and design teams a shared reference for where the experience breaks down.',
    background: 'lavender',
    variant: 'board',
    href: '/portfolio/work/journey-mapping',
    image: journeyMap1Image,
    alt: 'QTB Journey Explorer showing phases, metrics, emotion curve, and prioritised solutions',
    imageClass: 'project-preview-image',
  },
  {
    name: 'Design Systems',
    title: 'RAA design system — components, tokens, and documentation',
    description: 'A shared library of components, patterns, and principles published in ZeroHeight and Figma, covering accessibility, usage guidelines, and code.',
    background: 'mint',
    variant: 'desktop',
    href: '/portfolio/work/design-systems',
    image: designSystem1Image,
    alt: 'RAA Apiary design system homepage in ZeroHeight showing component categories',
    imageClass: 'project-preview-image',
  },
  {
    name: 'Research & Benchmarking',
    title: 'Measuring the experience over time, not just at launch',
    description: 'Usability testing, confidence studies, and quantitative benchmarking — tracking effectiveness, efficiency, and desirability to feed back into what gets prioritised.',
    background: 'lime',
    variant: 'board',
    href: '/portfolio/work/research-benchmarking',
    image: uxBenchmarkingImage,
    alt: 'Usability benchmarking dashboard showing effectiveness, efficiency, satisfaction and desirability metrics',
    imageClass: 'project-preview-image',
  },
  {
    name: 'Strategic Practice',
    title: 'Discovery, critique, and the thinking behind the work',
    description: 'Competitor analysis, problem framing, design critique sessions — the strategic layer that shapes what gets designed before anyone opens Figma.',
    background: 'cyan',
    variant: 'split',
    href: '/portfolio/work/strategic-practice',
    image: miroIdeationCritiqueImage,
    alt: 'FigJam discovery session board showing problem framing, competitor analysis, and design options',
    imageClass: 'project-preview-image',
  },
  {
    name: 'Freelance',
    title: '20 years of client work — designed, built, and shipped',
    description: 'E-commerce, service businesses, and small brands — each project managed end to end from brief through to live site.',
    background: 'mint',
    variant: 'desktop',
    href: '/portfolio/work/freelance',
    image: freelance1aImage,
    alt: 'PALI Footwear e-commerce product detail page',
    imageClass: 'project-preview-image',
  },
];
