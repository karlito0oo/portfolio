# Modern Portfolio Website

A professional software engineer portfolio website built with React and custom CSS, inspired by Yashita Namdeo's portfolio design.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with blue color scheme
- **Animated Elements**: Smooth transitions and hover effects
- **Section-Based Layout**: Home, Experience, Projects, and Contact sections
- **Timeline Component**: Visual representation of work experience
- **Project Showcase**: Grid-based layout for project portfolio
- **Contact Form**: Interactive form with validation and submission feedback

## Technologies Used

- React 18
- TypeScript
- Custom CSS (with CSS variables for theming)
- Vite (for fast development and building)
- Google Fonts (Poppins)

## Project Structure

```
portfoliov2/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Main page sections
│   ├── assets/          # Images and other assets
│   ├── custom.css       # Custom styling
│   ├── index.css        # Base styles
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── .gitignore           # Git ignore file
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (version 14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/karlito0oo/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

```
npm run build
```

The build files will be generated in the `dist` directory.

## Customization

- Edit content in the page components under `src/pages/`
- Modify styles in `src/custom.css`
- Change colors by updating CSS variables in `:root` in the custom.css file
- Replace profile picture and project images

## License

MIT

## Acknowledgments

- Design inspiration: [Yashita Namdeo's Portfolio](https://yashitanamdeo.github.io/)
- Icons from Heroicons
