export const contactData = {
  heading: 'contact.heading',
  caption: 'contact.caption',
  list: [
    {
      icon: 'tabler-mail',
      title: 'contact.emailCard.title',
      content: 'contact.emailCard.content',
      link: {
        href: 'mailto:info@rothibouw.nl',
        children: 'contact.emailCard.buttonText'
      }
    },
    {
      icon: 'tabler-phone',
      title: 'contact.phoneCard.title',
      content: 'contact.phoneCard.content',
      link: [
        {
          href: 'tel:+31123456789',
          children: 'contact.phoneCard.roy'
        },
        {
          href: 'tel:+31987654321',
          children: 'contact.phoneCard.thijs'
        }
      ]
    },
    {
      icon: 'tabler-brand-whatsapp',
      title: 'contact.whatsappCard.title',
      content: 'contact.whatsappCard.content',
      link: [
        {
          href: 'https://wa.me/31123456789',
          children: 'contact.whatsappCard.roy'
        },
        {
          href: 'https://wa.me/31987654321',
          children: 'contact.whatsappCard.thijs'
        }
      ]
    }
  ]
};
