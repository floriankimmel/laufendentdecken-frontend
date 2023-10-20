import type { GetImageResult } from 'astro';
import { getImage } from 'astro:assets';

export const fetchImage = async (episode: any): Promise<GetImageResult> => {
var src = episode._embedded['wp:featuredmedia']['0'].media_details.sizes.large?.source_url
if (!src) {
    src = episode._embedded['wp:featuredmedia']['0'].media_details.sizes.full.source_url
}
return getImage({
    src,
    width:1020,
    height:510,
    format: 'avif',
})
}
