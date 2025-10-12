'use client';
import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import { GraphicsCard, IconCard } from '@/components/cards';
import ModalCard from '@/components/cards/ModalCard';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

/***************************  FEATURE - 10  ***************************/

export default function Feature10({ heading, caption, features, video, typesetPosition, primaryBtn, secondaryBtn }) {
  const theme = useTheme();
  const onlySM = useMediaQuery(theme.breakpoints.only('sm'));

  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Effect to handle splitting of features based on screen size
  useEffect(() => {
    if (features.length) {
      const length = features.length;
      const mid = Math.ceil(length / 2);
      const part1 = features.slice(0, mid);
      const part2 = features.slice(mid);

      if (onlySM) {
        if (part1.length > 2 && part1.length % 2 != 0) {
          const lastElement = part1.pop();
          if (lastElement) part2.unshift(lastElement);
        }
      }

      setData1(part1);
      setData2(part2);
    }
  }, [features, onlySM]);

  const blurEffect = { bgcolor: alpha(theme.palette.grey[200], 0.4), backdropFilter: 'blur(5.5px)' };
  const iconProps = { type: IconType.CUSTOM };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3
          }}
        >
          <Typeset {...{ heading, caption, ...(typesetPosition && { stackProps: { sx: { textAlign: typesetPosition } } }) }} />
        </motion.div>
        <Grid container spacing={1.5}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Grid container spacing={1.5}>
              {data1.map((item, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 12 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: item.animationDelay
                    }}
                  >
                    <IconCard
                      icon={{ ...(typeof item.icon === 'string' ? { name: item.icon, ...iconProps } : { ...iconProps, ...item.icon }) }}
                      title={item.title}
                      content={item.content}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.25
              }}
              style={{ height: '100%' }}
            >
              <GraphicsCard
                bgImage={video.thumbnail}
                sx={{ height: 1, minHeight: { xs: 204, sm: 300 }, cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
                onClick={() => setIsOpen(true)}
              >
                <Stack
                  sx={{
                    height: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: video.overlay ? alpha(theme.palette.grey[900], 0.2) : 'transparent'
                  }}
                >
                  <Stack sx={{ alignItems: 'center', justifyContent: 'center', width: 72, height: 72, borderRadius: 67, ...blurEffect }}>
                    <SvgIcon name="tabler-player-play" stroke={1} size={40} color="text.primary" />
                  </Stack>
                </Stack>
              </GraphicsCard>
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Grid container spacing={1.5}>
              {data2.map((item, index) => (
                <Grid key={index} size={{ xs: 12, sm: 6, md: 12 }}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: item.animationDelay
                    }}
                  >
                    <IconCard
                      icon={{ ...(typeof item.icon === 'string' ? { name: item.icon, ...iconProps } : { ...iconProps, ...item.icon }) }}
                      title={item.title}
                      content={item.content}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        {(primaryBtn || secondaryBtn) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
          >
            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center', gap: 1.5 }}>
              {secondaryBtn && (
                <ButtonAnimationWrapper>
                  <Button variant="outlined" {...secondaryBtn} />
                </ButtonAnimationWrapper>
              )}
              {primaryBtn && (
                <ButtonAnimationWrapper>
                  <Button variant="contained" {...primaryBtn} />
                </ButtonAnimationWrapper>
              )}
            </Stack>
          </motion.div>
        )}
      </Stack>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="video-modal"
        aria-describedby="modal for video"
        sx={{ '& .MuiModal-backdrop': { zIndex: 1 }, '& .MuiPaper-root': { zIndex: 2 } }}
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.35
          }}
          style={{ height: '100%' }}
        >
          <ModalCard sx={{ width: { xs: '95%', sm: '90%', md: '80%', lg: '70%' }, height: 'auto', bgcolor: 'transparent', zIndex: 2 }}>
            <video playsInline width="100%" height="100%" style={{ display: 'flex', objectFit: 'cover' }} controls autoPlay>
              <source src={video.src} type="video/mp4" />
              <track src="captions.vtt" kind="captions" srcLang="en" label="English captions" />
            </video>
          </ModalCard>
        </motion.div>
      </Modal>
    </ContainerWrapper>
  );
}

Feature10.propTypes = {
  heading: PropTypes.string,
  caption: PropTypes.string,
  features: PropTypes.array,
  video: PropTypes.object,
  typesetPosition: PropTypes.any,
  primaryBtn: PropTypes.any,
  secondaryBtn: PropTypes.any
};
