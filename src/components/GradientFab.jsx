import PropTypes from 'prop-types';

// @mui
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import RoundFab from '@/images/graphics/RoundFab';
import StarFab from '@/images/graphics/StarFab';

/***************************  COMMON - GRADIENT FAB  ***************************/

/**
 * GradientFab Component
 *
 * A floating action button (FAB) with a gradient background that can be either round or star-shaped.
 * The button displays a centered icon and adjusts its size based on the provided prop.
 *
 * @param {Object} props - Component props
 * @param {JSX.Element} props.icon - The icon to display at the center of the FAB.
 * @param {string} props.type - The type of FAB shape ('round' or 'star').
 * @param {number} props.size - The size of the FAB in pixels.
 *
 * @returns {JSX.Element} A Stack component containing the gradient FAB with the specified icon
 *
 * @example
 * // Round FAB with a home icon
 * <GradientFab icon={<HomeIcon />} type="round" size={60} />
 *
 * @example
 * // Star-shaped FAB with a star icon
 * <GradientFab icon={<StarIcon />} type="star" size={80} />
 */
export default function GradientFab({ icon, type, size }) {
  return (
    <Stack sx={{ position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
      {type === 'star' ? <StarFab size={size} /> : <RoundFab size={size} />}
      <Box sx={{ background: 'none', position: 'absolute', top: '50%', left: '50%', transform: `translate(-50%, -50%)` }}>{icon}</Box>
    </Stack>
  );
}

GradientFab.propTypes = { icon: PropTypes.node, type: PropTypes.string, size: PropTypes.number };
