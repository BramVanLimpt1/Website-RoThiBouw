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
import SvgIcon from '@/components/SvgIcon';
import useTranslation from '@/hooks/useTranslation';

/***************************  PROJECT SPECS & DESCRIPTION  ***************************/

/**
 * ProjectSpecsDescription Block
 *
 * Based on Feature13 layout pattern - displays specifications list alongside description text.
 *
 * @param {Object} props - Component props
 * @param {Array} props.specifications - Array of spec items with icon, label/labelKey, and value/valueKey
 * @param {string} props.description - Direct description text
 * @param {string} props.descriptionKey - Translation key for description
 * @param {string} props.specsTitle - Optional title for specs section
 * @param {string} props.specsTitleKey - Optional translation key for specs title
 * @param {boolean} props.reverse - Flip the layout (description on left, specs on right)
 */
export default function ProjectSpecsDescription({ specifications, description, descriptionKey, specsTitle, specsTitleKey, reverse }) {
  const { t } = useTranslation();

  const descriptionText = descriptionKey ? t(descriptionKey) : description;
  const specsTitleText = specsTitleKey ? t(specsTitleKey) : specsTitle;

  // Specs content with card wrapper
  const specsContent = (
    <Grid size={{ xs: 12, sm: 6, md: 5 }}>
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
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
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
    </Grid>
  );

  // Description content without background
  const descriptionContent = descriptionText && (
    <Grid size={{ xs: 12, sm: 6, md: 7 }}>
      <Box
        sx={{
          p: { xs: 3, sm: 4, md: 5 },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
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

  return (
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
  reverse: PropTypes.bool
};
