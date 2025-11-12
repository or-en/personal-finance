import { put, list, head, del } from '@vercel/blob';

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  throw new Error('BLOB_READ_WRITE_TOKEN environment variable is not set');
}

const token = process.env.BLOB_READ_WRITE_TOKEN;

/**
 * Upload a file to Vercel Blob storage
 * @param filename - The name of the file
 * @param content - The file content (Buffer, Blob, or ReadableStream)
 * @param options - Additional options for the upload
 * @returns The blob URL and metadata
 */
export async function uploadBlob(
  filename: string,
  content: Buffer | Blob | ReadableStream,
  options?: {
    contentType?: string;
    addRandomSuffix?: boolean;
    cacheControlMaxAge?: number;
  }
) {
  return await put(filename, content, {
    token,
    ...options,
  });
}

/**
 * List blobs in the store
 * @param options - Options for listing blobs
 * @returns List of blobs
 */
export async function listBlobs(options?: {
  prefix?: string;
  limit?: number;
  cursor?: string;
}) {
  return await list({
    token,
    ...options,
  });
}

/**
 * Get blob metadata
 * @param url - The blob URL
 * @returns Blob metadata
 */
export async function getBlobMetadata(url: string) {
  return await head(url, {
    token,
  });
}

/**
 * Delete a blob
 * @param url - The blob URL
 * @returns Success status
 */
export async function deleteBlob(url: string) {
  return await del(url, {
    token,
  });
}

