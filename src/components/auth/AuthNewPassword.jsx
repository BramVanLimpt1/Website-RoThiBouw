'use client';
import PropTypes from 'prop-types';

import { useState, useRef } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { useForm } from 'react-hook-form';

// @project
import { passwordSchema } from '@/utils/validationSchema';
import { useTranslation } from '@/i18n';

// @assets
import { CloseEye, OpenEye } from '@/icons';

/***************************  AUTH - NEW PASSWORD  ***************************/

export default function AuthNewPassword({ inputSx }) {
  const theme = useTheme();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm();

  const password = useRef({});
  password.current = watch('password', '');

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack sx={{ gap: 2.5 }}>
        <Stack sx={{ gap: 0.5 }}>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            {t('auth.password')}
          </Typography>
          <OutlinedInput
            {...register('password', passwordSchema)}
            type={isOpen ? 'text' : 'password'}
            placeholder={t('auth.newPasswordPlaceholder')}
            slotProps={{ input: { 'aria-label': 'Password' } }}
            error={errors.password && Boolean(errors.password)}
            endAdornment={
              <IconButton onClick={() => setIsOpen(!isOpen)} rel="noopener noreferrer" aria-label="eye">
                {isOpen ? <OpenEye color={theme.palette.grey[700]} /> : <CloseEye color={theme.palette.grey[700]} />}
              </IconButton>
            }
            sx={inputSx}
          />
          {errors.password?.message && (
            <Typography variant="caption" sx={{ color: 'error.main' }}>
              {errors.password?.message}
            </Typography>
          )}
        </Stack>
        <Stack sx={{ gap: 0.5 }}>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            {t('auth.confirmPassword')}
          </Typography>
          <OutlinedInput
            {...register('confirmPassword', { validate: (value) => value === password.current || t('auth.passwordMatchError') })}
            type={isConfirmOpen ? 'text' : 'password'}
            placeholder={t('auth.confirmPasswordPlaceholder')}
            slotProps={{ input: { 'aria-label': 'Confirm Password' } }}
            error={errors.confirmPassword && Boolean(errors.confirmPassword)}
            endAdornment={
              <IconButton onClick={() => setIsConfirmOpen(!isConfirmOpen)} rel="noopener noreferrer" aria-label="eye">
                {isConfirmOpen ? <OpenEye color={theme.palette.grey[700]} /> : <CloseEye color={theme.palette.grey[700]} />}
              </IconButton>
            }
            sx={inputSx}
          />
          {errors.confirmPassword?.message && (
            <Typography variant="caption" sx={{ color: 'error.main' }}>
              {errors.confirmPassword?.message}
            </Typography>
          )}
        </Stack>
        <Button fullWidth type="submit" color="primary" variant="contained" sx={{ mt: { xs: 0.5, sm: 1.5 } }}>
          {t('auth.resetPassword')}
        </Button>
      </Stack>
    </form>
  );
}

AuthNewPassword.propTypes = { inputSx: PropTypes.any };
