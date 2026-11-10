import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

/** Keeps only the widths an image can supply, so nothing is scaled up. */
export const widthsFor = (image: ImageMetadata, widths: number[]) => {
	const usable = widths.filter((width) => width < image.width);
	return [...usable, Math.min(image.width, widths[widths.length - 1])];
};

/** The large version of an image that the lightbox shows. */
export const lightboxImage = (image: ImageMetadata) =>
	getImage({ src: image, widths: widthsFor(image, [800, 1200, 1800, 2400]), format: 'webp' });
