'use client';

// @project
import Error500Page from '@/blocks/maintenance/Error500';
import useTranslation from '@/hooks/useTranslation';

/***************************  ERROR - 500  ***************************/

export default function InternalServerError() {
  const { t } = useTranslation();

  const data = {
    primaryBtn: {
      children: t('error.500.buttonText'),
      onClick: () => (window.location.href = '/')
    },
    heading: t('error.500.heading')
  };

  return <Error500Page {...data} />;
}
