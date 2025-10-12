// @project
import branding from '@/branding.json';
import EarlyaccessPage from '@/blocks/EarlyAccess';

/***************************  EARLY ACCESS - DATA  ***************************/

const data = {
  heading: 'Be the First to Try',
  caption: `Experience Website Publishing Directly from ${branding.brandName} before Anyone Else!`,
  image: { light: '/assets/images/graphics/ai/graphics6-light.svg', dark: '/assets/images/graphics/ai/graphics6-dark.svg' },
  primaryBtn: { children: 'Notify Me' }
};

/***************************  BLOCK - EARLY ACCESS  ***************************/

export default function BlockEarlyAccessPage() {
  return <EarlyaccessPage {...data} />;
}
