'use client';
import PropTypes from 'prop-types';

// @mui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard } from '@/components/cards';
import { ContactUsForm2 } from '@/components/contact-us';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import useTranslation from '@/hooks/useTranslation';

import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  CONTACT US - CARD  ***************************/

/**
 * ContactCard Component
 *
 * Displays a single contact method card with an icon, title, content, and optional link button.
 * Translates all text content using the translation hook.
 *
 * Layout:
 * - Mobile (xs): Icon and text side-by-side (row layout)
 * - Tablet+ (sm+): Icon above text (column layout)
 *
 * @param {Object} props - Component props
 * @param {string} props.icon - Icon name (e.g., 'tabler-mail', 'tabler-phone')
 * @param {string} props.title - Translation key for card title (e.g., 'contact.emailCard.title')
 * @param {string} props.content - Translation key for card content/description
 * @param {Object} [props.link] - Optional link button properties
 *   @param {string} props.link.href - URL for the link (e.g., 'mailto:', 'tel:', 'https://')
 *   @param {string} props.link.children - Translation key for button text (e.g., 'contact.emailCard.buttonText')
 *
 * @example
 * ```jsx
 * <ContactCard
 *   icon="tabler-mail"
 *   title="contact.emailCard.title"
 *   content="contact.emailCard.content"
 *   link={{
 *     href: "mailto:info@example.com",
 *     children: "contact.emailCard.buttonText"
 *   }}
 * />
 * ```
 */
function ContactCard({ icon, title, content, link }) {
  const { t } = useTranslation();

  return (
    <GraphicsCard sx={{ height: 1 }}>
      <Stack direction={{ xs: 'row', sm: 'column' }} sx={{ gap: { xs: 2, sm: 4, md: 5 }, height: 1, p: { xs: 2, sm: 3, md: 4 } }}>
        <Avatar sx={{ width: 60, height: 60, bgcolor: 'grey.300' }}>
          <SvgIcon {...(typeof icon === 'string' ? { name: icon } : { ...icon })} />
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
          {link && (
            <ButtonAnimationWrapper>
              <Button color="primary" variant="outlined" {...{ ...link, children: t(link.children) }} />
            </ButtonAnimationWrapper>
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
 * Displays a contact section with an optional contact form and contact method cards in a grid layout.
 *
 * Layout Behavior:
 * - Form (if shown): Full-width card at the top
 * - Contact cards: Grid layout below the form (responsive: 3 columns on desktop, 1 on mobile)
 * - When only form is shown: Form takes full width, centered
 * - When only cards are shown: Cards display in responsive grid
 * - When both shown: Form on top as full-width, cards below in grid layout
 *
 * Grid Alignment (Contact Cards):
 * - Desktop (md+): 3 cards per row (size={{ xs: 12, sm: 4 }} = 33% width each)
 * - Tablet (sm): 3 cards per row (33% width each)
 * - Mobile (xs): 1 card per row (full width = 100%)
 * - Single card: Takes 33% width on desktop/tablet, full width on mobile
 * - Two cards: Both take 33% each on desktop, full width on mobile
 *
 * Translation:
 * - All text content (heading, caption, titles, content, button text) are translated using i18n
 * - Pass translation keys (e.g., 'contact.heading') as string values, not pre-translated strings
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
 *   @param {number} [props.list[].animationDelay] - Animation delay in seconds (optional, for staggered animations)
 * @param {boolean} [props.showForm=true] - Control visibility of contact form. Default: true.
 *   - If true: Displays form card at top, then contact cards in grid below
 *   - If false: Displays only contact cards in grid layout
 *
 * @example
 * ```jsx
 * // With both form and contact cards
 * <ContactUs4
 *   heading="contact.heading"
 *   caption="contact.caption"
 *   list={[
 *     {
 *       icon: "tabler-mail",
 *       title: "contact.emailCard.title",
 *       content: "contact.emailCard.content",
 *       link: {
 *         href: "mailto:info@example.com",
 *         children: "contact.emailCard.buttonText"
 *       },
 *       animationDelay: 0.6
 *     },
 *     {
 *       icon: "tabler-phone",
 *       title: "contact.phoneCard.title",
 *       content: "contact.phoneCard.content",
 *       link: {
 *         href: "tel:+31612345678",
 *         children: "contact.phoneCard.buttonText"
 *       },
 *       animationDelay: 0.8
 *     }
 *   ]}
 *   showForm={true}
 * />
 *
 * // With only contact cards (no form)
 * <ContactUs4
 *   list={contactCards}
 *   showForm={false}
 * />
 *
 * // With form only (empty list)
 * <ContactUs4
 *   heading="contact.heading"
 *   caption="contact.caption"
 *   list={[]}
 *   showForm={true}
 * />
 * ```
 */
export default function ContactUs4({ heading, caption, list, showForm = true }) {
  const { t } = useTranslation();
  const sectionPadding = { xs: 2, sm: 3, md: 5 };
  const cardRadius = { xs: 6, sm: 8 };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Grid container spacing={1.5}>
          {/* Contact Form Card - Optional */}
          {showForm && (
            <Grid size={12}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: 0.4
                }}
                style={{ height: '100%' }}
              >
                <GraphicsCard sx={{ height: 1, borderRadius: cardRadius }}>
                  <GraphicsCard sx={{ bgcolor: 'grey.200', borderRadius: cardRadius }}>
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
              </motion.div>
            </Grid>
          )}

          {/* Contact Method Cards - Responsive Grid Layout */}
          {list?.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: item.animationDelay
                }}
                style={{ height: '100%' }}
              >
                <ContactCard {...{ ...item }} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

ContactCard.propTypes = { icon: PropTypes.any, title: PropTypes.any, content: PropTypes.any, link: PropTypes.any };

ContactUs4.propTypes = { heading: PropTypes.any, caption: PropTypes.any, list: PropTypes.any, showForm: PropTypes.bool };
