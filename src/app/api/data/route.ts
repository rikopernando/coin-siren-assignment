import { NextResponse } from 'next/server';
import { landingPageData } from '@/lib/staticData';

/**
 * GET handler for complete landing page data
 * Returns all data needed for the landing page in a single request
 */
export async function GET() {
  try {
    return NextResponse.json(landingPageData, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch landing page data' }, { status: 500 });
  }
}
