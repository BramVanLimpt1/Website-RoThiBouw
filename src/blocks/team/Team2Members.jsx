'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid2';

// @third-party
import { motion } from 'framer-motion';

// @project
import { GraphicsCard } from '@/components/cards';
import { ThemeMode } from '@/config';
import ContainerWrapper from '@/components/ContainerWrapper';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';

import { IconType } from '@/enum';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @types

/***************************  TEAM - 2 MEMBERS  ***************************/

export default function Team2Members({ heading, caption, members }) {
  const theme = useTheme();

  const socialBtnSX = { sx: { bgcolor: 'grey.200', p: 0.5 }, component: NextLink };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack sx={{ gap: 4, pb: 5 }}>
        <motion.div
          initial={{ opacity: 0, y: 5, x: 0 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4
          }}
        >
          <Typeset {...{ heading, caption }} />
        </motion.div>
        <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
          {members?.slice(0, 2).map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 5 }}>
              <motion.div
                initial={{ x: index === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              >
                <GraphicsCard>
                  <Stack>
                    <GraphicsCard
                      bgImage={item.avatar}
                      sx={{
                        bgcolor: alpha(theme.palette.grey[600], 0.6),
                        borderRadius: 0,
                        height: { xs: 240, sm: 280, md: 350 }
                      }}
                      overLay={`linear-gradient(360deg, ${alpha(theme.palette.grey[theme.palette.mode === ThemeMode.DARK ? 50 : 900], 0.5)} 0%, ${alpha(theme.palette.primary.darker, 0)} 100%)`}
                    />
                    <GraphicsCard sx={{ mt: { xs: -3, sm: -5 }, zIndex: 1 }}>
                      <Stack sx={{ alignItems: 'center', gap: { xs: 0.5, sm: 1, md: 1.5 }, p: { xs: 2.5, sm: 3, md: 4 } }}>
                        <Typeset
                          {...{
                            heading: item.name,
                            caption: item.role,
                            stackProps: { sx: { alignItems: 'center', gap: 0.75 } },
                            headingProps: { variant: 'h4', noWrap: true, sx: { textAlign: 'center', textOverflow: 'ellipsis' } },
                            captionProps: { variant: 'body1', noWrap: true, sx: { textAlign: 'center', textOverflow: 'ellipsis' } }
                          }}
                        />
                        <Stack direction="row" sx={{ alignItems: 'center', gap: 0.5 }}>
                          {item.phone && (
                            <IconButton
                              {...socialBtnSX}
                              href={`tel:${item.phone}`}
                              aria-label="phone"
                            >
                              <SvgIcon name="tabler-filled-phone" type={IconType.FILL} />
                            </IconButton>
                          )}
                          {item.socialLinks?.linkedin && (
                            <IconButton
                              {...socialBtnSX}
                              href={item.socialLinks.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="linkedin"
                            >
                              <SvgIcon name="tabler-filled-linkedin" type={IconType.FILL} />
                            </IconButton>
                          )}
                          {item.socialLinks?.instagram && (
                            <IconButton
                              {...socialBtnSX}
                              href={item.socialLinks.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="instagram"
                            >
                              <SvgIcon name="tabler-filled-instagram" type={IconType.FILL} />
                            </IconButton>
                          )}
                          {item.socialLinks?.facebook && (
                            <IconButton
                              {...socialBtnSX}
                              href={item.socialLinks.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="facebook"
                            >
                              <SvgIcon name="tabler-filled-facebook" type={IconType.FILL} />
                            </IconButton>
                          )}
                        </Stack>
                      </Stack>
                    </GraphicsCard>
                  </Stack>
                </GraphicsCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
}

Team2Members.propTypes = { heading: PropTypes.any, caption: PropTypes.any, members: PropTypes.any };
