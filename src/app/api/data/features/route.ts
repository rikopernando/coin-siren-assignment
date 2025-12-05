import { NextResponse } from 'next/server';
import { featuresData } from '@/lib/staticData';

/**
 * GET handler for features section data
 */
export async function GET() {
  try {
    return NextResponse.json(featuresData, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch features data' }, { status: 500 });
  }
}
