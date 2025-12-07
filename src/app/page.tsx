import { Metadata } from 'next';
import { LandingPageTemplate } from '@/components/templates/LandingPageTemplate';
import { LandingPageData } from '@/lib/types';

/**
 * Generate dynamic metadata for SEO
 */
export async function generateMetadata(): Promise<Metadata> {
  const data = await getLandingPageData();

  return {
    title: '최고의 인재를 찾아드립니다 | Hyperhire',
    description: data.hero.subheadline,
    keywords: ['해외 개발자', '원격 채용', '외국인 인재', '글로벌 인재', 'IT 채용'],
    openGraph: {
      title: '최고의 인재를 찾아드립니다 | Hyperhire',
      description: data.hero.subheadline,
      type: 'website',
      locale: 'ko_KR',
    },
    twitter: {
      card: 'summary_large_image',
      title: '최고의 인재를 찾아드립니다 | Hyperhire',
      description: data.hero.subheadline,
    },
  };
}

/**
 * Fetch landing page data from API routes (Server-side)
 * This runs on the server during build time and request time
 */
async function getLandingPageData(): Promise<LandingPageData> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  try {
    // Fetch all data in parallel for optimal performance
    const response = await fetch(`${baseUrl}/api/data`, {
      next: { revalidate: 3600 }, // Revalidate every hour (ISR)
    });

    if (!response.ok) {
      throw new Error('Failed to fetch landing page data');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching landing page data:', error);
    // Fallback to static data in case of API failure
    const { landingPageData } = await import('@/lib/staticData');
    return landingPageData;
  }
}

/**
 * Home Page (Server Component)
 *
 * Benefits of Server Component:
 * - Data fetching on the server
 * - Reduced client-side JavaScript
 * - Better SEO (content is in initial HTML)
 * - Faster initial page load
 * - Automatic code splitting
 */
export default async function Home() {
  const data = await getLandingPageData();

  return <LandingPageTemplate data={data} />;
}
