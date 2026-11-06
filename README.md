
# Mini Restaurant

A restaurant website built with **Next.js, TypeScript, and Sanity CMS** as a learning project focused on modern web development and headless content management.

The application allows restaurant content to be managed through Sanity Studio without modifying the frontend code.

## Features

- **Homepage:** Displays featured dishes managed through Sanity.
- **Menu:** Shows available dishes with interactive category filtering.
- **Dynamic dish pages:** Individual pages with descriptions, images, prices, and availability.
- **About page:** Restaurant information and images managed through Sanity.
- **Sanity Studio:** Embedded content management interface at `/studio`.
- **Responsive design:** Built using CSS Modules.

## Tech Stack

- **Next.js 16** — App Router and Server Components
- **React** — User interface
- **TypeScript** — Static typing
- **Sanity CMS** — Headless content management
- **GROQ** — Query language for Sanity
- **CSS Modules** — Component-scoped styling
- **pnpm** — Package manager

## Getting Started

### 1. Clone the repository

```bash
git clone  https://github.com/lauralabs/mini-restaurant.git 
cd mini-restaurant
```

### 2. Install dependencies

Make sure Node.js and pnpm are installed.

```bash
pnpm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Replace the example values with your Sanity project configuration.

### 4. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

Sanity Studio is available at [http://localhost:3000/studio](http://localhost:3000/studio).

## Project Structure

```text
app/
├── about/
├── lib/
├── menu/
│   └── [slug]/
├── studio/
├── ui/
├── layout.tsx
└── page.tsx

sanity/
├── lib/
└── schemaTypes/
```

- `app/` — Application routes, layouts, components, styles, and data-fetching logic.
- `sanity/` — Sanity schemas, client configuration, and utilities.

## Production Build

To create an optimized production build:

```bash
pnpm build
```

To run the production server:

```bash
pnpm start
```

## What I Learned

This project helped me practice:

- Next.js App Router and file-based routing.
- Server Components and Client Components.
- Dynamic routes and route parameters.
- TypeScript types and interfaces.
- GROQ queries and Sanity data fetching.
- Content management with Sanity Studio.
- Data caching and revalidation.
- Reusable components and CSS Modules.
- Production builds and TypeScript validation.

## Project Purpose

Mini Restaurant is a personal learning project created to explore the integration of **Next.js and Sanity CMS**.

It also serves as preparation for developing a real restaurant website with editable content and a maintainable architecture.
