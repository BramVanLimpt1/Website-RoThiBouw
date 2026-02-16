// @project
import useTranslation from '@/hooks/useTranslation';
import { MegaMenuType } from '@/enum';

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
              title: t('services.dakwerken.title', 'Roofing'),
              link: '/services/dakwerken'
            },
            {
              icon: 'tabler-tool',
              title: t('services.timmerwerk.title', 'Timber Work'),
              link: '/services/timmerwerk'
            },
            {
              icon: 'tabler-paint',
              title: t('services.renovaties.title', 'Renovations'),
              link: '/services/renovaties'
            },
            {
              icon: 'tabler-building',
              title: t('services.dakkapellen.title', 'Dormer Windows'),
              link: '/services/dakkapellen'
            },
            {
              icon: 'tabler-umbrella',
              title: t('services.tuinoverkappingen.title', 'Garden Canopies'),
              link: '/services/tuinoverkappingen'
            },
            {
              icon: 'tabler-wall',
              title: t('services.muurbouw.title', 'Wall Construction'),
              link: '/services/muurbouw'
            }
          ]
        }
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
