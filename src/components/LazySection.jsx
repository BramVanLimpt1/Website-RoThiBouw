'use client';
import PropTypes from 'prop-types';

import { useState, useRef, useEffect, createElement, useMemo } from 'react';

// @mui
import Box from '@mui/material/Box';

// @project
import Loader from '@/components/Loader';

/***************************  COMMON - LAZY SECTION  ***************************/

/**
 * LazySection Component
 *
 * A component that lazily loads and renders sections when they enter the viewport.
 * Utilizes Intersection Observer to detect visibility and dynamically imports section components.
 * Displays a fallback loader while loading the sections.
 *
 * @param {Object} props - Component props
 * @param {Object|Object[]} props.sections - A single section object or an array of section objects to load.
 *   Each section object should have:
 *     - importFunc: A function that returns a dynamic import promise for the section component.
 *     - props: An object of props to pass to the loaded section component.
 * @param {JSX.Element} [props.fallback=<Loader />] - Optional. A fallback component to display while loading sections.
 * @param {string} [props.offset='0px'] - Optional. The root margin offset for the Intersection Observer.
 *   - Example: '0px', '100px', '0px 0px -100px 0px'
 * @param {number} [props.placeholderHeight=400] - Optional. Minimum height in pixels for the placeholder box.
 *   - Ensures space is reserved for lazy-loaded sections.
 *
 * @returns {JSX.Element} A Box component that loads and renders sections lazily
 *
 * @example
 * // Basic usage with a single section
 * <LazySection
 *   sections={{
 *     importFunc: () => import('@/sections/HeroSection'),
 *     props: { title: 'Welcome', subtitle: 'Discover our services' }
 *   }}
 * />
 *
 * @example
 * // Usage with multiple sections
 * <LazySection
 *   sections={[
 *     {
 *       importFunc: () => import('@/sections/AboutSection'),
 *       props: { heading: 'About Us' }
 *     },
 *     {
 *       importFunc: () => import('@/sections/ServicesSection'),
 *       props: { services: serviceList }
 *     }
 *   ]}
 *   fallback={<CustomLoader />}
 *   offset="0px 0px -200px 0px"
 *   placeholderHeight={600}
 * />
 */
export default function LazySection({ sections, fallback = <Loader />, offset = '0px', placeholderHeight = 400 }) {
  const sectionList = useMemo(() => (Array.isArray(sections) ? sections : [sections]), [sections]);
  const [isVisible, setIsVisible] = useState(false);
  const [loadedComponents, setLoadedComponents] = useState(Array(sectionList.length).fill(null));
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          Promise.all(sectionList.map((section) => section.importFunc().then((module) => module.default))).then((components) =>
            setLoadedComponents(components)
          );
        }
      },
      { rootMargin: offset, threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [sectionList, offset, isVisible]);

  return (
    <Box ref={ref} sx={{ minHeight: placeholderHeight }}>
      {isVisible && loadedComponents.every((component) => component)
        ? sectionList.map((section, index) => createElement(loadedComponents[index], { key: index, ...section.props }))
        : isVisible && fallback}
    </Box>
  );
}

LazySection.propTypes = {
  sections: PropTypes.oneOfType([PropTypes.any, PropTypes.array]),
  fallback: PropTypes.node,
  Loader: PropTypes.any,
  offset: PropTypes.string,
  placeholderHeight: PropTypes.number
};
