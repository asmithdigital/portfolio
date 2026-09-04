import type { ImageMetadata } from 'astro';
import raaWebsiteImage from '../assets/images/raa-website-home.png';
import workshopsImage from '../assets/images/travel-sprint-affinity.jpg';
import miroIdeationCritiqueImage from '../assets/images/product-management-discovery-delivery.png';
import claudeOrchestrationImage from '../assets/images/claude-orchestration-layer-diagram.png';
import journeyMap1Image from '../assets/images/journey-map-1.png';
import designSystem2Image from '../assets/images/design-system-2.png';
import uxBenchmarkingImage from '../assets/images/ux-benchmarking.png';

export type Project = {
  name: string;
  title: string;
  description: string;
  background: 'lime' | 'cyan' | 'lavender' | 'mint';
  variant: string;
  href: string;
  image: ImageMetadata;
  alt: string;
  imageClass: string;
};

export const projects: Project[] = [
  {
    name: 'UI Design',
    title: 'UI design across digital products.',
    description: 'End-to-end UI design across travel, insurance, payments, identity management, and mobile — from the public website to the authenticated member portal.',
    background: 'lime',
    variant: 'desktop',
    href: '/portfolio/work/ui-design',
    image: raaWebsiteImage,
    alt: 'RAA website homepage showing insurance, membership, motor, home, and travel navigation',
    imageClass: 'project-preview-image',
  },
  {
    name: 'Workshop Facilitation',
    title: 'Facilitating discovery — design sprints and cross-functional workshops.',
    description: 'Running design sprints and ideation workshops to get product, engineering, and business aligned on the right problem before committing to a solution.',
    background: 'cyan',
    variant: 'desktop',
    href: '/portfolio/work/workshops',
    image: workshopsImage,
    alt: 'Team doing affinity mapping with sticky notes during a design sprint',
    imageClass: 'project-preview-image',
  },
  {
    name: 'UX & Product Process',
    title: 'How experience design works within the product delivery cycle.',
    description: 'From early roadmap conversations and analytics review through discovery, design, testing, and delivery.',
    background: 'lavender',
    variant: 'desktop',
    href: '/portfolio/work/ux-process',
    image: miroIdeationCritiqueImage,
    alt: 'Discovery and delivery dual-track diagram',
    imageClass: 'project-preview-image',
  },
  {
    name: 'Journey Mapping',
    title: 'Journey mapping for experience visibility.',
    description: 'Mapping the experience to surface what the team knows, what it does not, and where the gaps are.',
    background: 'mint',
    variant: 'board',
    href: '/portfolio/work/journey-mapping',
    image: journeyMap1Image,
    alt: 'Journey explorer showing phases, metrics, and prioritised solutions',
    imageClass: 'project-preview-image',
  },
  {
    name: 'Design Systems',
    title: 'Design systems for consistency at scale.',
    description: 'Component libraries built so product and engineering teams can move faster without design as a bottleneck.',
    background: 'lime',
    variant: 'desktop',
    href: '/portfolio/work/design-systems',
    image: designSystem2Image,
    alt: 'Component documentation showing anatomy, usage guidelines, and specs',
    imageClass: 'project-preview-image',
  },
  {
    name: 'Benchmarking',
    title: 'Benchmarking digital product quality over time.',
    description: 'Quantitative studies tracking effectiveness, efficiency, satisfaction, and desirability.',
    background: 'cyan',
    variant: 'board',
    href: '/portfolio/work/research-benchmarking',
    image: uxBenchmarkingImage,
    alt: 'Usability benchmarking dashboard',
    imageClass: 'project-preview-image',
  },
  {
    name: 'AI Tooling',
    title: 'AI in the design and product process.',
    description: 'How AI tools reduce overhead and accelerate discovery across research, prototyping, and the orchestration layer.',
    background: 'mint',
    variant: 'split',
    href: '/portfolio/work/ai-tooling',
    image: claudeOrchestrationImage,
    alt: 'AI orchestration layer diagram',
    imageClass: 'project-preview-image',
  },
];
export const workPageSize = 10;
