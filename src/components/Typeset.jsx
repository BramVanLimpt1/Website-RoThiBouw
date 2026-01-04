import PropTypes from 'prop-types';

// @mui
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

/***************************  COMMON - TYPESET  ***************************/

/**
 * Typeset Component
 * 
 * A reusable component for rendering a heading with an optional caption, styled consistently.
 * 
 * @param {Object} props - Component props
 * @param {string} props.heading - The main heading text to display
 * @param {string} [props.caption] - Optional. Caption text displayed below the heading in secondary color
 * @param {Object} [props.stackProps] - Optional. MUI Stack props to customize the container.
 *   - Supports all Stack props (spacing, direction, alignItems, etc.)
 *   - Use 'sx' for custom MUI styling (gap will be set to { xs: 1, sm: 1.5 } by default)
 *   - Example: { sx: { mb: 2 }, alignItems: 'center' }
 * @param {Object} [props.headingProps] - Optional. MUI Typography props for the heading.
 *   - Variant defaults to 'h2'
 *   - Use 'sx' for custom styling
 *   - Example: { sx: { color: 'primary.main' }, noWrap: true }
 * @param {Object} [props.captionProps] - Optional. MUI Typography props for the caption.
 *   - Variant defaults to 'h6'
 *   - Color defaults to 'text.secondary'
 *   - Use 'sx' for custom styling (will merge with default secondary color)
 *   - Example: { sx: { fontWeight: 600 }, align: 'center' }
 * 
 * @returns {JSX.Element} A Stack component containing heading and optional caption Typography
 * 
 * @example
 * // Basic usage with heading only
 * <Typeset heading="Welcome" />
 * 
 * @example
 * // With caption
 * <Typeset heading="Our Services" caption="Professional solutions tailored for you" />
 * 
 * @example
 * // With custom styling
 * <Typeset
 *   heading="About Us"
 *   caption="Learn more about our company"
 *   stackProps={{ sx: { mb: 3 } }}
 *   headingProps={{ sx: { color: 'primary.main' } }}
 *   captionProps={{ sx: { fontStyle: 'italic' } }}
 * />
 */
export default function Typeset({ heading, caption, stackProps, headingProps, captionProps }) {
  const { sx, ...rest } = stackProps || {};

  return (
    <Stack {...rest} sx={{ gap: { xs: 1, sm: 1.5 }, ...sx }}>
      <Typography variant="h2" {...headingProps} sx={{ ...(headingProps?.sx && { ...headingProps.sx }) }}>
        {heading}
      </Typography>
      {caption && (
        <Typography
          component="p"
          variant="h6"
          {...captionProps}
          sx={{ color: 'text.secondary', ...(captionProps?.sx && { ...captionProps.sx }) }}
        >
          {caption}
        </Typography>
      )}
    </Stack>
  );
}

Typeset.propTypes = {
  heading: PropTypes.string,
  caption: PropTypes.string,
  stackProps: PropTypes.any,
  headingProps: PropTypes.any,
  captionProps: PropTypes.any
};
