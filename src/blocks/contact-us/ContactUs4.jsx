'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';

// @mui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import { ContactUsForm2 } from '@/components/contact-us';
import ContainerWrapper from '@/components/ContainerWrapper';
import MotionWrapper from '@/components/MotionWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import useTranslation from '@/hooks/useTranslation';

import { SECTION_COMMON_PY, BORDER_RADIUS } from '@/utils/constant';

/***************************  CONTACT US - CARD  ***************************/

/**
 * ContactCard Component
 *
 * Simple, straightforward contact method card for basic contact information.
 * Features a multiple call-to-action buttons with a solid (contained) style.
 *
 * @param {Object} props - Component props
 * @param {string} props.icon - Icon name as string (e.g., 'tabler-mail', 'tabler-phone', 'tabler-brand-whatsapp')
 * @param {string} props.title - Translation key for card title (e.g., 'contact.phoneCard.title')
 * @param {string} props.content - Translation key for card content/description (e.g., 'contact.phoneCard.content')
 * @param {Object|Array} [props.link] - Optional link button(s). Can be a single object or array of objects for multiple contact methods
 *   @param {string} props.link.href - URL for the link (mailto:, tel:, https://, etc.)
 *   @param {string} props.link.children - Translation key for button text (e.g., 'contact.phoneCard.roy')
 *   - Supports flexible contact options: email, phone, WhatsApp, web links, etc.
 */
function ContactCard({ icon, title, content, link }) {
  const { t } = useTranslation();

  // Normalize link to always be an array
  const links = link ? (Array.isArray(link) ? link : [link]) : [];

  return (
    <GraphicsCard sx={{ height: 1 }}>
      <Stack direction={{ xs: 'row', sm: 'column' }} sx={{ gap: { xs: 2, sm: 4, md: 5 }, height: 1, p: { xs: 2, sm: 3, md: 4 } }}>
        <Avatar sx={{ width: 60, height: 60, bgcolor: 'grey.300' }}>
          <SvgIcon name={icon} />
        </Avatar>
        <Stack sx={{ gap: { xs: 2, md: 3 }, height: 1, alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Typeset
            {...{
              heading: t(title),
              caption: t(content),
              stackProps: { sx: { gap: 1 } },
              headingProps: { variant: 'h4' },
              captionProps: { variant: 'body1' }
            }}
          />
          {links.length > 0 && (
            <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap' }}>
              {links.map((linkItem, index) => (
                <ButtonAnimationWrapper key={index}>
                  <Button 
                    color="primary" 
                    variant="outlined"
                    {...(linkItem.href && { component: NextLink })}
                    href={linkItem.href}
                  >
                    {t(linkItem.children)}
                  </Button>
                </ButtonAnimationWrapper>
              ))}
            </Stack>
          )}
        </Stack>
      </Stack>
    </GraphicsCard>
  );
}

/***************************  CONTACT US - 4  ***************************/

/**
 * ContactUs4 Component
 *
 * @param {Object} props - Component props
 * @param {string} [props.heading] - Translation key for section heading (used in form card header). Optional.
 * @param {string} [props.caption] - Translation key for section caption/description (used in form card header). Optional.
 * @param {Array<Object>} props.list - Array of contact method card objects. Each card object:
 *   @param {string} props.list[].icon - Icon name (e.g., 'tabler-mail', 'tabler-phone', 'tabler-brand-whatsapp')
 *   @param {string} props.list[].title - Translation key for card title (e.g., 'contact.emailCard.title')
 *   @param {string} props.list[].content - Translation key for card content/description (e.g., 'contact.emailCard.content')
 *   @param {Object} [props.list[].link] - Optional link button configuration
 *     @param {string} props.list[].link.href - URL for the link (mailto:, tel:, https://, etc.)
 *     @param {string} props.list[].link.children - Translation key for button text (e.g., 'contact.emailCard.buttonText')
 * @param {boolean} [props.showForm=true] - Control visibility of contact form. Default: true.
 *   - If true: Displays form card at top, then contact cards in grid below
 *   - If false: Displays only contact cards in grid layout
 */
export default function ContactUs4({ heading, caption, list, showForm = true }) {
  const { t } = useTranslation();
  const sectionPadding = { xs: 2, sm: 3, md: 5 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Grid container spacing={1.5}>
          {/* Contact Form Card - Optional */}
          {showForm && (
            <Grid size={12}>
              <MotionWrapper delay={0.4} duration={0.4}>
                <GraphicsCard sx={{ height: 1, borderRadius: BORDER_RADIUS.xs }}>
                  <GraphicsCard sx={{ bgcolor: 'grey.200', borderRadius: BORDER_RADIUS.xs }}>
                    <Box sx={{ p: { xs: 2, sm: 4, md: 5 } }}>
                      {heading && (
                        <Typeset
                          {...{
                            heading: t(heading),
                            caption: t(caption),
                            stackProps: { sx: { alignItems: 'center', textAlign: 'center' } },
                            headingProps: { sx: { maxWidth: { xs: '85%', sm: '80%' } } },
                            captionProps: { sx: { maxWidth: { sm: '60%' } } }
                          }}
                        />
                      )}
                    </Box>
                  </GraphicsCard>
                  <Box sx={{ p: sectionPadding, px: { md: 24 } }}>
                    <ContactUsForm2 />
                  </Box>
                </GraphicsCard>
              </MotionWrapper>
            </Grid>
          )}

          {/* Contact Method Cards - Responsive Grid Layout */}
          {list?.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 4 }}>
              <MotionWrapper delay={0.2 + index * 0.1}>
                <ContactCard {...{ ...item }} />
              </MotionWrapper>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

ContactCard.propTypes = { icon: PropTypes.any, title: PropTypes.any, content: PropTypes.any, link: PropTypes.any };

ContactUs4.propTypes = { heading: PropTypes.any, caption: PropTypes.any, list: PropTypes.any, showForm: PropTypes.bool };
