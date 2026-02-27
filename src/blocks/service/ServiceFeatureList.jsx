'use client';
import PropTypes from 'prop-types';

// @next
import Image from 'next/image';

// @mui
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import MotionWrapper from '@/components/MotionWrapper';
import SvgIcon from '@/components/SvgIcon';
import useTranslation from '@/hooks/useTranslation';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  SERVICE - FEATURE LIST  ***************************/

export default function ServiceFeatureList({ featureKeys, image, reverse = false }) {
  const { t } = useTranslation();

  const listContent = (
    <MotionWrapper variant="slideInFromSide" direction={reverse ? 'right' : 'left'}>
      <List disablePadding>
        {featureKeys.map((featureKey, index) => (
          <ListItem key={index} disablePadding sx={{ py: 0.75 }}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              <SvgIcon name="tabler-check" size={20} color="primary.main" stroke={2} />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="body1">{t(featureKey)}</Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </MotionWrapper>
  );

  const imageContent = (
    <MotionWrapper variant="slideInFromSide" direction={reverse ? 'left' : 'right'} delay={0.2}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: 300, sm: 350, md: 400 },
          borderRadius: { xs: 6, sm: 8, md: 10 },
          overflow: 'hidden'
        }}
      >
        <Image src={image} alt="Service features" fill style={{ objectFit: 'cover' }} />
      </Box>
    </MotionWrapper>
  );

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 3, sm: 4, md: 5 }} alignItems="center">
        <Grid size={{ xs: 12, md: 7 }}>{reverse ? imageContent : listContent}</Grid>
        <Grid size={{ xs: 12, md: 5 }}>{reverse ? listContent : imageContent}</Grid>
      </Grid>
    </ContainerWrapper>
  );
}

ServiceFeatureList.propTypes = {
  featureKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  reverse: PropTypes.bool
};
