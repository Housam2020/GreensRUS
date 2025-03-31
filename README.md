# GreensRUS Website

A modern React-based website for GreensRUS, a premier lawn care service in Waterloo, Ontario, Canada.

## Features

- Responsive design using Material-UI
- Modern and clean user interface
- Digital product showcase
- Service information
- Contact form
- About section
- Easy to maintain and update

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd greensrus
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── assets/        # Images and other static assets
└── App.tsx        # Main application component
```

## Maintenance

### Adding New Content

1. **Services**: Edit the `services` array in `src/pages/Services.tsx`
2. **Products**: Edit the `products` array in `src/pages/Products.tsx`
3. **Contact Information**: Update the contact details in `src/pages/Contact.tsx`
4. **About Section**: Modify the content in `src/pages/About.tsx`

### Styling

The website uses Material-UI for styling. To modify the theme:

1. Edit the theme configuration in `src/App.tsx`
2. Use Material-UI's `sx` prop for component-specific styling
3. Create custom styled components using `styled` from `@mui/material/styles`

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the contents of the `dist` folder to your hosting service

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is proprietary and confidential. All rights reserved.
