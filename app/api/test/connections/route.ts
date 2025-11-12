import { NextResponse } from 'next/server';
import sql from '@/lib/db';
import { listBlobs } from '@/lib/blob';

export async function GET() {
  const results = {
    database: { connected: false, error: null as string | null },
    blob: { connected: false, error: null as string | null },
  };

  // Test database connection
  try {
    const dbResult = await sql`SELECT NOW() as current_time, version() as pg_version`;
    results.database.connected = true;
    results.database.error = null;
  } catch (error) {
    results.database.connected = false;
    results.database.error =
      error instanceof Error ? error.message : 'Unknown error';
  }

  // Test blob connection
  try {
    await listBlobs({ limit: 1 });
    results.blob.connected = true;
    results.blob.error = null;
  } catch (error) {
    results.blob.connected = false;
    results.blob.error =
      error instanceof Error ? error.message : 'Unknown error';
  }

  const allConnected = results.database.connected && results.blob.connected;

  return NextResponse.json(
    {
      status: allConnected ? 'success' : 'partial',
      connections: results,
      timestamp: new Date().toISOString(),
    },
    { status: allConnected ? 200 : 207 } // 207 Multi-Status if partial
  );
}

