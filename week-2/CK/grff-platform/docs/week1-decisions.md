# Week 1 Decisions

## Project Structure

This document outlines the key decisions made during week 1 of the GRFF Platform project.

## Rendering Strategies

### Static Site Generation (SSG)
- **Homepage** (`app/page.tsx`): Uses SSG for optimal performance

### Server Side Rendering (SSR)
- **User Profiles** (`app/profile/[id]/page.tsx`): Uses SSR for dynamic, user-specific content

### Client Side Rendering (CSR)
- **Dashboard** (`app/dashboard/page.tsx`): Uses CSR for interactive, client-side features

### Incremental Static Regeneration (ISR)
- **Blog List** (`app/blog/page.tsx`): Uses SSG with ISR (Incremental Static Regeneration)
- **Blog Posts** (`app/blog/[slug]/page.tsx`): Uses SSG with ISR
- https://nextjs.org/docs/app/guides/incremental-static-regeneration#route-segment-config


## API Routes

- `/api/posts` - Mock API endpoint for fetching blog posts
- `/api/user/[id]` - Mock API endpoint for fetching user data

## Components

- `Header.tsx` - Navigation header component
- `LoadingSpinner.tsx` - Loading state indicator
- `RenderingBadge.tsx` - Visual indicator for rendering strategy

## Data Management

- Mock data stored in `lib/data.ts`
- TypeScript types defined in `lib/types.ts`
