# Reeltor Dashboard

A modern real estate investment dashboard built with React and Vite, featuring property marketplace, portfolio management, and analytics.

## Features

- 📊 Interactive Dashboard with Real Estate Analytics
- 🏠 Property Marketplace
- 💼 Investment Portfolio Management
- 📈 Performance Analytics
- 💳 Payment Integration
- 🎨 Modern UI with Animations
- 📱 Responsive Design

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd reeltor-dashboard
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

This will start the development server at `http://localhost:5173` with hot module replacement (HMR) enabled.

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
reeltor-dashboard/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── utils/         # Utility functions
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── public/            # Static assets
└── index.html         # HTML entry point
```

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Styling:** TailwindCSS
- **Charts:** Recharts
- **Icons:** Lucide React
- **Code Quality:** ESLint

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality