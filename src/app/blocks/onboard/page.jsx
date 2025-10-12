// @project
import branding from '@/branding.json';
import OnboardPage from '@/blocks/Onboard';

/***************************  ONBOARD - DATA  ***************************/

const data = {
  heading: 'Glad to Have You Onboard!',
  caption: `Thank You for Joining the ${branding.brandName} Family! While You Wait for Early Access, Check Out Our Community or Dive into Our UI Kit.`,
  primaryBtn: { children: 'Explore UI kit' },
  secondaryBtn: { children: 'Join Our Community' }
};

/***************************  BLOCK - ONBOARD  ***************************/

export default function BlockOnBoardPage() {
  return <OnboardPage {...data} />;
}
