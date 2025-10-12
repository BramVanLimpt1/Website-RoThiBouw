// @project
import useTranslation from '@/hooks/useTranslation';

/***************************  NAVBAR - DATA  ***************************/

export const useNavbarData = () => {
  const { t } = useTranslation();

  return {
    navItems: [
      {
        id: 'home',
        title: t('nav.home', 'Home'),
        url: '/'
      },
      {
        id: 'about',
        title: t('nav.about', 'About'),
        url: '/about'
      },
      {
        id: 'contact',
        title: t('nav.contact', 'Contact'),
        url: '/contact'
      }
    ]
  };
};
