'use client';
import PropTypes from 'prop-types';

// @mui
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import MotionWrapper from '@/components/MotionWrapper';
import SvgIcon from '@/components/SvgIcon';
import useTranslation from '@/hooks/useTranslation';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  PROJECT - SIMPLE TESTIMONIAL  ***************************/

function StarRating({ rating }) {
  return (
    <Stack direction="row" spacing={0.5}>
      {Array.from({ length: 5 }).map((_, index) => (
        <SvgIcon
          key={index}
          name={index < rating ? 'tabler-star-filled' : 'tabler-star'}
          size={20}
          color={index < rating ? 'warning.main' : 'text.disabled'}
        />
      ))}
    </Stack>
  );
}

StarRating.propTypes = { rating: PropTypes.number.isRequired };

export default function SimpleTestimonial({ name, review, reviewKey, rating }) {
  const { t } = useTranslation();

  const reviewText = reviewKey ? t(reviewKey) : review;

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <MotionWrapper variant="slideInFromBottom">
        <GraphicsCard>
          <Box sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
            <Stack spacing={{ xs: 2, sm: 3 }} alignItems="center" textAlign="center">
              {/* Quote icon */}
              <SvgIcon name="tabler-quote" size={40} color="primary.main" />

              {/* Review text */}
              {reviewText && (
                <Typography variant="h5" sx={{ color: 'text.secondary', fontStyle: 'italic', maxWidth: 720, lineHeight: 1.7 }}>
                  {reviewText}
                </Typography>
              )}

              {/* Rating */}
              {rating && <StarRating rating={rating} />}

              {/* Reviewer name */}
              {name && (
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Avatar sx={{ bgcolor: 'primary.lighter', color: 'primary.main', width: 44, height: 44 }}>
                    <SvgIcon name="tabler-user" size={22} color="primary.main" />
                  </Avatar>
                  <Typography variant="h5" fontWeight={600}>
                    {name}
                  </Typography>
                </Stack>
              )}
            </Stack>
          </Box>
        </GraphicsCard>
      </MotionWrapper>
    </ContainerWrapper>
  );
}

SimpleTestimonial.propTypes = {
  name: PropTypes.string,
  review: PropTypes.string,
  reviewKey: PropTypes.string,
  rating: PropTypes.number
};
