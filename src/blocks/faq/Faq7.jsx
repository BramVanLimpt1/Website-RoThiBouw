'use client';
import PropTypes from 'prop-types';

import { useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import FaqDetails from '@/components/faq/FaqDetails';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import useFocusWithin from '@/hooks/useFocusWithin';
import { generateFocusVisibleStyles } from '@/utils/CommonFocusStyle';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  FAQ - 7  ***************************/

export default function Faq7({ heading, caption, defaultExpanded, faqList, getInTouch }) {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(defaultExpanded || false);

  const cardRadius = { xs: 4, sm: 6 };
  const accordionRadius = { xs: cardRadius.xs * 4, sm: cardRadius.sm * 4 };
  const accordionPX = { xs: 2, md: 3 };
  const iconProps = { color: 'text.primary' };

  // Handles the expansion of accordion panels
  const handleChange = (panel) => (event, isExpanded) => setExpanded(isExpanded ? panel : false);

  const isFocusWithin = useFocusWithin();

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Stack direction={{ sm: 'row' }} sx={{ gap: 2, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'end' } }}>
          <Typeset {...{ heading, caption }} />
          <Button
            variant="contained"
            size="large"
            {...getInTouch.link}
            {...(getInTouch.link && getInTouch.link.href && { component: NextLink })}
            sx={{ minWidth: 215 }}
          />
        </Stack>

        <Stack
          sx={{
            gap: 1.5,
            '& .MuiAccordion-root:first-of-type': { borderTopLeftRadius: accordionRadius, borderTopRightRadius: accordionRadius },
            '& .MuiAccordion-root:last-of-type': { borderBottomLeftRadius: accordionRadius, borderBottomRightRadius: accordionRadius }
          }}
        >
          {faqList.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                borderRadius: cardRadius,
                border: '1px solid',
                borderColor: 'grey.200',
                ...(isFocusWithin && { '&:focus-within': generateFocusVisibleStyles(theme.palette.primary.main) })
              }}
            >
              <AccordionSummary
                expandIcon={<SvgIcon name={expanded === `panel${index}` ? 'tabler-minus' : 'tabler-plus'} {...iconProps} size={20} />}
                sx={{
                  p: accordionPX,
                  '& .MuiAccordionSummary-expandIconWrapper': { color: 'text.primary' },
                  '& .MuiAccordionSummary-content': { my: 0 },
                  '&.Mui-focusVisible': { bgcolor: 'transparent' },
                  '&:hover, &:hover svg': { color: 'primary.dark' }
                }}
              >
                <Typography variant="h4">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: accordionPX, pt: 0, pb: accordionPX }} key={index}>
                <FaqDetails answer={item.answer} />
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Stack>
    </ContainerWrapper>
  );
}

Faq7.propTypes = {
  heading: PropTypes.any,
  caption: PropTypes.any,
  defaultExpanded: PropTypes.any,
  faqList: PropTypes.any,
  getInTouch: PropTypes.any
};
