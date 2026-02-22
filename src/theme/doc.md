# Theme System Documentation

This document describes the MUI v6 theme system and all available color values for the website.

## Overview

The theme system is centralized in `src/theme/` and uses Material-UI v6 with Emotion for CSS-in-JS styling. The theme supports:
- **Light and Dark modes** - Configured via `src/config.js`
- **LTR and RTL layouts** - Direction toggle via `src/config.js`
- **Responsive typography** - Scales based on breakpoints
- **Custom component overrides** - Located in `src/theme/overrides/`

## File Structure

- `index.jsx` - Main theme factory function
- `palette.js` - Color definitions for light/dark modes
- `typography.js` - Font sizes, weights, line heights
- `shadow.js` - Elevation shadow definitions
- `overrides/` - Component-specific theme customizations

## Color Palette

### Primary Colors
Used for main actions, links, and brand emphasis.

```jsx
primary.main            // Main brand color (primary action)
primary.light           // Lighter shade (hover states)
primary.dark            // Darker shade (active states)
primary.contrastText    // Text color on primary backgrounds
```

### Secondary Colors
Used for secondary actions and accents.

```jsx
secondary.main
secondary.light
secondary.dark
secondary.contrastText
```

### Text Colors
For typography based on hierarchy and emphasis.

```jsx
text.primary       // Main body text (highest contrast)
text.secondary     // Secondary text (medium contrast, ~70% opacity)
text.disabled      // Disabled/inactive text (low contrast, ~50% opacity)
text.hint          // Hint and helper text (very low contrast)
```

### Background Colors
For page and component backgrounds.

```jsx
background.paper     // Card, surface, and elevated component backgrounds
background.default   // Page/viewport background
```

### Semantic Colors
Action-specific colors for user feedback.

```jsx
error.main
error.light
error.dark
// Usage: Error messages, delete buttons, validation errors

warning.main
warning.light
warning.dark
// Usage: Warning alerts, caution messages

info.main
info.light
info.dark
// Usage: Informational alerts, help messages

success.main
success.light
success.dark
// Usage: Success messages, confirmation buttons
```

### Grey Scale
Neutral colors for borders, dividers, and disabled states.

```jsx
grey[50]           // Nearly white (lightest)
grey[100]
grey[200]
grey[300]
grey[400]
grey[500]          // Mid-tones
grey[600]
grey[700]
grey[800]
grey[900]          // Nearly black (darkest)
```

## Usage Examples

### Typography with Colors

```jsx
import Typography from '@mui/material/Typography';

// Primary importance
<Typography color="text.primary">Main content</Typography>

// Secondary importance
<Typography color="text.secondary">Supporting text</Typography>

// Themed with primary color
<Typography color="primary.main">Branded text</Typography>

// Error state
<Typography color="error.main">Error message</Typography>
```

### Box & Container Backgrounds

```jsx
import Box from '@mui/material/Box';

// Card-like surfaces
<Box sx={{ backgroundColor: 'background.paper', p: 2 }}>
  Card content
</Box>

// With borders
<Box sx={{ 
  borderColor: 'grey[300]', 
  borderWidth: 1,
  borderStyle: 'solid'
}}>
  Bordered content
</Box>
```

### Semantic Actions

```jsx
import Button from '@mui/material/Button';

// Success action
<Button color="success" variant="contained">Confirm</Button>

// Warning/Destructive action
<Button color="error" variant="contained">Delete</Button>

// Info button
<Button color="info">Learn More</Button>
```

### Theme-Aware Styling

```jsx
// Colors automatically adapt to light/dark mode
<Box sx={{ 
  color: 'text.primary',  // Adapts to theme mode
  backgroundColor: 'background.paper',
  borderColor: 'divider'
}}>
  Theme-aware content
</Box>
```

## Accessing Theme Values

### In Components

```jsx
import { useTheme } from '@mui/material/styles';

export default function MyComponent() {
  const theme = useTheme();
  
  // Access palette colors
  const primaryColor = theme.palette.primary.main;
  const textColor = theme.palette.text.primary;
  
  // Access typography
  const h2Font = theme.typography.h2;
  
  // Access breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return <Box sx={{ color: primaryColor }}>Content</Box>;
}
```

### With sx Prop (Recommended)

```jsx
<Box sx={{ 
  color: 'text.primary',  // String notation
  backgroundColor: 'primary.light'
}}>
  Content
</Box>
```

## Customizing the Theme

### Updating Palette

Edit `src/theme/palette.js` to change color values:

```js
const lightPalette = {
  primary: {
    main: '#E85D04',  // Change brand color
    light: '#F5A742',
    dark: '#BB3D00'
  },
  // ... other colors
};
```

### Updating Typography

Edit `src/theme/typography.js` to adjust font sizes and weights:

```js
h2: {
  fontSize: '2rem',
  fontWeight: 600,
  lineHeight: 1.3
}
```

### Component Overrides

Edit files in `src/theme/overrides/` to customize component-specific styling:

```js
// src/theme/overrides/Button.js
const ButtonOverrides = {
  defaultProps: {
    disableElevation: false
  },
  styleOverrides: {
    root: ({ theme }) => ({
      textTransform: 'none',
      borderRadius: theme.shape.borderRadius
    })
  }
};
```

## Theme Mode & Direction

Theme mode (light/dark) and direction (LTR/RTL) are controlled globally in `src/config.js`:

```jsx
// src/config.js
export const THEME_MODE = 'light';  // or 'dark'
export const THEME_DIRECTION = 'ltr'; // or 'rtl'
```

These values are managed by `ConfigContext` and persist to localStorage.

## Breakpoints

MUI provides responsive breakpoints:

```jsx
theme.breakpoints.up('xs')       // 0px and up
theme.breakpoints.up('sm')       // 600px and up
theme.breakpoints.up('md')       // 960px and up
theme.breakpoints.up('lg')       // 1280px and up
theme.breakpoints.up('xl')       // 1920px and up

// Usage with sx prop
<Box sx={{ 
  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
}}>
  Responsive text
</Box>
```

## Global Design Tokens

Custom design tokens are defined in `src/utils/constant.js`:

```jsx
// Border radius scale
BORDER_RADIUS.xs     // Small components
BORDER_RADIUS.sm     // Medium components
BORDER_RADIUS.md     // Large sections
BORDER_RADIUS.lg     // Hero sections

// Section spacing
SECTION_COMMON_PY    // Vertical padding for sections
```

## Best Practices

1. **Use semantic colors** - `error`, `success`, `warning`, `info` for user feedback
2. **Prefer `text.*` colors** - Better accessibility and contrast
3. **Leverage theme tokens** - Use `BORDER_RADIUS`, design constants
4. **Responsive design** - Use `sx` prop with breakpoint objects
5. **Dark mode support** - Colors automatically adapt when mode changes
6. **Accessibility** - Maintain sufficient contrast ratios
7. **MotionWrapper** - Use consistent delays (0, 0.2, 0.4, 0.6) for animations

## Additional Resources

- [MUI v6 Theming Documentation](https://mui.com/material-ui/customization/theming/)
- [MUI Palette API](https://mui.com/material-ui/customization/palette/)
- [Material Design Color System](https://m2.material.io/design/color/)
