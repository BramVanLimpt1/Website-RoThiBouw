'use client';
import PropTypes from 'prop-types';

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

/**
 * FieldLabel Component
 *
 * Simple label component for form fields. Displays the field name/label text
 * in a consistent subtitle style with secondary text color.
 *
 * @param {Object} props - Component props
 * @param {string} props.name - The label text to display
 *
 * @example
 * ```jsx
 * <FieldLabel name={t('forms.firstName')} />
 * ```
 */
function FieldLabel({ name }) {
  return (
    <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
      {name}
    </Typography>
  );
}

/***************************  FORM - ERROR MESSAGE  ***************************/

/**
 * ErrorMessage Component
 *
 * Displays validation or submission error messages in a consistent style.
 * Used for displaying inline form field errors.
 *
 * @param {Object} props - Component props
 * @param {string} props.message - The error message text to display
 *
 * @example
 * ```jsx
 * <ErrorMessage message={errors.email?.message} />
 * ```
 */
function ErrorMessage({ message }) {
  return (
    <Typography variant="caption" sx={{ color: 'error.main' }}>
      {message}
    </Typography>
  );
}

/***************************  CONTACT US - FORM 2  ***************************/

/**
 * ContactUsForm2 Component
 *
 * Advanced contact form with multi-field input, country dial code selector, and API integration.
 *
 * Features:
 * - Input validation for all fields (name, email, phone, message)
 * - Dynamic country code selector with flag icons
 * - Real-time error message display (translation-aware)
 * - Loading state while submitting
 * - Success/error feedback messages
 * - Language-aware default dial code (defaults to Netherlands +31)
 * - Responsive design (mobile-first)
 * - Integrated with submitContactForm() API utility for server submission
 *
 * Form Fields:
 * - firstName: Required, alpha characters only
 * - lastName: Required, alpha characters only
 * - email: Required, must be valid email format
 * - phone: Required with country dial code, 7-15 digits
 * - message: Required, multi-line text input
 *
 * Validation Approach:
 * - Uses reusable validation schemas from src/utils/validationSchema.js
 * - All error messages are translated strings from i18n
 * - Server-side validation also occurs on /api/contact endpoint
 *
 * API Integration:
 * - Calls submitContactForm() utility from src/api/contact.js
 * - Server endpoint: POST /api/contact
 * - Handles both success and error responses with translated messages
 * - Resets form on successful submission
 */
export default function ContactUsForm2() {
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
      <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
        <Grid container spacing={2.5} sx={{ justifyContent: 'space-between' }}>
          
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
          <Grid size={{ xs: 12, sm: 6 }}>
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
          <Grid size={{ xs: 12, sm: 6 }}>
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
                            p: { xs: 0.25 },
                            borderRadius: 2,
                            color: 'text.primary',
                            '&:hover': { bgcolor: 'transparent' },
                            '&:before': { display: 'none' },
                            '& .MuiInputBase-input:focus': { bgcolor: 'transparent' },
                            width: 'max-content',
                            fontSize: 16
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
        </Grid>
        
        {/* Submit Button */}
        <Box sx={{ textAlign: 'center' }}>
          <ButtonAnimationWrapper>
            <Button type="submit" color="primary" size="large" variant="contained" disabled={isSubmitting}>
              {isSubmitting ? t('common.loading') : t('forms.send')}
            </Button>
          </ButtonAnimationWrapper>
        </Box>

        {/* Submission Status Message */}
        {submitStatus && (
          <Grid size={12}>
            <Box
              sx={{
                p: { xs: 2.5, sm: 3 },
                borderRadius: 3,
                bgcolor: submitStatus.type === 'success' ? 'success.lighter' : 'error.lighter',
                border: '2px solid',
                borderColor: submitStatus.type === 'success' ? 'success.main' : 'error.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                gap: 1.5,
                animation: 'slideUp 0.3s ease-out',
                '@keyframes slideUp': {
                  from: {
                    opacity: 0,
                    transform: 'translateY(10px)'
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateY(0)'
                  }
                }
              }}
            >
              <SvgIcon
                name={submitStatus.type === 'success' ? 'tabler-circle-check' : 'tabler-alert-circle'}
                color={submitStatus.type === 'success' ? 'success.main' : 'error.main'}
                size={24}
              />
              <Stack sx={{ gap: 0.25, alignItems: 'center', flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: submitStatus.type === 'success' ? 'success.darker' : 'error.darker',
                    fontWeight: 600
                  }}
                >
                  {submitStatus.type === 'success' ? t('common.success') : t('common.error')}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: submitStatus.type === 'success' ? 'success.darker' : 'error.darker'
                  }}
                >
                  {submitStatus.message}
                </Typography>
              </Stack>
            </Box>
          </Grid>
        )}
      </Stack>
    </form>
  );
}

FieldLabel.propTypes = { name: PropTypes.string };

ErrorMessage.propTypes = { message: PropTypes.string };
