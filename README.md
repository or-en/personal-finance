# Personal Finance App

A modern personal finance management application built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **UI**: React 19, Tailwind CSS, shadcn/ui
- **Database**: Neon DB (PostgreSQL)
- **Storage**: Vercel Blob
- **Deployment**: Vercel
- **Form Handling**: react-hook-form with Zod validation

## Prerequisites

- Node.js 18+ and npm
- GitHub account
- Vercel account
- Neon DB account

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/or-en/personal-finance.git
cd personal-finance
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Copy the example environment file and fill in your values:

```bash
cp .env.example .env.local
```

Update `.env.local` with your actual credentials:

```env
# Database (Neon DB)
DATABASE_URL=postgresql://user:password@host:5432/database?sslmode=require

# Vercel Blob Storage
BLOB_READ_WRITE_TOKEN=your_blob_token_here

# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Environment
NODE_ENV=development
```

### 4. Set Up Neon DB

1. Create a new project in [Neon Console](https://console.neon.tech)
2. Copy the connection string from your Neon project
3. Add it to `.env.local` as `DATABASE_URL`

### 5. Set Up Vercel Blob

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to Storage → Blob
3. Create a new Blob store (if needed)
4. Copy the `BLOB_READ_WRITE_TOKEN`
5. Add it to `.env.local` as `BLOB_READ_WRITE_TOKEN`

### 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
personal-finance/
├── app/                    # Next.js App Router pages and layouts
├── lib/                    # Domain-specific code and utilities
│   ├── db/                # Database client configuration
│   ├── blob/              # Vercel Blob client configuration
│   └── utils.ts           # General utilities (shadcn/ui utils)
├── src/
│   └── providers/         # React context providers
├── components/            # React components
│   └── ui/               # shadcn/ui components
└── public/               # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel Dashboard](https://vercel.com/dashboard)
3. Add environment variables in Vercel project settings:
   - `DATABASE_URL`
   - `BLOB_READ_WRITE_TOKEN`
   - `NEXT_PUBLIC_APP_URL` (your Vercel deployment URL)
4. Deploy!

Vercel will automatically detect Next.js and configure the build settings.

## Database Connection

The database client is configured in `lib/db/index.ts`. Import it in your API routes or server components:

```typescript
import sql from '@/lib/db';

// Use in API routes or server components
const users = await sql`SELECT * FROM users`;
```

## Blob Storage

The Blob client is configured in `lib/blob/index.ts`. Use it to upload, list, or delete files:

```typescript
import { uploadBlob, listBlobs, deleteBlob } from '@/lib/blob';

// Upload a file
const blob = await uploadBlob('filename.pdf', fileBuffer);

// List blobs
const blobs = await listBlobs({ prefix: 'documents/' });

// Delete a blob
await deleteBlob(blob.url);
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Commit and push to GitHub
4. Open a pull request

## License

[Add your license here]
