import PropTypes from 'prop-types';

// @next
import dynamic from 'next/dynamic';

// @project
import { DynamicComponentType } from '@/enum';

/***************************  DYNAMIC - IMPORT  ***************************/

function loadComponent(component, type) {
  switch (type) {
    case DynamicComponentType.IMAGE:
      return import(`@/images/${component}`);
    case DynamicComponentType.ICON:
      return import(`@/icons/${component}`);
    default:
      return import(`@/components/logo`);
  }
}

/***************************  DYNAMIC COMPONENT  ***************************/

// eslint-disable-next-line
function DynamicComponent({ component, type, props }) {
  const ImportedComponent = dynamic(() => loadComponent(component, type), { ssr: false });

  return <ImportedComponent {...props} />;
}

export default DynamicComponent;

DynamicComponent.propTypes = { component: PropTypes.string, type: PropTypes.any, props: PropTypes.any };
