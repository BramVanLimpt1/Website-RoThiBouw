'use client';
import PropTypes from 'prop-types';

// @mui
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import MotionWrapper from '@/components/MotionWrapper';
import SvgIcon from '@/components/SvgIcon';

import useTranslation from '@/hooks/useTranslation';

import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  PROJECT SPECS & DESCRIPTION  ***************************/

export default function ProjectSpecsDescription({
  specifications,
  description,
  descriptionKey,
  specsTitle,
  specsTitleKey,
  reverse,
  overlineKey,
  descriptionHighlight,
  specsAsCards
}) {
  const { t } = useTranslation();

  const descriptionText = descriptionKey ? t(descriptionKey) : description;
  const specsTitleText = specsTitleKey ? t(specsTitleKey) : specsTitle;

  // Idea 1: card-per-item layout for feature highlights
  const specsAsCardsContent = (
    <Stack spacing={2}>
      {specifications.map((item, index) => (
        <MotionWrapper key={index} variant="slideInFromSide" direction={reverse ? 'right' : 'left'} delay={0.1 * index}>
          <GraphicsCard>
            <Box sx={{ p: { xs: 2, sm: 2.5 } }}>
              <Stack direction="row" spacing={2} alignItems="center">
                {item.icon && (
                  <Avatar
                    sx={{
                      bgcolor: 'primary.lighter',
                      width: { xs: 44, sm: 52 },
                      height: { xs: 44, sm: 52 },
                      borderRadius: 2,
                      flexShrink: 0,
                      '& svg': { width: { xs: 20, sm: 24 }, height: { xs: 20, sm: 24 } }
                    }}
                  >
                    <SvgIcon name={item.icon} color="primary.main" />
                  </Avatar>
                )}
                <Stack spacing={0.25}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {item.valueKey ? t(item.valueKey) : item.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {item.labelKey ? t(item.labelKey) : item.label}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </GraphicsCard>
        </MotionWrapper>
      ))}
    </Stack>
  );

  // Default list layout (existing behaviour)
  const specsAsListContent = (
    <GraphicsCard>
      <Box sx={{ p: { xs: 2, sm: 3, md: 5 } }}>
        <Stack spacing={{ xs: 2, sm: 3 }}>
          {specsTitleText && (
            <Typography variant="h4" component="h3">
              {specsTitleText}
            </Typography>
          )}
          <List disablePadding>
            {specifications.map((item, index) => (
              <ListItem
                disablePadding
                key={index}
                sx={{
                  pb: index < specifications.length - 1 ? { xs: 2, sm: 2.5, md: 3 } : 0,
                  pt: index > 0 ? { xs: 2, sm: 2.5, md: 3 } : 0,
                  alignItems: 'flex-start'
                }}
              >
                {item.icon && (
                  <ListItemAvatar sx={{ minWidth: { xs: 52, sm: 60, md: 76 }, height: 60 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.lighter',
                        width: { xs: 40, sm: 48, md: 60 },
                        height: { xs: 40, sm: 48, md: 60 },
                        borderRadius: 2,
                        '& svg': { width: { xs: 16, sm: 20, md: 24 }, height: { xs: 16, sm: 20, md: 24 } }
                      }}
                    >
                      <SvgIcon name={item.icon} color="primary.main" />
                    </Avatar>
                  </ListItemAvatar>
                )}
                <ListItemText sx={{ my: 0 }}>
                  <Stack sx={{ gap: { xs: 0.5, sm: 1 } }}>
                    <Typography variant="h6" sx={{ fontWeight: 400 }}>
                      {item.labelKey ? t(item.labelKey) : item.label}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      {item.valueKey ? t(item.valueKey) : item.value}
                    </Typography>
                  </Stack>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Box>
    </GraphicsCard>
  );

  const specsContent = <Grid size={{ xs: 12, sm: 6, md: 5 }}>{specsAsCards ? specsAsCardsContent : specsAsListContent}</Grid>;

  // Idea 3: editorial description with overline + pull-quote accent
  const descriptionHighlightContent = descriptionText && (
    <Grid size={{ xs: 12, sm: 6, md: 7 }}>
      <Box
        sx={{
          p: { xs: 3, sm: 4, md: 5 },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 2.5
        }}
      >
        {overlineKey && (
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}>
            {t(overlineKey)}
          </Typography>
        )}
        <Box sx={{ pl: 3, borderLeft: '3px solid', borderColor: 'primary.main' }}>
          <Typography variant="h5" component="p" sx={{ color: 'text.primary', lineHeight: 1.65, fontStyle: 'italic', fontWeight: 400 }}>
            {descriptionText}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );

  // Default description (existing behaviour, with optional overline)
  const descriptionDefaultContent = descriptionText && (
    <Grid size={{ xs: 12, sm: 6, md: 7 }}>
      <Box
        sx={{
          p: { xs: 3, sm: 4, md: 5 },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: overlineKey ? 2 : 0
        }}
      >
        {overlineKey && (
          <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}>
            {t(overlineKey)}
          </Typography>
        )}
        <Typography
          variant="body1"
          sx={{
            color: 'text.main',
            lineHeight: 1.8,
            fontSize: { xs: '0.9375rem', sm: '1rem', md: '1.0625rem' }
          }}
        >
          {descriptionText}
        </Typography>
      </Box>
    </Grid>
  );

  const descriptionContent = descriptionHighlight ? descriptionHighlightContent : descriptionDefaultContent;

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 3, sm: 4 }} sx={{ alignItems: { sm: 'stretch' } }}>
        {reverse ? (
          <>
            {descriptionContent}
            {specsContent}
          </>
        ) : (
          <>
            {specsContent}
            {descriptionContent}
          </>
        )}
      </Grid>
    </ContainerWrapper>
  );
}

ProjectSpecsDescription.propTypes = {
  specifications: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      label: PropTypes.string,
      labelKey: PropTypes.string,
      value: PropTypes.string,
      valueKey: PropTypes.string
    })
  ).isRequired,
  description: PropTypes.string,
  descriptionKey: PropTypes.string,
  specsTitle: PropTypes.string,
  specsTitleKey: PropTypes.string,
  reverse: PropTypes.bool,
  overlineKey: PropTypes.string,
  descriptionHighlight: PropTypes.bool,
  specsAsCards: PropTypes.bool
};
