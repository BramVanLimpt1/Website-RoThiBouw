// @project
import PrivacyPolicyPage from '@/blocks/PrivacyPolicy';

// @data
import { privacyPolicySections } from './data';

/***************************  PAGE - PRIVACY POLICY  ***************************/

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage data={privacyPolicySections} />;
}
