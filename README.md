# DietXpert

DietXpert is a modern web application for managing diet and nutrition information, helping users track their meals and discover healthy food options.

## Project Structure

```
dietxpert/
├── src/                      # Source code
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # Base UI components (buttons, inputs, etc.)
│   │   └── [feature]/       # Feature-specific components
│   ├── context/             # React Context providers
│   │   ├── AuthContext      # Authentication state management
│   │   ├── FoodContext      # Food and meals state management
│   │   └── ...
│   ├── data/               # Mock data and static assets
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions and configurations
│   ├── pages/              # Page components and routing
│   └── types/              # TypeScript type definitions
├── public/                 # Static files
└── [config files]          # Various configuration files
```

## Directory Details

### Components (`src/components/`)
- Contains all reusable UI components
- Organized by feature or functionality
- `ui/` contains shadcn/ui base components
- Each component should be self-contained with its styles and logic

### Context (`src/context/`)
- Contains React Context providers for global state management
- `AuthContext`: Handles user authentication and session management
- `FoodContext`: Manages food items, meals, and favorites

### Data (`src/data/`)
- Contains mock data and static content
- Database schemas and initial data
- Static assets like images or JSON files

### Hooks (`src/hooks/`)
- Custom React hooks for shared functionality
- Reusable logic that can be used across components
- Examples: `useAuth`, `useFood`, etc.

### Library (`src/lib/`)
- Utility functions and helper methods
- API service functions
- Constants and configurations

### Pages (`src/pages/`)
- Main page components
- Route definitions
- Page-specific logic and layouts

### Types (`src/types/`)
- TypeScript type definitions
- Shared interfaces and types
- API response types

## Key Features

1. Food and Meal Management
   - Search and filter foods
   - View detailed nutritional information
   - Create and manage meals

2. User Features
   - Authentication and user profiles
   - Favorite foods management
   - Personalized meal suggestions

3. Categories and Organization
   - Food categorization
   - Meal planning
   - Dietary preferences

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Technology Stack

- React + TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- shadcn/ui for UI components
- Context API for state management 