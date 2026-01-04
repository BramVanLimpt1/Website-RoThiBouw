import PropTypes from 'prop-types';

// @mui
import Stack from '@mui/material/Stack';

// @project
import SvgIcon from './SvgIcon';

import { IconType } from '@/enum';

/***************************  RATING  ***************************/

/**
 * Rating Component
 * 
 * A customizable star rating component that displays a row of stars based on the given rating.
 * Filled stars represent the rating value, while unfilled stars represent the remaining count.
 * 
 * @param {Object} props - Component props
 * @param {number} [props.count=5] - Optional. Total number of stars to display (default is 5).
 *   - Example: 5, 10
 * @param {number} props.rate - The current rating value (number of filled stars).
 *   - Should be between 0 and count
 *   - Example: 3, 4.5
 * @param {number} [props.starSize=20] - Optional. Size of each star in pixels (default is 20).
 *   - Example: 16, 24, 32
 * @param {Object} [props.rest] - Optional. Additional props to pass to the Stack container.
 *   - Supports all Stack props (spacing, direction, alignItems, etc.)
 *   - Use 'sx' for custom MUI styling (gap will be set to 0.75 by default)
 *   - Example: { sx: { mb: 2 }, alignItems: 'center' }
 * 
 * @returns {JSX.Element} A Stack component containing star icons representing the rating
 * 
 * @example
 * // Basic usage with 5 stars and a rating of 3
 * <Rating rate={3} />
 * 
 * @example
 * // Custom star size and total count
 * <Rating count={10} rate={7} starSize={24} />
 * 
 * @example
 * // With additional styling
 * <Rating rate={4} starSize={30} rest={{ sx: { mb: 3 }, alignItems: 'center' }} />
 */
export default function Rating({ count = 5, rate, starSize = 20, ...rest }) {
  return (
    <Stack direction="row" {...rest} sx={{ gap: 0.75, ...(rest.sx && { ...rest.sx }) }}>
      {Array.from({ length: count }, (_, index) => {
        const color = rate && index > rate - 1 ? 'primary.lighter' : 'primary.main';
        return <SvgIcon name="tabler-filled-star" size={starSize} key={index} type={IconType.FILL} color={color} />;
      })}
    </Stack>
  );
}

Rating.propTypes = { count: PropTypes.number, rate: PropTypes.number, starSize: PropTypes.number, rest: PropTypes.any };
