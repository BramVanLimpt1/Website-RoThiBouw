'use client';

import { useEffect, useState } from 'react';

// @mui
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import SvgIcon from './SvgIcon';

/***************************  COMMON - SCROLL TO TOP BUTTON  ***************************/

/**
 * ScrollFab Component
 * 
 * A floating action button (FAB) that appears when the user scrolls down the page.
 * When clicked, it smoothly scrolls the user back to the top of the page.
 * The button uses framer-motion for fade-in and slide-up animations.
 * 
 * @returns {JSX.Element} A floating action button for scrolling to the top
 * 
 * @example
 * // Basic usage
 * <ScrollFab />
 */
export default function ScrollFab() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If the user scrolls down, show the button
    const toggleVisibility = () => setIsVisible(window.scrollY > 400);

    // Attach scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Remove event listener on component unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Handles the animation when scrolling to the top
  const scrollToTop = () => isVisible && window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {isVisible && (
        <Box sx={{ position: 'fixed', zIndex: 1, right: { xs: 20, md: 40 }, bottom: { xs: 20, md: 40 } }}>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }}>
            <Fab
              color="primary"
              rel="noopener noreferrer"
              aria-label="scroll to top"
              onClick={scrollToTop}
              sx={{ width: { xs: 40, lg: 52 }, height: { xs: 40, lg: 52 } }}
            >
              <SvgIcon name="tabler-arrow-up" color="background.default" />
            </Fab>
          </motion.div>
        </Box>
      )}
    </>
  );
}
