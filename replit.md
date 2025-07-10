# PT Adu Konstruksi Utama - Construction Company Website

## Overview

This is a modern construction company website built for PT Adu Konstruksi Utama, a professional construction contractor in Indonesia. The application is a full-stack web application with a React frontend and Express backend, featuring a comprehensive corporate website with contact forms, project showcases, and service information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom brand colors and responsive design
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: In-memory storage with extensible interface
- **Development**: Hot reload with Vite middleware integration

## Key Components

### Frontend Components
- **Layout Components**: Navigation bar with smooth scrolling, footer with social links
- **Page Sections**: Hero, About, Services, Projects, Equipment, Team, Contact
- **UI Components**: Full Shadcn/ui component library including forms, dialogs, toasts
- **Special Features**: WhatsApp integration button, SEO optimization, responsive design

### Backend Components
- **Storage Interface**: Pluggable storage system currently using in-memory implementation
- **Route Registration**: Centralized route management system
- **Error Handling**: Comprehensive error middleware
- **Development Tools**: Request logging and performance monitoring

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Extensible Design**: Schema designed to accommodate future entities

## Data Flow

1. **Client Requests**: Frontend makes API calls through React Query
2. **Server Processing**: Express routes handle business logic using storage interface
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: Structured JSON responses with proper error handling
5. **Client Updates**: React Query manages cache invalidation and UI updates

## External Dependencies

### Core Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: drizzle-orm with drizzle-kit for migrations
- **UI**: Complete Radix UI ecosystem for accessible components
- **Styling**: Tailwind CSS with PostCSS processing
- **Validation**: Zod for schema validation with drizzle-zod integration

### Development Dependencies
- **Build**: Vite with React plugin and TypeScript support
- **Tooling**: ESBuild for server bundling
- **Replit Integration**: Specialized plugins for Replit environment

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Node.js server with Vite middleware for HMR
- **Production**: Standalone Node.js server serving static files
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Scripts
- `dev`: Development server with TypeScript execution
- `build`: Production build for both frontend and backend
- `start`: Production server execution
- `db:push`: Database schema synchronization

### Special Features
- **WhatsApp Integration**: Direct messaging capability for customer inquiries
- **SEO Optimization**: Structured data, meta tags, and Indonesian language support
- **Mobile Responsive**: Optimized for all device sizes
- **Brand Identity**: Custom color scheme and professional construction theme