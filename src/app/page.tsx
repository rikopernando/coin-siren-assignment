import { LandingPageTemplate } from '@/components/templates/LandingPageTemplate';
import { landingPageData } from '@/lib/staticData';

/**
 * Home Page (Server Component)
 *
 * Note: In production, you would fetch data from API routes like this:
 *
 * const [headerRes, heroRes, featuresRes, servicesRes] = await Promise.all([
 *   fetch(`${baseUrl}/api/data/header`, { next: { revalidate: 3600 } }),
 *   fetch(`${baseUrl}/api/data/hero`, { next: { revalidate: 3600 } }),
 *   fetch(`${baseUrl}/api/data/features`, { next: { revalidate: 3600 } }),
 *   fetch(`${baseUrl}/api/data/services`, { next: { revalidate: 3600 } }),
 * ]);
 *
 * For this demo with static data, we're importing directly.
 * The API routes are still functional and can be tested at runtime.
 */
export default function Home() {
  return <LandingPageTemplate data={landingPageData} />;
}
