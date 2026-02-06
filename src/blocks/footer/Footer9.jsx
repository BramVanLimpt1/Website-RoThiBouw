'use client';

// @next
import NextLink from 'next/link';

// @mui
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import { Copyright, Sitemap } from '@/components/footer';
import LogoSection from '@/components/logo';
import MotionWrapper from '@/components/MotionWrapper';
import SvgIcon from '@/components/SvgIcon';

import useTranslation from '@/hooks/useTranslation';

import { CopyrightType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types
import PropTypes from 'prop-types';

/***************************  FOOTER - 9  ***************************/

/**
 * InfoItem Component
 * 
 * Displays a single contact information item with icon and value side-by-side.
 * Value can be clickable (for phone/email links) or plain text.
 * 
 * @param {Object} props - Component props
 * @param {string} props.labelKey - Translation key for the label (e.g., 'footer.location')
 * @param {string} props.icon - Icon name (e.g., 'tabler-phone', 'tabler-mail')
 * @param {string} props.value - The value/content to display
 * @param {string} [props.href] - Optional link href (for tel:, mailto:, http://)
 */
function InfoItem({ labelKey, icon, value, href }) {
  const { t } = useTranslation();

  const itemContent = (
    <Stack direction="row" sx={{ gap: 1, alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <SvgIcon name={icon} color="text.secondary" size={18} />
      </Box>
      <Stack sx={{ gap: 0 }}>
        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500, lineHeight: 1 }}>
          {t(labelKey)}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500, lineHeight: 1.2 }}>
          {value}
        </Typography>
      </Stack>
    </Stack>
  );

  if (href) {
    return (
      <Link
        component={NextLink}
        href={href}
        sx={{
          textDecoration: 'none',
          display: 'block',
          '&:hover': {
            '& .MuiTypography-root:last-child': {
              color: 'primary.main'
            }
          }
        }}
      >
        {itemContent}
      </Link>
    );
  }

  return itemContent;
}

/**
 * SocialLinks Component
 * 
 * Displays configurable social media links with icons
 * 
 * @param {Array} props.socials - Array of social link objects
 * @param {string} props.color - Background color for social avatars
 */
function SocialLinks({ socials, color = 'grey.200' }) {
  return (
    <Stack direction="row" sx={{ gap: { xs: 1, sm: 1.5 } }}>
      {socials?.map((item, index) => (
        <Link
          component={NextLink}
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textDecoration: 'none',
            WebkitTapHighlightColor: 'transparent'
          }}
          aria-label={item.label}
        >
          <Avatar
            variant="rounded"
            sx={{
              bgcolor: color,
              width: { xs: 40, sm: 44 },
              height: { xs: 40, sm: 44 },
              borderRadius: 2,
              '&:hover': { bgcolor: 'grey.300' }
            }}
          >
            <SvgIcon name={item.icon} color="text.secondary" />
          </Avatar>
        </Link>
      ))}
    </Stack>
  );
}

/**
 * Footer9 Component
 * 
 * Advanced footer with four sections:
 * 1. Left: Company logo and location/phone items
 * 2. Middle: Contact info items (email, kvk, btw)
 * 3. Right: Configurable footer link columns
 * 4. Bottom: Copyright and configurable social links
 * 
 * Responsive Design:
 * - Mobile (xs): Single column, stacked vertically
 * - Tablet (sm): Two/Three columns
 * - Desktop (md+): Logo section + Contact info + Footer columns
 * 
 * @param {Object} props - Component props
 * @param {Object} props.companyInfo - Company info configuration with infoItems array
 * @param {Array} props.footerColumns - Array of footer column configurations
 * @param {Object} props.bottomBar - Bottom bar configuration with socials array
 */
export default function Footer9({ companyInfo, footerColumns, bottomBar = {} }) {
  const { t } = useTranslation();
  const { copyrightType = 'TYPE3', socials = [] } = bottomBar;

  // Translate footer columns (titles and menu labels)
  const translatedColumns = footerColumns.map((column) => ({
    ...column,
    title: t(column.title),
    menu: column.menu.map((item) => ({
      ...item,
      label: t(item.label)
    }))
  }));

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack id="footer-9" role="contentinfo" rel="noopener noreferrer" aria-label="Footer 9" sx={{ gap: { xs: 3, sm: 4, md: 5 } }}>
        {/* Main Content Grid - Left, Middle and Right Sections */}
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ display: 'flex', alignItems: 'flex-start' }}>
          {/* Left Section: Logo */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <MotionWrapper delay={0.2} duration={0.5}>
              <Stack sx={{ alignItems: 'flex-start', gap: 1.5 }}>
                <LogoSection />
                {companyInfo?.description && (
                  <Typography variant="body2" sx={{ maxWidth: { sm: 320 }, color: 'text.secondary' }}>
                    {t(companyInfo.description)}
                  </Typography>
                )}
              </Stack>
            </MotionWrapper>
          </Grid>

          {/* Middle Section: All Info Items */}
          {companyInfo?.infoItems && companyInfo.infoItems.length > 0 && (
            <Grid size={{ xs: 12, sm: 6, md: 3 }}>
              <MotionWrapper delay={0.25} duration={0.5}>
                <Stack sx={{ gap: { xs: 2, sm: 2.5 } }}>
                  {companyInfo.infoItems.map((item, index) => (
                    <InfoItem key={index} {...item} />
                  ))}
                </Stack>
              </MotionWrapper>
            </Grid>
          )}

          {/* Right Section: Footer Link Columns */}
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <MotionWrapper delay={0.3} duration={0.5}>
              <Sitemap list={translatedColumns} isMenuDesign />
            </MotionWrapper>
          </Grid>
        </Grid>

        {/* Bottom Bar: Copyright and Social Links */}
        <MotionWrapper delay={0.4} duration={0.5}>
          <GraphicsCard sx={{ borderRadius: { xs: 6, sm: 8 } }}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              sx={{
                alignItems: 'center',
                justifyContent: { xs: 'center', sm: 'space-between' },
                gap: { xs: 2, sm: 1.5 },
                py: { xs: 2, sm: 1.5 },
                px: { xs: 2, sm: 3 }
              }}
            >
              <Copyright type={CopyrightType[copyrightType]} />
              {socials.length > 0 && <SocialLinks socials={socials} color="grey.200" />}
            </Stack>
          </GraphicsCard>
        </MotionWrapper>
      </Stack>
    </ContainerWrapper>
  );
}

Footer9.propTypes = {
  companyInfo: PropTypes.shape({
    description: PropTypes.string,
    infoItems: PropTypes.arrayOf(
      PropTypes.shape({
        labelKey: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        href: PropTypes.string
      })
    )
  }),
  footerColumns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      grid: PropTypes.object,
      title: PropTypes.string.isRequired,
      menu: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          link: PropTypes.object
        })
      ).isRequired
    })
  ),
  bottomBar: PropTypes.shape({
    copyrightType: PropTypes.string,
    socials: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })
    )
  })
};

InfoItem.propTypes = {
  labelKey: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  href: PropTypes.string
};

SocialLinks.propTypes = {
  socials: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  color: PropTypes.string
};
