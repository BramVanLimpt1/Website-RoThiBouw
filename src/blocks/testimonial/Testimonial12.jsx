'use client';
import PropTypes from 'prop-types';

// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { GraphicsCard } from '@/components/cards';
import Rating from '@/components/Rating';

import useTranslation from '@/hooks/useTranslation';

/***************************  TESTIMONIAL 12  ***************************/

export default function Testimonial12({ name, review, reviewKey, rating }) {
  const { t } = useTranslation();

  return (
    <GraphicsCard>
      <Box sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
        <Stack spacing={3} alignItems="center">
          {rating && <Rating rate={rating} sx={{ justifyContent: 'center' }} />}
          <Typography
            variant="h4"
            sx={{
              color: 'text.secondary',
              textAlign: 'center',
              fontStyle: 'italic',
              '&:before': { content: 'open-quote' },
              '&:after': { content: 'close-quote' }
            }}
          >
            {reviewKey ? t(reviewKey) : review}
          </Typography>

          {name && (
            <Typography variant="h6" sx={{ fontWeight: 600, textAlign: 'center' }}>
              {name}
            </Typography>
          )}
        </Stack>
      </Box>
    </GraphicsCard>
  );
}

Testimonial12.propTypes = {
  name: PropTypes.string,
  review: PropTypes.string,
  reviewKey: PropTypes.string,
  rating: PropTypes.number
};
