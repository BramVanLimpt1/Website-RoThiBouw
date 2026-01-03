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
        link: '/'
      },
      {
        id: 'about',
        title: t('nav.about', 'About'),
        link: '/about'
      },
      {
        id: 'projects',
        title: t('nav.projects', 'Projects'),
        link: '/projects'
      },
      {
        id: 'contact',
        title: t('nav.contact', 'Contact'),
        link: '/contact'
      }
    ]
  };
};
