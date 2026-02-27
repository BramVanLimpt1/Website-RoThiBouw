'use client';
import PropTypes from 'prop-types';

// @react
import { useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Divider from '@mui/material/Divider';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid2';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import OutlinedInput from '@mui/material/OutlinedInput';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @third-party
import { useForm, Controller } from 'react-hook-form';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import SvgIcon from '@/components/SvgIcon';

import { useTranslation } from '@/i18n';

import useConfig from '@/hooks/useConfig';

import countries from '@/data/countries';

import { submitContactForm } from '@/api/contact';

import { getEmailSchema, getFirstNameSchema, getLastNameSchema, getPhoneSchema, getMessageSchema } from '@/utils/validationSchema';

/***************************  FORM - INPUT LABEL  ***************************/

function FieldLabel({ name }) {
  return (
    <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
      {name}
    </Typography>
  );
}

/***************************  FORM - ERROR MESSAGE  ***************************/

function ErrorMessage({ message }) {
  return (
    <Typography variant="caption" sx={{ color: 'error.main' }}>
      {message}
    </Typography>
  );
}

/***************************  CONTACT US - FORM 1  ***************************/

export default function ContactUsForm1() {
  const theme = useTheme();
  const { t } = useTranslation();
  const { language } = useConfig();

  // Set default dial code based on language
  const getDefaultDialCode = () => {
    if (language === 'nl') return '+31'; // Netherlands
    return '+31'; // Default to Netherlands for this Dutch company
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'dialcode-popper' : undefined;

  // Initialize the form with default values and error handling
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
    setValue
  } = useForm({ defaultValues: { dialcode: getDefaultDialCode() } });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Combine firstName and lastName into name field for API
      const formData = {
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: `${data.dialcode}${data.phone}`,
        message: data.message
      };

      const result = await submitContactForm(formData, language);

      setSubmitStatus({ type: 'success', message: result.message });
      reset();
    } catch (error) {
      setSubmitStatus({ type: 'error', message: error.message || t('forms.validation.submitError') });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2.5}>
        {/* First Name Field */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack sx={{ gap: 0.5 }}>
            <FieldLabel name={t('forms.firstName')} />
            <OutlinedInput
              {...register('firstName', getFirstNameSchema(t))}
              placeholder={t('forms.firstName')}
              slotProps={{ input: { 'aria-label': 'First name' } }}
              fullWidth
              error={errors.firstName && Boolean(errors.firstName)}
            />
            {errors.firstName?.message && <ErrorMessage message={errors.firstName?.message} />}
          </Stack>
        </Grid>

        {/* Last Name Field */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack sx={{ gap: 0.5 }}>
            <FieldLabel name={t('forms.lastName')} />
            <OutlinedInput
              {...register('lastName', getLastNameSchema(t))}
              placeholder={t('forms.lastName')}
              slotProps={{ input: { 'aria-label': 'Last name' } }}
              fullWidth
              error={errors.lastName && Boolean(errors.lastName)}
            />
            {errors.lastName?.message && <ErrorMessage message={errors.lastName?.message} />}
          </Stack>
        </Grid>

        {/* Email Field */}
        <Grid size={12}>
          <Stack sx={{ gap: 0.5 }}>
            <FieldLabel name={t('forms.email')} />
            <OutlinedInput
              {...register('email', getEmailSchema(t))}
              placeholder={t('forms.emailPlaceholder')}
              slotProps={{ input: { 'aria-label': 'Email Address' } }}
              fullWidth
              error={errors.email && Boolean(errors.email)}
            />
            {errors.email?.message && <ErrorMessage message={errors.email?.message} />}
          </Stack>
        </Grid>

        {/* Phone Field with Dial Code Selector */}
        <Grid size={12}>
          <Stack sx={{ gap: 0.5 }}>
            <FieldLabel name={t('forms.phone')} />
            <Controller
              control={control}
              name="phone"
              rules={getPhoneSchema(t)}
              render={({ field: { onChange } }) => (
                <OutlinedInput
                  placeholder={t('forms.phonePlaceholder')}
                  slotProps={{ input: { 'aria-label': 'Phone number' } }}
                  fullWidth
                  error={errors.phone && Boolean(errors.phone)}
                  onChange={onChange}
                  startAdornment={
                    <Stack direction="row" sx={{ gap: 1.5, alignItems: 'center', pr: 1.5 }}>
                      <Button
                        endIcon={<SvgIcon name="tabler-chevron-down" size={16} color="text.primary" stroke={2} />}
                        sx={{
                          ...theme.typography.body1,
                          fontWeight: 500,
                          p: { xs: 0.25 },
                          borderRadius: 2.5,
                          color: 'text.primary',
                          '&:hover': { bgcolor: 'transparent' },
                          '&:before': { display: 'none' },
                          '& .MuiInputBase-input:focus': { bgcolor: 'transparent' },
                          width: 'max-content'
                        }}
                        disableRipple
                        aria-describedby={id}
                        type="button"
                        onClick={handleClick}
                      >
                        {watch('dialcode')}
                      </Button>
                      <Popper
                        placement="bottom-start"
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        transition
                        popperOptions={{
                          modifiers: [
                            {
                              name: 'offset',
                              options: {
                                offset: [-16, 2]
                              }
                            }
                          ]
                        }}
                      >
                        {({ TransitionProps }) => (
                          <Fade in={open} {...TransitionProps}>
                            <Card elevation={0} sx={{ border: '1px solid', borderColor: theme.palette.divider, borderRadius: 4 }}>
                              <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                                <Box sx={{ p: 1, pr: 0.5 }}>
                                  <List disablePadding>
                                    <Box sx={{ overflow: 'auto', maxHeight: 320, width: { xs: 296, sm: 320 } }}>
                                      {countries.map((country, index) => (
                                        <ListItemButton
                                          key={index}
                                          sx={{ borderRadius: 4, mb: 0.5 }}
                                          selected={country.dialCode === watch('dialcode')}
                                          onClick={() => {
                                            setValue('dialcode', country.dialCode);
                                            setAnchorEl(null);
                                          }}
                                        >
                                          <ListItemAvatar sx={{ minWidth: 32 }}>
                                            <CardMedia
                                              image={`https://flagcdn.com/w20/${country.countyCode.toLowerCase()}.png`}
                                              component="img"
                                              sx={{ height: 'fit-content', width: 21 }}
                                              loading="lazy"
                                            />
                                          </ListItemAvatar>
                                          <ListItemText primary={`${country.name} (${country.dialCode})`} />
                                        </ListItemButton>
                                      ))}
                                    </Box>
                                  </List>
                                </Box>
                              </ClickAwayListener>
                            </Card>
                          </Fade>
                        )}
                      </Popper>
                      <Divider orientation="vertical" flexItem sx={{ height: 24, my: 'auto' }} />
                    </Stack>
                  }
                />
              )}
            />
            {errors.phone?.message && <ErrorMessage message={errors.phone?.message} />}
          </Stack>
        </Grid>

        {/* Message Field */}
        <Grid size={12}>
          <Stack sx={{ gap: 0.5 }}>
            <FieldLabel name={t('forms.message')} />
            <OutlinedInput
              {...register('message', getMessageSchema(t))}
              multiline
              rows={4}
              placeholder={t('forms.messagePlaceholder')}
              fullWidth
              error={errors.message && Boolean(errors.message)}
              slotProps={{ input: { 'aria-label': 'Message' } }}
            />
            {errors.message?.message && <ErrorMessage message={errors.message?.message} />}
          </Stack>
        </Grid>

        {/* Submit Button */}
        <Grid size={12}>
          <Stack sx={{ alignItems: 'flex-start', mt: { xs: 0.5, sm: 1.5 } }}>
            <ButtonAnimationWrapper>
              <Button type="submit" color="primary" variant="contained" size="large" disabled={isSubmitting}>
                {isSubmitting ? t('common.loading') : t('forms.send')}
              </Button>
            </ButtonAnimationWrapper>
          </Stack>
        </Grid>

        {/* Submission Status Message */}
        {submitStatus && (
          <Grid size={12}>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: submitStatus.type === 'success' ? 'success.lighter' : 'error.lighter',
                color: submitStatus.type === 'success' ? 'success.darker' : 'error.darker'
              }}
            >
              <Typography variant="body2">{submitStatus.message}</Typography>
            </Box>
          </Grid>
        )}
      </Grid>
    </form>
  );
}

FieldLabel.propTypes = { name: PropTypes.string };

ErrorMessage.propTypes = { message: PropTypes.string };
