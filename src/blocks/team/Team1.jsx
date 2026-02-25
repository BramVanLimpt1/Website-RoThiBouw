'use client';
import PropTypes from 'prop-types';

// @mui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';

// @project
import { ProfileCard1 } from '@/components/cards/profile-card';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';

import useTranslation from '@/hooks/useTranslation';

import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  TEAM - 1 HELPER  ***************************/

function getGridSize(index, length) {
  switch (length) {
    case 1:
      return 12; // Full width for a single member
    case 2:
      return 6; // Two members per row
    case 3:
      return 4; // Three members per row
    case 4:
      return 3; // Four members per row
    default:
      // For more than 4, aim for 3-4 per row, adjust as needed for responsiveness
      return { xs: 6, sm: 6, md: 4 }; 
  }
}

/***************************  TEAM - 1  ***************************/

export default function Team1({ headingKey, captionKey, members }) {
  const { t } = useTranslation();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: 4, alignItems: 'center' }}>
        <Typeset {...{ 
          heading: t(headingKey), 
          caption: t(captionKey), 
          stackProps: { sx: { alignItems: 'center' } }, 
          headingProps: { sx: { textAlign: 'center' } }, 
          captionProps: { sx: { textAlign: 'center' } } 
        }} />
        <Grid container spacing={1.5} justifyContent="center">
          {members.map((item, index) => (
            <Grid 
              key={index} 
              size={{ xs: 12, sm: getGridSize(index, members.length) }}
            >
              <ProfileCard1 {...item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

Team1.propTypes = {
  headingKey: PropTypes.string,
  captionKey: PropTypes.string,
  members: PropTypes.array
};
