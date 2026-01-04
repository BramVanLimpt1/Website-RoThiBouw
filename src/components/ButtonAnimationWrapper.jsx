'use client';
import PropTypes from 'prop-types';

// @third-party
import { motion } from 'framer-motion';

/***************************  COMMON - BUTTON ANIMATION  ***************************/

/**
 * ButtonAnimationWrapper Component
 *
 * A reusable wrapper that adds interactive animations to buttons and clickable elements.
 * Utilizes framer-motion to provide smooth scaling effects on hover and tap interactions.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The button or clickable element to wrap and animate.
 * @param {Object} [props.style] - Optional. Additional inline styles to apply to the motion wrapper.
 *
 * @returns {JSX.Element} A motion.div wrapping the children with button animations
 *
 * @example
 * // Basic usage
 * <ButtonAnimationWrapper>
 *   <Button>Click Me</Button>
 * </ButtonAnimationWrapper>
 *
 * @example
 * // Usage with custom styles
 * <ButtonAnimationWrapper style={{ margin: '10px' }}>
 *   <IconButton>
 *     <SvgIcon name="tabler-heart" />
 *   </IconButton>
 * </ButtonAnimationWrapper>
 */
export default function ButtonAnimationWrapper({ children, style }) {
  return (
    <motion.div
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      tabIndex={-1}
      style={style}
    >
      {children}
    </motion.div>
  );
}

ButtonAnimationWrapper.propTypes = { children: PropTypes.any, style: PropTypes.any };
