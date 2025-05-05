# Professional Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS to showcase your skills, projects, and experience as a Full Stack Developer.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations and transitions
- Project showcase with interactive slider
- Skills and experience sections
- Contact form
- Dark/light mode support
- SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Customization

### 1. Personal Information

Update your personal information in the following files:

- `components/home/Home.tsx` - Update name, title, and about section
- `components/navbar/Navbar.tsx` - Update name in the logo
- `components/home/footer.tsx` - Update name and copyright information

### 2. Projects

Modify the projects in `components/home/slider.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Description of your project",
    image: "/projects/your-image.jpg", // Add image to public/projects/
    tags: ["React", "Node.js", "MongoDB"], // Technologies used
    link: "https://github.com/yourusername/your-project" // Project link
  },
  // Add more projects...
];
```

### 3. Skills

Modify the skills in `components/home/Home.tsx`:

```typescript
const skills = [
  { name: 'Frontend', items: ['Your', 'Skills', 'Here'] },
  // Add more skill categories...
];
```

### 4. Images

Replace the following placeholder images:

- `/public/profile.jpg` - Your profile/avatar image
- `/public/projects/*.jpg` - Your project screenshots
- Add a resume at `/public/resume.pdf`

### 5. Metadata

Update the SEO metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Ahmed Abd Elmohsen | Software Engineer",
  description: "Your description",
  // ...
};
```

## Deployment

This project can be easily deployed to Vercel, Netlify, or any other hosting platform that supports Next.js.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/yourusername/portfolio)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
