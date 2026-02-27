// @project
import { FONT_ARCHIVO, FONT_FIGTREE } from '@/config';

/***************************  DEFAULT THEME - TYPOGRAPHY  ***************************/

export default function typography(theme) {
  return {
    fontFamily: FONT_ARCHIVO,

    // Heading - large
    h1: {
      fontWeight: 400,
      fontSize: 57,

      // LineHeight = lineHeight in figma / fontSize. i.e 1.123 = 64/57
      lineHeight: 1.123,
      letterSpacing: -0.25,
      [theme.breakpoints.down('md')]: {
        fontSize: 45,
        lineHeight: 1.156
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 32,
        lineHeight: 1.222
      }
    },

    // Heading - medium
    h2: {
      fontWeight: 400,
      fontSize: 45,
      lineHeight: 1.156,
      letterSpacing: 0,
      [theme.breakpoints.down('md')]: {
        fontSize: 36,
        lineHeight: 1.222
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 24,
        lineHeight: 1.333
      }
    },

    // Display - medium
    h3: {
      fontWeight: 400,
      fontSize: 28,
      lineHeight: 1.286,
      letterSpacing: 0,
      [theme.breakpoints.down('md')]: {
        fontSize: 24,
        lineHeight: 1.333
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 20,
        lineHeight: 1.4
      }
    },

    // Display - small
    h4: {
      fontWeight: 400,
      fontSize: 24,
      lineHeight: 1.333,
      letterSpacing: 0,
      [theme.breakpoints.down('md')]: {
        fontSize: 20,
        lineHeight: 1.4
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
        lineHeight: 1.5
      }
    },

    // Label - large
    h5: {
      fontFamily: FONT_FIGTREE,
      fontWeight: 500,
      fontSize: 22,
      lineHeight: 1.273,
      letterSpacing: 0,
      [theme.breakpoints.down('md')]: {
        fontSize: 16,
        lineHeight: 1.5,
        letterSpacing: 0.15
      }
    },

    // Paragraph - large
    h6: {
      fontFamily: FONT_FIGTREE,
      fontWeight: 400,
      fontSize: 22,
      lineHeight: 1.364,
      letterSpacing: 0,
      [theme.breakpoints.down('md')]: {
        fontSize: 16,
        lineHeight: 1.5,
        letterSpacing: 0.5
      }
    },

    // Paragraph - medium
    body1: {
      fontFamily: FONT_FIGTREE,
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0.5,
      [theme.breakpoints.down('md')]: {
        fontSize: 14,
        lineHeight: 1.429,
        letterSpacing: 0.25
      }
    },

    // Paragraph - small
    body2: {
      fontFamily: FONT_FIGTREE,
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 1.429,
      letterSpacing: 0.25,
      [theme.breakpoints.down('md')]: {
        fontSize: 12,
        lineHeight: 1.5
      }
    },

    // Label - medium
    subtitle1: {
      fontFamily: FONT_FIGTREE,
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0.15,
      [theme.breakpoints.down('md')]: {
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 1.429,
        letterSpacing: 0.1
      }
    },

    // Label - small
    subtitle2: {
      fontFamily: FONT_FIGTREE,
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.429,
      letterSpacing: 0.1,
      [theme.breakpoints.down('md')]: {
        fontSize: 12,
        lineHeight: 1.5
      }
    },

    // Hyperlink - small
    caption: {
      fontFamily: FONT_FIGTREE,
      fontWeight: 600,
      fontSize: 12,
      lineHeight: 1.333,
      letterSpacing: 0
    },

    // Hyperlink - large
    caption1: {
      fontFamily: FONT_FIGTREE,
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0.5
    },

    // Hyperlink - medium
    caption2: {
      fontFamily: FONT_FIGTREE,
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.429,
      letterSpacing: 0.1
    },

    // Button
    button: {
      textTransform: 'capitalize'
    }
  };
}
