'use client';
import PropTypes from 'prop-types';

import { useEffect, useRef } from 'react';

// @mui
import Typography from '@mui/material/Typography';

// @third-party
import { useInView, useMotionValue, useSpring } from 'framer-motion';

/***************************  COMMON - COUNTER ANIMATION  ***************************/

/**
 * Counter Component
 *
 * A numeric counter that animates from a starting value to a target value when it enters the viewport.
 * Utilizes framer-motion for smooth spring-based animations.
 *
 * @param {Object} props - Component props
 * @param {number} props.value - The target numeric value to count up or down to.
 * @param {string} [props.direction='up'] - The direction of the count animation ('up' or 'down').
 *
 * @returns {JSX.Element} A Typography component displaying the animated counter
 *
 * @example
 * // Count up to 1000
 * <Counter value={1000} direction="up" />
 *
 * @example
 * // Count down to 500
 * <Counter value={500} direction="down" />
 */
export default function Counter({ value, direction = 'up' }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  const isInView = useInView(ref, { once: true, margin: '-1px' });

  const springValue = useSpring(motionValue, {
    damping: 5,
    stiffness: 5,
    duration: 0.001
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === 'down' ? 0 : value);
    }
  }, [motionValue, isInView, direction, value]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat('en-US').format(Number(latest.toFixed(0)));
        }
      }),
    [springValue]
  );

  return <Typography variant="body1" typography="h1" ref={ref}></Typography>;
}

Counter.propTypes = { value: PropTypes.number, direction: PropTypes.oneOf(['up', 'down']) };
