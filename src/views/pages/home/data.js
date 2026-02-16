// Home page data configuration

// Hero Slideshow
export const heroSlides = [
  {
    image: '/assets/home/image_1.jpg',
    titleKey: 'home.hero.slide1.title',
    descriptionKey: 'home.hero.slide1.description'
  },
  {
    image: '/assets/home/image_2.jpg',
    titleKey: 'home.hero.slide2.title',
    descriptionKey: 'home.hero.slide2.description'
  },
  {
    image: '/assets/home/image_3.jpg',
    titleKey: 'home.hero.slide3.title',
    descriptionKey: 'home.hero.slide3.description'
  }
];

// Services (ContactUs3 format)
export const servicesData = {
  heading: 'home.services.heading',
  headerAlign: 'center',
  caption: 'home.services.caption',
  list: [
      {
        icon: 'tabler-home',
        title: 'home.services.roofing.title',
        content: 'home.services.roofing.description',
        link: {
          href: '/services/dakwerken',
          children: 'common.learnMore'
        }
      },
      {
        icon: 'tabler-tool',
        title: 'home.services.carpentry.title',
        content: 'home.services.carpentry.description',
        link: {
          href: '/services/timmerwerk',
          children: 'common.learnMore'
        }
      },
      {
        icon: 'tabler-paint',
        title: 'home.services.renovations.title',
        content: 'home.services.renovations.description',
        link: {
          href: '/services/renovaties',
          children: 'common.learnMore'
        }
      },
      {
        icon: 'tabler-building',
        title: 'home.services.dormers.title',
        content: 'home.services.dormers.description',
        link: {
          href: '/services/dakkapellen',
          children: 'common.learnMore'
        }
      },
      {
        icon: 'tabler-umbrella',
        title: 'home.services.canopies.title',
        content: 'home.services.canopies.description',
        link: {
          href: '/services/tuinoverkappingen',
          children: 'common.learnMore'
        }
      },
      {
        icon: 'tabler-wall',
        title: 'home.services.walls.title',
        content: 'home.services.walls.description',
        link: {
          href: '/services/muurbouw',
          children: 'common.learnMore'
        }
      }
    ]
};

// About Teaser
export const aboutTeaserData = {
  headingKey: 'home.aboutTeaser.heading',
  highlightKey: 'home.aboutTeaser.highlight',
  captionKey: 'home.aboutTeaser.caption',
  image: '/assets/home/image_1.jpg',
  primaryBtn: {
    href: '/about',
    children: 'home.aboutTeaser.button'
  }
};

