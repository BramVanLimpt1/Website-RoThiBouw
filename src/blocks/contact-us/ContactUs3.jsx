import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';

// @mui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import MotionWrapper from '@/components/MotionWrapper';

import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import useTranslation from '@/hooks/useTranslation';

import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  CONTACT US - HELPER  ***************************/

/**
 * Get grid size based on index and total length
 *
 * @param {number} index - Index of the item
 * @param {number} length - Total number of items
 * 
 * @returns {number} Grid size (1-12)
 */
function getGridSize(index, length) {
  switch (length) {
    case 1:
      return 12;
    case 2:
      return 6;
    case 3:
      return 4;
    case 4:
      return 6;
    case 5:
      return index < 2 ? 6 : 4;
    default:
      return 4;
  }
}

/***************************  CONTACT US - CARD  ***************************/

/**
 * ContactCard Component
 *
 * Simple, straightforward contact method card for basic contact information.
 * Features a single call-to-action button with a solid (contained) style.
 *
 * @param {Object} props - Component props
 * @param {string|Object} props.icon - Icon name as string (e.g., 'tabler-mail', 'tabler-phone') or icon object with properties
 *   - Supports both string notation and object notation for icon flexibility
 * @param {string} props.title - Translation key for card title (e.g., 'contact.emailCard.title')
 * @param {string} props.content - Translation key for card content/description (e.g., 'contact.emailCard.content')
 * @param {Object} [props.link] - Optional single link button properties
 *   @param {string} props.link.href - URL for the link (e.g., 'mailto:', 'tel:', 'https://')
 *   @param {string} props.link.children - Translation key for button text (e.g., 'contact.emailCard.buttonText')
 */
function ContactCard({ icon, title, content, link }) {
  const { t } = useTranslation();

  return (
    <GraphicsCard sx={{ height: 1 }}>
      <Stack direction={{ xs: 'row', sm: 'column' }} sx={{ gap: { xs: 2, sm: 4, md: 5 }, height: 1, p: { xs: 2, sm: 3, md: 4 } }}>
        <Avatar sx={{ width: 60, height: 60, bgcolor: 'grey.300' }}>
          <SvgIcon {...(typeof icon === 'string' ? { name: icon } : { ...icon })} />
        </Avatar>
        <Stack sx={{ alignItems: 'flex-start', justifyContent: 'space-between', height: 1, gap: { xs: 2, md: 3 } }}>
          <Typeset
            {...{
              heading: t(title),
              caption: t(content),
              stackProps: { sx: { gap: { xs: 1 } } },
              headingProps: { variant: 'h4' },
              captionProps: { variant: 'body1' }
            }}
          />
          {link && <Button color="primary" variant="contained" {...(link.href && { component: NextLink })} {...link} children={t(link.children)} />}
        </Stack>
      </Stack>
    </GraphicsCard>
  );
}

/***************************  CONTACT US - 3  ***************************/

/**
 * ContactUs3 Component
 *
 * @param {Object} props - Component props
 * @param {string} props.heading - Translation key for section heading (e.g., 'contact.heading')
 * @param {string} props.caption - Translation key for section caption/description (e.g., 'contact.caption')
 * @param {Array<Object>} props.list - Array of contact method card objects. Each card object:
 *   @param {string|Object} props.list[].icon - Icon name (e.g., 'tabler-mail', 'tabler-phone') or icon object
 *   @param {string} props.list[].title - Translation key for card title (e.g., 'contact.emailCard.title')
 *   @param {string} props.list[].content - Translation key for card content/description (e.g., 'contact.emailCard.content')
 *   @param {Object} [props.list[].link] - Optional link button configuration
 *     @param {string} props.list[].link.href - URL for the link (mailto:, tel:, https://, etc.)
 *     @param {string} props.list[].link.children - Translation key for button text (e.g., 'contact.emailCard.buttonText')
 * @param {string} [props.headerAlign='center'] - Header alignment. Options: 'left', 'center', 'right'
 *   - 'left': Aligns heading and caption to the left
 *   - 'center': Centers the heading and caption (default)
 *   - 'right': Right-aligns the heading and caption
 * @param {boolean} [props.animateHeader=true] - Enable/disable header animation on page load
 *   - true: Header fades in and slides up from bottom (whileInView)
 *   - false: Header displays immediately without animation
 */
export default function ContactUs3({ heading, caption, list, headerAlign = 'center', animateHeader = true }) {
  const { t } = useTranslation();
  const headerAlignValue = headerAlign === 'center' ? 'center' : headerAlign === 'right' ? 'flex-end' : 'flex-start';

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        {/* Section Heading and Caption*/}
        <MotionWrapper animate={animateHeader}>
          <Typeset
            {...{
              heading: t(heading),
              caption: t(caption),
              stackProps: { sx: { alignItems: headerAlignValue } }
            }}
          />
        </MotionWrapper>

        {/* Contact Method Cards - Responsive Grid Layout */}
        <Grid container spacing={1.5}>
          {list.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: getGridSize(index, list.length) }}>
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

ContactUs3.propTypes = { heading: PropTypes.string, caption: PropTypes.string, list: PropTypes.array, headerAlign: PropTypes.oneOf(['left', 'center', 'right']), animateHeader: PropTypes.bool };
