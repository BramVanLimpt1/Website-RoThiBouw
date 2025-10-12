// @project
import { Feature15 } from '@/blocks/feature';

/***************************  FEATURE 15 - DATA  ***************************/

const data = {
  heading: 'Regulatory Compliance Tools',
  caption: `Adhere to industry regulations effortlessly with DataNest's built-in compliance tools. Stay audit-ready and maintain data protection standards`,
  blockData1: {
    icon: 'tabler-brand-apple-arcade',
    list: [{ primary: 'Fortress for Your Data' }, { primary: 'Granular Access Controls' }, { primary: 'Automated Backup Solutions' }],
    actionBtn: { children: 'Learn More' },
    image: { dark: '/assets/images/graphics/ai/graphics6-dark.svg', light: '/assets/images/graphics/ai/graphics6-light.svg' },
    title: 'Granular Access Controls',
    description: 'Define and manage access permissions at a detailed level.'
  },
  blockData2: {
    icon: 'tabler-devices-code',
    description2: 'Automated and secure backup processes for data protection.',
    actionBtn2: { children: 'Learn More' },
    title: 'Automated Backup'
  },
  blockData3: {
    icon: 'tabler-devices-code',
    description2: 'Built-in tools to ensure adherence to industry regulations.',
    actionBtn2: { children: 'Learn More' },
    title: 'Regulatory Compliance'
  },
  blockData4: {
    icon: 'tabler-lock',
    list: [
      { primary: 'Provide secure' },
      { primary: 'Encrypted storage for sensitive information.' },
      { primary: 'Manage and track changes' }
    ],
    actionBtn: { children: 'Learn More' },
    image: { dark: '/assets/images/graphics/ai/graphics6-dark.svg', light: '/assets/images/graphics/ai/graphics6-light.svg' },
    title: 'Secure Data Havens',
    description: 'Provide secure and encrypted storage for sensitive information.'
  }
};

/***************************  BLOCK - FEATURE 15  ***************************/

export default function BlockFeature15() {
  return <Feature15 {...data} />;
}
