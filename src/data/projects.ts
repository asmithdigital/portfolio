import type { ImageMetadata } from 'astro';
import miroIdeationCritiqueImage from '../assets/images/miro-ideation-critique-example.png';
import myAccountImage from '../assets/images/my-account.png';
import journeyMap1Image from '../assets/images/journey-map-1.png';
import designSystem1Image from '../assets/images/design-system-2.png';
import uxBenchmarkingImage from '../assets/images/ux-benchmarking.png';
import wayOfWorkingImage from '../assets/images/way-of-working-1.png';

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
    title: 'The UX design process, end to end',
    description: 'How research, ideation, flows, wireframes, testing, and UI design work together across a product — the end-to-end practice of a senior product designer.',
    background: 'lime',
    variant: 'desktop',
    href: '/portfolio/work/ux-process',
    image: miroIdeationCritiqueImage,
    alt: 'FigJam discovery session showing problem framing, competitor analysis, and design options',
    imageClass: 'project-preview-image',
  },
  {
    name: 'UI Design',
    title: 'UI design across digital products',
    description: 'End-to-end UI design across insurance, membership, payments, identity, travel, the university website, and freelance client work.',
    background: 'cyan',
    variant: 'desktop',
    href: '/portfolio/work/ui-design',
    image: myAccountImage,
    alt: 'RAA My Account dashboard showing member products and account management',
    imageClass: 'project-preview-image',
  },
  {
    name: 'Journey Mapping',
    title: 'Journey mapping for experience visibility',
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
    title: 'Design systems for consistency at scale',
    description: 'Shared component libraries built for scale — from a custom JavaScript styleguide for an entire university to a governed Figma and ZeroHeight system for a major member organisation.',
    background: 'mint',
    variant: 'desktop',
    href: '/portfolio/work/design-systems',
    image: designSystem1Image,
    alt: 'RAA Apiary design system homepage in ZeroHeight showing component categories',
    imageClass: 'project-preview-image',
  },
  {
    name: 'Benchmarking',
    title: 'Benchmarking digital product quality over time',
    description: 'Quantitative UX benchmarking that tracks effectiveness, efficiency, satisfaction, and desirability — feeding results back into what gets prioritised and why.',
    background: 'lime',
    variant: 'board',
    href: '/portfolio/work/research-benchmarking',
    image: uxBenchmarkingImage,
    alt: 'Usability benchmarking dashboard showing effectiveness, efficiency, satisfaction and desirability metrics',
    imageClass: 'project-preview-image',
  },
  {
    name: 'Ways of Working',
    title: 'Ways of working for a UX team',
    description: 'How a design practice is structured — delivery pathways, the EXD Studio model, team governance, and AI-assisted workflows that connect design system, journey maps, and research.',
    background: 'cyan',
    variant: 'split',
    href: '/portfolio/work/strategic-practice',
    image: wayOfWorkingImage,
    alt: 'UX team ways of working framework showing three delivery pathways and continuous loop',
    imageClass: 'project-preview-image',
  },
];
