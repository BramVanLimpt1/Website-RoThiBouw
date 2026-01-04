'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';

/***************************  MAIN - CONTAINER  ***************************/

/**
 * ContainerWrapper Component
 *
 * A responsive container wrapper that adjusts its maxWidth and padding based on viewport size.
 * Utilizes MUI's Container component for consistent layout and spacing.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The content to be wrapped inside the container.
 * @param {Object} [props.sx] - Optional. Additional styles to apply to the Container component.
 *
 * @returns {JSX.Element} A responsive Container component wrapping the children
 *
 * @example
 * // Basic usage
 * <ContainerWrapper>
 *   <YourContent />
 * </ContainerWrapper>
 *
 * @example
 * // Usage with custom styles
 * <ContainerWrapper sx={{ backgroundColor: 'grey.100', py: 4 }}>
 *   <YourContent />
 * </ContainerWrapper>
 */
export default function ContainerWrapper({ children, sx }) {
  const theme = useTheme();
  const upMD = useMediaQuery(theme.breakpoints.up('md'));
  const upXL = useMediaQuery(theme.breakpoints.up('xl'));
  const downMD = useMediaQuery(theme.breakpoints.down('md'));

  const isDesktop = (upMD || upXL) && !downMD;

  return (
    <Container {...(isDesktop && { maxWidth: upXL ? 'xl' : 'lg' })} sx={{ ...(downMD && { px: { xs: 2, sm: 4, md: 0 } }), ...sx }}>
      {children}
    </Container>
  );
}

ContainerWrapper.propTypes = { children: PropTypes.any, sx: PropTypes.any };
