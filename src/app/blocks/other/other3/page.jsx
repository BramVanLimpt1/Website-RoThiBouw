// @project
import Other3 from '@/blocks/other/Other3';

/***************************  OTHER 3 - DATA  ***************************/

const data = {
  heading: 'Join a Winning Team',
  caption: 'We’re looking for a mid-level product designer to join our team.',
  other: [
    {
      title: 'Product Design',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job' }
    },
    {
      title: 'Front-End Developer',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job' }
    },
    {
      title: 'Back-End Developer',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job' }
    },
    {
      title: 'Scrum Master',
      description: 'We’re looking for a mid-level product designer to join our team.',
      chips: [
        {
          icon: 'tabler-map-pin',
          name: 'Remote'
        },
        {
          icon: 'tabler-history',
          name: 'Full-Time'
        }
      ],
      btn: { children: 'View Job' }
    }
  ]
};
/***************************  BLOCK - OTHER 3  ***************************/

export default function BlockOther3() {
  return <Other3 {...data} />;
}
