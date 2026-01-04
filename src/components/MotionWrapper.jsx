'use client';

import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/**
 * MotionWrapper Component
 *
 * Reusable wrapper for consistent animations across the template.
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content to wrap and animate
 * @param {boolean} [props.animate=true] - Optional. Enable/disable animation. If false, children render without motion wrapper
 * @param {number} [props.delay=0] - Optional. Animation delay in seconds (e.g., 0.2, 0.4, 0.6)
 * @param {number} [props.duration=0.4] - Optional. Animation duration in seconds
 * @param {string} [props.style=''] - Optional. Additional inline styles to apply to the wrapper
 *
 * @returns {JSX.Element} A motion.div wrapping the children with specified animation
 * 
 * @example
 * ```jsx
 * // Animated header (default)
 * <MotionWrapper>
 *   <Typeset heading="Title" caption="Description" />
 * </MotionWrapper>
 *
 * // Static header (no animation)
 * <MotionWrapper animate={false}>
 *   <Typeset heading="Title" caption="Description" />
 * </MotionWrapper>
 *
 * // Animated with delay
 * <MotionWrapper delay={0.2}>
 *   <div>Delayed content</div>
 * </MotionWrapper>
 *
 * // Multiple animated elements with staggered delays
 * {items.map((item, index) => (
 *   <MotionWrapper key={index} delay={index * 0.1}>
 *     <Card {...item} />
 *   </MotionWrapper>
 * ))}
 * ```
 */
export default function MotionWrapper({ children, animate = true, delay = 0, duration = 0.4, style = {} }) {
  if (!animate) {
    return children;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration,
        delay
      }}
      style={{ height: '100%', ...style }}
    >
      {children}
    </motion.div>
  );
}

MotionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  animate: PropTypes.bool,
  delay: PropTypes.number,
  duration: PropTypes.number,
  style: PropTypes.object
};
