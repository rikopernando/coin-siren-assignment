import { NextResponse } from 'next/server';
import { heroData } from '@/lib/staticData';

/**
 * GET handler for hero section data
 */
export async function GET() {
  try {
    return NextResponse.json(heroData, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch hero data' }, { status: 500 });
  }
}
