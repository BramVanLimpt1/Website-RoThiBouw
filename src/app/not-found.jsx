'use client';

// @project
import Error404Page from '@/blocks/maintenance/Error404';
import useTranslation from '@/hooks/useTranslation';

/***************************  ERROR - 404  ***************************/

export default function notfound() {
  const { t } = useTranslation();

  const data = {
    primaryBtn: {
      children: t('error.404.buttonText'),
      onClick: () => (window.location.href = '/')
    },
    heading: t('error.404.heading')
  };

  return <Error404Page {...data} />;
}
