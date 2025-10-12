import PropTypes from 'prop-types';
// @next
import NextLink from 'next/link';

// @mui
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  COOKIE - 2  ***************************/

export default function Cookie2({ heading, primaryBtn, secondaryBtn, cookie }) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <GraphicsCard sx={{ width: { xs: 1, sm: 345, md: 600 } }}>
        <Box sx={{ padding: { xs: 2, sm: 3, md: 5 } }}>
          <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <SvgIcon name="tabler-cookie" size={40} stroke={1} />
            <IconButton rel="noopener noreferrer" aria-label="cookie2-close">
              <SvgIcon name="tabler-x" />
            </IconButton>
          </Stack>
        </Box>
        <GraphicsCard sx={{ width: { xs: 1, sm: 345, md: 600 }, bgcolor: 'grey.200' }}>
          <Box sx={{ padding: { xs: 2, sm: 3, md: 5 } }}>
            <Stack sx={{ gap: { xs: 3, md: 4 } }}>
              <Stack sx={{ gap: 1 }}>
                <Typography variant="h4">{heading}</Typography>
                <Typography>
                  {cookie.caption}
                  {cookie.link && (
                    <>
                      &nbsp;
                      <Link component={NextLink} {...cookie.link} underline="always" />
                    </>
                  )}
                </Typography>
              </Stack>
              {(primaryBtn || secondaryBtn) && (
                <Stack direction="row" sx={{ justifyContent: 'space-between', gap: 1.5 }}>
                  {primaryBtn && <Button fullWidth variant="outlined" {...primaryBtn} />}
                  {secondaryBtn && <Button fullWidth variant="contained" {...secondaryBtn} />}
                </Stack>
              )}
            </Stack>
          </Box>
        </GraphicsCard>
      </GraphicsCard>
    </ContainerWrapper>
  );
}

Cookie2.propTypes = { heading: PropTypes.string, primaryBtn: PropTypes.any, secondaryBtn: PropTypes.any, cookie: PropTypes.object };
