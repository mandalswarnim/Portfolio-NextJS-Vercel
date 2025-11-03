import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Swarnim Mandal - Portfolio',
    short_name: 'Swarnim Mandal',
    description: 'Software Engineering student specializing in AI projects and software solutions',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#21B4A6',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
