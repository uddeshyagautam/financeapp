# FinanceApp

A modern finance dashboard built with Next.js 14, React 18, TypeScript, and Tailwind CSS. It includes pages for viewing balances, connected banks, transaction history, and payment transfers with a responsive UI.

## Features
- Responsive dashboard layout with sidebar and mobile navigation
- Total balance, bank cards, and doughnut chart visualizations
- Transaction history view
- Payment transfer flow UI
- Authentication layouts for sign in / sign up
- Built with reusable UI components

## Tech Stack
- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS + tailwind-merge + tailwindcss-animate
- Chart.js + react-chartjs-2
- Radix UI primitives and icons, lucide-react

## Getting Started
### Prerequisites
- Node.js 18+ (recommended)
- PNPM/NPM/Yarn (examples below use npm)

### Install dependencies
```bash
npm install
```

### Run the development server
```bash
npm run dev
```
Then open `http://localhost:3000` in your browser.

### Build for production
```bash
npm run build
```

### Start the production server
```bash
npm run start
```

### Lint
```bash
npm run lint
```

## Project Structure
```
app/
  (auth)/             # Auth layouts and routes (sign-in, sign-up)
  (root)/             # Main app routes (dashboard pages)
  layout.tsx          # Root layout
  globals.css         # Global styles (Tailwind)
components/
  ui/                 # Reusable UI components (charts, cards, etc.)
constants/            # App-wide constants
lib/                  # Utilities
public/icons/         # SVG icons and assets
```

Key routes:
- `app/(root)/page.tsx`: Dashboard landing
- `app/(root)/my-banks/page.tsx`: Connected banks
- `app/(root)/transaction-history/page.tsx`: Transactions
- `app/(root)/payment-transfer/page.tsx`: Transfer flow
- `app/(auth)/sign-in/page.tsx`, `app/(auth)/sign-up/page.tsx`: Auth pages

## Available Scripts
- `dev`: Start Next.js dev server
- `build`: Build the app
- `start`: Start Next.js in production mode
- `lint`: Run ESLint

## Styling
Tailwind CSS is configured in `tailwind.config.ts` and `app/globals.css`.
- Use utility classes for layout and spacing
- Prefer component composition in `components/ui/` for consistency

## Charts
The doughnut chart uses Chart.js via `react-chartjs-2`. See `components/ui/DoughnutChart.tsx` for an example of dataset and options usage.

## Contributing
- Create a feature branch from `main`
- Ensure `npm run lint` passes
- Submit a PR with a clear description and screenshots if UI changes

## License
This project is provided as-is. Add a license file if you intend to distribute.
