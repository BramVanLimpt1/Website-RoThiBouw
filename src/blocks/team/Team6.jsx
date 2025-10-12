import PropTypes from 'prop-types';
import React from 'react';

// @mui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ProfileCard3 from '@/components/cards/profile-card/ProfileCard3';
import ContainerWrapper from '@/components/ContainerWrapper';
import GraphicsImage from '@/components/GraphicsImage';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types

/***************************  TEAM - 6  ***************************/

export default function Team6({ heading, caption, members, image, actionBtn, description }) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Stack sx={{ gap: 4, alignItems: 'center' }}>
          <Typeset {...{ heading, caption, stackProps: { sx: { textAlign: 'center' } } }} />
          {actionBtn && <Button variant="outlined" size="large" {...actionBtn} />}
        </Stack>
        <Stack sx={{ gap: 1 }}>
          {image && (
            <GraphicsImage sx={{ width: 1, height: { xs: 225, sm: 294, md: 396 }, borderRadius: { xs: 6, sm: 8, md: 10 } }} image={image} />
          )}
          <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {members.map((item, index) => (
            <Grid
              key={index}
              // For avatar responsive size
              sx={{ '& .MuiAvatar-root': { width: { xs: 80, sm: 100, md: 120 }, height: { xs: 80, sm: 100, md: 120 } } }}
              size={{ xs: 6, sm: 3 }}
            >
              <ProfileCard3 {...item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

Team6.propTypes = {
  heading: PropTypes.any,
  caption: PropTypes.any,
  members: PropTypes.any,
  image: PropTypes.any,
  actionBtn: PropTypes.any,
  description: PropTypes.any
};
