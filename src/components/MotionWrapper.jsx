'use client';
import PropTypes from 'prop-types';

// @react
import { motion } from 'framer-motion';

/***************************  COMMON - MOTION WRAPPER  ***************************/

export default function MotionWrapper({
  children,
  animate = true,
  delay = 0,
  duration = 0.4,
  variant = 'fadeIn',
  direction = 'left',
  style = {}
}) {
  if (!animate) {
    return children;
  }

  const getAnimationConfig = () => {
    const baseConfig = {
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration, delay }
    };

    switch (variant) {
      case 'slideInFromSide':
        return {
          ...baseConfig,
          initial: {
            opacity: 0,
            x: direction === 'left' ? -50 : 50
          },
          whileInView: { opacity: 1, x: 0 }
        };
      case 'slideInFromBottom':
        return {
          ...baseConfig,
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 }
        };
      case 'scaleIn':
        return {
          ...baseConfig,
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 }
        };
      case 'fadeIn':
      default:
        return {
          ...baseConfig,
          initial: { opacity: 0, y: 10 }
        };
    }
  };

  const animationConfig = getAnimationConfig();

  return (
    <motion.div {...animationConfig} style={{ height: '100%', ...style }}>
      {children}
    </motion.div>
  );
}

MotionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  animate: PropTypes.bool,
  delay: PropTypes.number,
  duration: PropTypes.number,
  variant: PropTypes.oneOf(['fadeIn', 'slideInFromSide', 'slideInFromBottom', 'scaleIn']),
  direction: PropTypes.oneOf(['left', 'right']),
  style: PropTypes.object
};
