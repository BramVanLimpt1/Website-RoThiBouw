'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

//@project
import { IconType } from '@/enum';

/***************************  COMMON - SVG ICON  ***************************/

const spritePaths = {
  [IconType.STROKE]: '/assets/svg/tabler-sprite-outline.svg',
  [IconType.FILL]: '/assets/svg/tabler-sprite-fill.svg',
  [IconType.CUSTOM]: '/assets/svg/sprite-custom.svg'
};

/**
 * SvgIcon Component
 * 
 * Renders SVG icons from sprite sheets with support for multiple icon types (stroke, fill, custom).
 * Automatically handles color, stroke width, and theming based on the icon type and MUI theme.
 * Uses SVG sprite sheets for optimized performance and automatic theme integration.
 * 
 * @param {Object} props - Component props
 * @param {string} props.name - The icon name corresponding to an ID in the sprite sheet.
 *   - Used to reference the correct SVG from the sprite (e.g., 'icon-name' maps to #icon-name)
 *   - Example: 'home', 'settings', 'user'
 * @param {number} [props.size=24] - Optional. The width and height of the icon in pixels.
 *   - Stroke width adapts intelligently: ≤24px = 2.5, ≤32px = 2, >32px = 1.5
 *   - Example: 16, 24, 32, 48
 * @param {IconType} [props.type=IconType.STROKE] - Optional. The type of icons to render.
 *   - IconType.STROKE: Outline icons from tabler-sprite-outline.svg (default color: primary.main)
 *   - IconType.FILL: Solid icons from tabler-sprite-fill.svg (default color: primary.light)
 *   - IconType.CUSTOM: Custom icons from sprite-custom.svg (default color: text.primary)
 * @param {string} [props.color] - Optional. The stroke/primary color of the icon.
 *   - Overrides theme default colors for STROKE and CUSTOM types
 *   - Supports MUI palette colors (e.g., 'primary.main', 'error', 'text.secondary')
 *   - Example: 'primary.main', '#ff0000', 'rgba(0,0,0,0.5)'
 * @param {number} [props.stroke] - Optional. The stroke width of the icon.
 *   - Overrides intelligent defaults based on size and type
 *   - Example: 1, 1.5, 2, 2.5
 * @param {string} [props.twoToneColor] - Optional. Secondary color for fill or two-tone elements.
 *   - Used for FILL type icons or elements with data-two-tone="true"
 *   - Defaults to primary.light if not specified
 *   - Supports MUI palette colors
 *   - Example: 'secondary.main', '#00ff00'
 * 
 * @returns {JSX.Element} A Box component containing an SVG element with sprite reference
 * 
 * @example
 * // Basic stroke icon with defaults
 * <SvgIcon name="home" />
 * 
 * @example
 * // Larger fill icon with custom color
 * <SvgIcon name="star" size={32} type={IconType.FILL} color="warning.main" />
 * 
 * @example
 * // Custom icon with specific stroke width and two-tone coloring
 * <SvgIcon
 *   name="logo-custom"
 *   size={48}
 *   type={IconType.CUSTOM}
 *   color="primary.main"
 *   stroke={2}
 *   twoToneColor="secondary.main"
 * />
 * 
 * @example
 * // Small icon with error color
 * <SvgIcon name="alert" size={16} color="error.main" />
 */
export default function SvgIcon({ name, size = 24, type = IconType.STROKE, color, stroke, twoToneColor }) {
  const theme = useTheme();

  const fillColor = type !== IconType.STROKE ? twoToneColor || theme.palette.primary.light : undefined;
  const strokeColor =
    type !== IconType.FILL ? color || (type === IconType.CUSTOM ? theme.palette.text.primary : theme.palette.primary.main) : undefined;

  const defaultStroke = size <= 24 ? 2.5 : size <= 32 ? 2 : 1.5;
  const strokeWidth = stroke !== undefined ? stroke : type === IconType.CUSTOM ? defaultStroke : type !== IconType.FILL ? 1.5 : undefined;

  return (
    <Box
      role="none"
      sx={{
        '& svg': {
          verticalAlign: 'middle',
          display: 'block',
          color: color || (type === IconType.CUSTOM ? 'text.primary' : 'primary.main'),
          '& [data-two-tone="true"]': { color: twoToneColor || theme.palette.primary.light }
        }
      }}
    >
      <svg
        className={name}
        width={size}
        height={size}
        {...(fillColor && { fill: fillColor })}
        {...(strokeColor && { stroke: strokeColor })}
        {...(strokeWidth && { strokeWidth })}
      >
        <use xlinkHref={`${spritePaths[type]}#${name}`} />
      </svg>
    </Box>
  );
}

SvgIcon.propTypes = {
  name: PropTypes.any,
  size: PropTypes.number,
  type: PropTypes.any,
  IconType: PropTypes.any,
  STROKE: PropTypes.any,
  color: PropTypes.any,
  stroke: PropTypes.any,
  twoToneColor: PropTypes.any
};
