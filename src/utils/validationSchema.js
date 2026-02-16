/***************************  VALIDATION SCHEMAS  ***************************/

/**
 * Schema factory functions for form validation.
 *
 * These functions create validation schemas with translated error messages.
 * They accept a translation function (t) from i18n as a parameter.
 *
 * Usage:
 * ```jsx
 * import { getEmailSchema, getFirstNameSchema, ... } from '@/utils/validationSchema';
 * import { useTranslation } from '@/i18n';
 *
 * const { t } = useTranslation();
 * const { register } = useForm();
 *
 * <input {...register('email', getEmailSchema(t))} />
 * ```
 *
 * i18n Keys Required:
 * - forms.validation.emailRequired
 * - forms.validation.emailInvalid
 * - forms.validation.passwordRequired
 * - forms.validation.passwordMinLength
 * - forms.validation.firstNameRequired
 * - forms.validation.firstNameInvalid
 * - forms.validation.lastNameRequired
 * - forms.validation.lastNameInvalid
 * - forms.validation.phoneRequired
 * - forms.validation.phoneInvalid
 * - forms.validation.otpRequired
 * - forms.validation.otpMinLength
 */

export const getEmailSchema = (t) => ({
  required: t('forms.validation.emailRequired'),
  pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: t('forms.validation.emailInvalid') }
});

export const getPasswordSchema = (t) => ({
  required: t('forms.validation.passwordRequired'),
  minLength: { value: 8, message: t('forms.validation.passwordMinLength') }
});

export const getFirstNameSchema = (t) => ({
  required: t('forms.validation.firstNameRequired'),
  pattern: { value: /^[a-zA-Z\s]+$/, message: t('forms.validation.firstNameInvalid') }
});

export const getLastNameSchema = (t) => ({
  required: t('forms.validation.lastNameRequired'),
  pattern: { value: /^[a-zA-Z\s]+$/, message: t('forms.validation.lastNameInvalid') }
});

export const getPhoneSchema = (t) => ({
  required: t('forms.validation.phoneRequired'),
  pattern: { value: /^[0-9()-.\s]{7,15}$/, message: t('forms.validation.phoneInvalid') }
});

export const getOtpSchema = (t) => ({
  required: t('forms.validation.otpRequired'),
  minLength: { value: 6, message: t('forms.validation.otpMinLength') }
});

export const getMessageSchema = (t) => ({
  required: t('forms.validation.messageRequired')
});

export const getLocationSchema = (t) => ({
  required: t('forms.validation.locationRequired')
});

// Legacy exports for backward compatibility (without translation)
export const emailSchema = {
  required: 'Email is required',
  pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' }
};

export const passwordSchema = {
  required: 'Password is required',
  minLength: { value: 8, message: 'Password must be at least 8 characters' }
};

export const firstNameSchema = {
  required: 'First name is required',
  pattern: { value: /^[a-zA-Z\s]+$/, message: 'Invalid first name' }
};

export const lastNameSchema = {
  required: 'Last name is required',
  pattern: { value: /^[a-zA-Z\s]+$/, message: 'Invalid last name' }
};

export const phoneSchema = {
  required: 'Phone number is required',
  pattern: { value: /^[0-9()-.\s]{7,15}$/, message: 'Invalid phone number' }
};

export const otpSchema = {
  required: 'OTP is required',
  minLength: { value: 6, message: 'OTP must be exactly 6 characters' }
};
