import { NextResponse } from 'next/server';
import { servicesData } from '@/lib/staticData';

/**
 * GET handler for services section data
 */
export async function GET() {
  try {
    return NextResponse.json(servicesData, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch services data' }, { status: 500 });
  }
}
