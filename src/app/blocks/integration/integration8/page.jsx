// @project
import { Integration8 } from '@/blocks/integration';

/***************************  INTEGRATION 8 - DATA  ***************************/

const data = {
  headLine: 'Workflow Orchestrator Integration',
  captionLine:
    'Integrate FlexFlow seamlessly as your workflow orchestrator. Elevate collaboration and automation with efficient integration solutions.',
  primaryBtn: { children: 'See All Integration' }
};

/***************************  BLOCK - INTEGRATION 8  ***************************/

export default function BlockIntegration8() {
  return <Integration8 {...data} />;
}
