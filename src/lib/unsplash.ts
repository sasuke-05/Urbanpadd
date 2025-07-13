
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY || '',
});

const fallbackImage = 'https://placehold.co/600x400/70a4a1/f5f5f5.png';

export async function getUnsplashImage(query: string): Promise<string> {
  if (!process.env.UNSPLASH_ACCESS_KEY) {
    console.warn("Unsplash API key is missing. Using fallback image.");
    return fallbackImage;
  }

  try {
    const result = await unsplash.photos.getRandom({
      query: query || 'apartment room',
      orientation: 'landscape',
    });
    
    if (result.type === 'success') {
      return result.response.urls.small;
    } else {
      console.error('Failed to fetch image from Unsplash:', result.errors.join(', '));
      return fallbackImage;
    }
  } catch (error) {
    console.error('Error calling Unsplash API:', error);
    return fallbackImage;
  }
}
