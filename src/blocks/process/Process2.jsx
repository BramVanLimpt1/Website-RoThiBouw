'use client';
import PropTypes from 'prop-types';

// @mui
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types

/***************************  PROCESS - CARD  ***************************/

function CommonCard({ title, description, icon }) {
  return (
    <GraphicsCard sx={{ height: 1 }}>
      <Box sx={{ p: { xs: 3, md: 4 } }}>
        <Stack sx={{ gap: { xs: 1.5, md: 4 } }}>
          <SvgIcon type={IconType.CUSTOM} size={40} {...(typeof icon === 'string' ? { name: icon } : { ...icon })} />
          <Stack sx={{ gap: 1.5 }}>
            <Typography variant="h4">{title}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
          </Stack>
        </Stack>
      </Box>
    </GraphicsCard>
  );
}

/***************************  PROCESS - 2  ***************************/

export default function Process2({ heading, caption, cards, bgImage }) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Grid container spacing={{ xs: 3, sm: 4 }}>
        <Grid size={12}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.5
            }}
          >
            <Typeset {...{ heading, caption }} />
          </motion.div>
        </Grid>
        <Grid container spacing={1.5} size={12}>
          <Grid size={12}>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.7
              }}
            >
              <GraphicsCard bgImage={bgImage} sx={{ height: { xs: 300, md: 360 } }} />
            </motion.div>
          </Grid>
          {cards.map((card, index) => (
            <Grid key={index} size={{ xs: 12, sm: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: card.animationDelay
                }}
              >
                <CommonCard {...card} />
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </ContainerWrapper>
  );
}

CommonCard.propTypes = { title: PropTypes.any, description: PropTypes.any, icon: PropTypes.any };

Process2.propTypes = { heading: PropTypes.string, caption: PropTypes.string, cards: PropTypes.array, bgImage: PropTypes.any };
