// @project
import useTranslation from '@/hooks/useTranslation';

import { MegaMenuType } from '@/enum';

// TODO: Make the link also based on the translation key, so we can have correct link name for different languages

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
        id: 'services',
        title: t('nav.services', 'Services'),
        megaMenu: {
          type: MegaMenuType.MEGAMENU2,
          toggleBtn: { children: t('nav.services', 'Services'), size: 'small', sx: { color: 'text.primary', py: 1.5 } },
          menuItems: [
            {
              icon: 'tabler-home',
              title: t('services.roofing.title'),
              link: '/services/dakwerken'
            },
            {
              icon: 'tabler-hammer',
              title: t('services.carpentry.title'),
              link: '/services/timmerwerk'
            },
            {
              icon: 'tabler-crane',
              title: t('services.renovations.title'),
              link: '/services/renovaties'
            },
            {
              icon: 'tabler-michelin-star-green',
              title: t('services.sustainability.title'),
              link: '/services/verduurzaaming'
            },
            {
              icon: 'tabler-wood',
              title: t('services.woodConstructions.title'),
              link: '/services/hout-constructies'
            }
          ]
        }
      },
      {
        id: 'about',
        title: t('nav.about'),
        link: '/about'
      },
      {
        id: 'projects',
        title: t('nav.projects'),
        link: '/projects'
      },
      {
        id: 'contact',
        title: t('nav.contact'),
        link: '/contact'
      }
    ]
  };
};
