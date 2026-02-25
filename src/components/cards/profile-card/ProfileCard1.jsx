'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import SvgIcon from '@/components/SvgIcon';

import { BORDER_RADIUS } from '@/utils/constant';

/***************************  PROFILE CARD - 1  ***************************/

export default function ProfileCard1({ name, role, avatar, phone }) {
  const theme = useTheme();

  const refName = useRef(null);
  const refRole = useRef(null);

  // Function to compare the actual width of the name element with its container width
  const compareSizeName = () => {
    const compare = refName.current && refName.current.scrollWidth > refName.current.clientWidth;
    setHoverName(compare);
  };

  useEffect(() => {
    compareSizeName();
    window.addEventListener('resize', compareSizeName);
    window.removeEventListener('resize', compareSizeName);
  }, []);

  // Function to compare the actual width of the role element with its container width
  const compareSizeRole = () => {
    const compare = refRole.current && refRole.current.scrollWidth > refRole.current.clientWidth;
    setHoverRole(compare);
  };

  useEffect(() => {
    compareSizeRole();
    window.addEventListener('resize', compareSizeRole);
    window.removeEventListener('resize', compareSizeRole);
  }, []);

  return (
    <GraphicsCard sx={{ borderRadius: BORDER_RADIUS.xs }}>
      <Stack>
        <GraphicsCard bgImage={avatar} sx={{ height: { xs: 180, sm: 240, md: 300 }, bgcolor: alpha(theme.palette.grey[600], 0.6), borderRadius: BORDER_RADIUS.xs }} />
        <Stack sx={{ gap: { xs: 0.25, sm: 0.5 }, padding: { xs: 1.5, sm: 2, md: 3 } }}>
            <Typography variant="h4" noWrap sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {name}
            </Typography>
            <Typography noWrap sx={{ color: 'text.secondary', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {role}
            </Typography>
          {phone && (
            <Box sx={{ mt: { xs: 1, sm: 1.5, md: 2 }, textAlign: 'center' }}>
              <NextLink href={phone} passHref>
                <a
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px', // Equivalent to p:1
                    borderRadius: '50%',
                    backgroundColor: 'transparent',
                    textDecoration: 'none',
                    color: theme.palette.primary.main // Using theme from context for consistency
                  }}
                >
                  <SvgIcon name="tabler-phone" color="primary" />
                </a>
              </NextLink>
            </Box>
          )}
        </Stack>
      </Stack>
    </GraphicsCard>
  );
}

ProfileCard1.propTypes = { 
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  phone: PropTypes.string
};
