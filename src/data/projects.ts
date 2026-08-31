import type { ImageMetadata } from 'astro';
import miroIdeationCritiqueImage from '../assets/images/miro-ideation-critique-example.png';
import myAccountImage from '../assets/images/my-account.png';
import journeyMap1Image from '../assets/images/journey-map-1.png';
import designSystem2Image from '../assets/images/design-system-2.png';
import uxBenchmarkingImage from '../assets/images/ux-benchmarking.png';
import claudeOrchestrationImage from '../assets/images/claude-orchestration-layer-diagram.png';

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
    name: 'UX & Product Process',
    title: 'How experience design works within the product delivery cycle.',
    description: 'From early roadmap conversations and analytics review through discovery, design, testing, and delivery — how the team contributes to product decisions at each stage.',
    background: 'lime',
    variant: 'desktop',
    href: '/portfolio/work/ux-process',
    image: miroIdeationCritiqueImage,
    alt: 'FigJam discovery session showing problem framing and design options',
    imageClass: 'project-preview-image',
  },
  {
    name: 'UI Design',
    title: 'UI design across digital products.',
    description: 'End-to-end UI design across insurance, membership, payments, identity, travel, the university website, and freelance client work.',
    background: 'cyan',
    variant: 'desktop',
    href: '/portfolio/work/ui-design',
    image: myAccountImage,
    alt: 'Member portal dashboard showing account management',
    imageClass: 'project-preview-image',
  },
  {
    name: 'Journey Mapping',
    title: 'Journey mapping for experience visibility.',
    description: 'Mapping the experience to surface what the team knows, what it does not, and where the gaps are — giving product a shared evidence base for prioritisation.',
    background: 'lavender',
    variant: 'board',
    href: '/portfolio/work/journey-mapping',
    image: journeyMap1Image,
    alt: 'Journey explorer showing phases, metrics, and prioritised solutions',
    imageClass: 'project-preview-image',
  },
  {
    name: 'Design Systems',
    title: 'Design systems for consistency at scale.',
    description: 'Component libraries built so product and engineering teams can move faster without design as a bottleneck on standard patterns.',
    background: 'mint',
    variant: 'desktop',
    href: '/portfolio/work/design-systems',
    image: designSystem2Image,
    alt: 'Component documentation showing anatomy, usage guidelines, and specs',
    imageClass: 'project-preview-image',
  },
  {
    name: 'Benchmarking',
    title: 'Benchmarking digital product quality over time.',
    description: 'Quantitative studies tracking effectiveness, efficiency, satisfaction, and desirability — giving product teams evidence of whether changes are actually improving the experience.',
    background: 'lime',
    variant: 'board',
    href: '/portfolio/work/research-benchmarking',
    image: uxBenchmarkingImage,
    alt: 'Usability benchmarking dashboard showing effectiveness, efficiency, satisfaction, and desirability',
    imageClass: 'project-preview-image',
  },
  {
    name: 'AI Tooling',
    title: 'AI in the design and product process.',
    description: 'How AI tools reduce overhead and accelerate discovery — from research synthesis and journey mapping to rapid prototyping and the orchestration layer that connects team knowledge.',
    background: 'cyan',
    variant: 'split',
    href: '/portfolio/work/ai-tooling',
    image: claudeOrchestrationImage,
    alt: 'Experience Design operating model showing AI orchestration layer connecting all tools and knowledge sources',
    imageClass: 'project-preview-image',
  },
];
