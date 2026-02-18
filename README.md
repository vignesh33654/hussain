# WebForum - Modern Discussion Platform

A beautiful and modern web forum application built with Next.js 14, TypeScript, and shadcn/ui components.

## Features

✨ **Modern UI/UX**
- Clean and responsive design
- Beautiful shadcn/ui components
- Dark mode support
- Smooth animations and transitions

🎨 **Forum Features**
- Category-based organization
- Thread creation and browsing
- Post replies with rich formatting
- User profiles with avatars
- Thread pinning and locking
- View counts and engagement metrics
- Real-time activity timestamps

🛠️ **Tech Stack**
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── thread/[id]/    # Thread detail pages
│   ├── new-thread/     # Create new thread
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── category-card.tsx
│   ├── thread-card.tsx
│   ├── post.tsx
│   └── forum-header.tsx
├── lib/
│   ├── mock-data.ts    # Sample forum data
│   └── utils.ts        # Utility functions
└── types/
    └── forum.ts        # TypeScript interfaces
```

## Features Overview

### Home Page
- Browse all threads organized by categories
- View pinned threads separately
- Quick search functionality
- Create new thread button

### Thread Detail Page
- View original post and all replies
- User information and post counts
- Like and reply functionality
- Thread metadata (views, replies, activity)

### Create Thread
- Choose from multiple categories
- Rich text content area
- Form validation
- Responsive design

## Customization

### Adding New Categories
Edit `src/lib/mock-data.ts` to add new categories:

```typescript
{
  id: "7",
  name: "Your Category",
  description: "Category description",
  threadCount: 0,
  icon: "🎯",
}
```

### Styling
- Global styles: `src/app/globals.css`
- Theme colors: CSS variables in globals.css
- Component styles: Tailwind classes

## Future Enhancements

- [ ] User authentication and authorization
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Real-time updates with WebSockets
- [ ] Advanced search and filtering
- [ ] User reputation system
- [ ] Markdown support for posts
- [ ] File attachments
- [ ] Email notifications
- [ ] Moderation tools
- [ ] API endpoints

## Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## License

MIT

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
