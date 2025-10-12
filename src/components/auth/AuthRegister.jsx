'use client';
import PropTypes from 'prop-types';

import { useState } from 'react';

// @next
import NextLink from 'next/link';

// @mui
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// @third-party
import { useForm } from 'react-hook-form';

// @project
import { emailSchema, passwordSchema, firstNameSchema, lastNameSchema } from '@/utils/validationSchema';

// @assets
import { CloseEye, OpenEye } from '@/icons';

/***************************  AUTH - REGISTER  ***************************/

export default function AuthRegister({ inputSx }) {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack sx={{ gap: 2.5 }}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
              First Name
            </Typography>
            <OutlinedInput
              {...register('firstname', firstNameSchema)}
              placeholder="Enter first name"
              slotProps={{ input: { 'aria-label': 'First name' } }}
              error={errors.firstname && Boolean(errors.firstname)}
              sx={{ ...inputSx, width: 1 }}
            />
            {errors.firstname?.message && (
              <Typography variant="caption" sx={{ color: 'error.main' }}>
                {errors.firstname?.message}
              </Typography>
            )}
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
              Last Name
            </Typography>
            <OutlinedInput
              {...register('lastname', lastNameSchema)}
              placeholder="Enter last name"
              slotProps={{ input: { 'aria-label': 'Last name' } }}
              error={errors.lastname && Boolean(errors.lastname)}
              sx={{ ...inputSx, width: 1 }}
            />
            {errors.lastname?.message && (
              <Typography variant="caption" sx={{ color: 'error.main' }}>
                {errors.lastname?.message}
              </Typography>
            )}
          </Grid>
        </Grid>
        <Stack sx={{ gap: 0.5 }}>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            Email
          </Typography>
          <OutlinedInput
            {...register('email', emailSchema)}
            placeholder="example@gmail.com"
            slotProps={{ input: { 'aria-label': 'Email Address' } }}
            error={errors.email && Boolean(errors.email)}
            sx={{ ...inputSx }}
          />
          {errors.email?.message && (
            <Typography variant="caption" sx={{ color: 'error.main' }}>
              {errors.email?.message}
            </Typography>
          )}
        </Stack>
        <Stack sx={{ gap: 0.5 }}>
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            Password
          </Typography>
          <OutlinedInput
            {...register('password', passwordSchema)}
            type={isOpen ? 'text' : 'password'}
            placeholder="Enter your password"
            slotProps={{ input: { 'aria-label': 'Password' } }}
            error={errors.password && Boolean(errors.password)}
            endAdornment={
              <IconButton disableRipple onClick={() => setIsOpen(!isOpen)} rel="noopener noreferrer" aria-label="eye">
                {isOpen ? <OpenEye color={theme.palette.grey[700]} /> : <CloseEye color={theme.palette.grey[700]} />}
              </IconButton>
            }
            sx={inputSx}
          />
          <Stack
            direction="row"
            sx={{ alignItems: 'center', justifyContent: errors.password?.message ? 'space-between' : 'flex-end', width: 1 }}
          >
            {errors.password?.message && (
              <Typography variant="caption" sx={{ color: 'error.main' }}>
                {errors.password?.message}
              </Typography>
            )}
            <Link
              component={NextLink}
              underline="hover"
              variant="caption2"
              href=""
              sx={{ textAlign: 'right', '&:hover': { color: 'primary.dark' } }}
            >
              Forgot Password?
            </Link>
          </Stack>
        </Stack>
        <Button fullWidth type="submit" color="primary" variant="contained" sx={{ mt: { xs: 0.5, sm: 1.5 } }}>
          Sign In
        </Button>
      </Stack>
    </form>
  );
}

AuthRegister.propTypes = { inputSx: PropTypes.any };
