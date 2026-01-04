'use client';
import PropTypes from 'prop-types';

import { isValidElement } from 'react';

// @mui
import CardMedia from '@mui/material/CardMedia';

// @project
import DynamicComponent from './DynamicComponent';
import GetImagePath from '@/utils/GetImagePath';

/***************************  IMAGE - TYPE IDENTIFY ***************************/

function isImageComponentProps(value) {
  return value.light !== undefined && value.dark !== undefined;
}

function isDynamicImageProps(value) {
  return value.component !== undefined && value.type !== undefined;
}

/***************************  DYNAMIC GRAPHICS - IMAGE  ***************************/

/***************************  DYNAMIC GRAPHICS - IMAGE  ***************************/

/**
 * GraphicsImage Component
 *
 * A versatile image component that handles multiple image input types and automatically optimizes
 * rendering based on the input format. Supports external URLs, React elements, theme-aware images,
 * and dynamically rendered SVG components.
 *
 * @param {Object} props - Component props
 * @param {string | ReactElement | ImageComponentProps | DynamicImageProps} props.image - 
 *   The image to render. Accepts multiple formats:
 *   - string: External CDN URL or image path (renders as CardMedia)
 *   - ReactElement: Already rendered React component
 *   - ImageComponentProps: Object with 'light' and 'dark' properties for theme-aware images (uses GetImagePath utility)
 *   - DynamicImageProps: Object with 'component' and 'type' for dynamically rendered SVG components
 *   - Example: '/path/to/image.png', { light: '/light.png', dark: '/dark.png' }, <CustomImageComponent />
 * @param {React.ReactNode} [props.children] - Optional. Child content to render inside CardMedia (if applicable)
 * @param {Array<func | object | bool> | func | object} [props.sx] - Optional. MUI sx prop for custom styling
 *   - Applies to the rendered CardMedia or wrapper element
 *   - Example: { width: 'auto', maxWidth: '100%' }
 * @param {Object} [props.cardMediaProps] - Optional. Additional props to pass to the CardMedia component
 *   - Supports all CardMedia props (component, src, alt, loading, etc.)
 *   - Use component='img' for img tag or default for div with background image
 *   - Example: { component: 'img', loading: 'lazy' }
 *
 * @returns {JSX.Element} The appropriate image element:
 *   - ReactElement if input is a valid React element
 *   - DynamicComponent if input has component and type properties
 *   - CardMedia if input is a string or ImageComponentProps object
 *   - Original image value as fallback
 *
 * @example
 * // External CDN URL
 * <GraphicsImage image="/assets/hero.png" />
 *
 * @example
 * // Theme-aware light/dark image
 * <GraphicsImage 
 *   image={{ light: '/assets/light-theme.png', dark: '/assets/dark-theme.png' }} 
 * />
 *
 * @example
 * // Dynamic SVG component
 * <GraphicsImage 
 *   image={{ component: 'HeroGraphic', type: 'graphics' }} 
 * />
 *
 * @example
 * // React element
 * <GraphicsImage image={<CustomImageComponent />} />
 *
 * @example
 * // With custom styling and CardMedia props
 * <GraphicsImage 
 *   image="/assets/image.png"
 *   sx={{ borderRadius: 2, maxWidth: '100%' }}
 *   cardMediaProps={{ component: 'img', alt: 'Hero Image', loading: 'lazy' }}
 * />
 */
export default function GraphicsImage({ children, image, sx, cardMediaProps }) {
  if (isValidElement(image)) return image;

  if (isDynamicImageProps(image)) {
    return <DynamicComponent component={image.component} type={image.type} />;
  }

  if (isImageComponentProps(image) || typeof image === 'string') {
    return (
      <CardMedia
        {...(cardMediaProps?.component == 'img'
          ? { src: GetImagePath(image), alt: 'Graphics', loading: 'lazy' }
          : { image: GetImagePath(image), title: 'Graphics', loading: 'lazy' })}
        sx={{ width: 'auto', ...sx }}
        {...cardMediaProps}
      >
        {children}
      </CardMedia>
    );
  }

  return image;
}

GraphicsImage.propTypes = { children: PropTypes.any, image: PropTypes.any, sx: PropTypes.any, cardMediaProps: PropTypes.any };
