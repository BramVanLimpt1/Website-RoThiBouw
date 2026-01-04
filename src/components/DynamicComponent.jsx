import PropTypes from 'prop-types';

import dynamic from 'next/dynamic';

// @project
import { DynamicComponentType } from '@/enum';

/***************************  DYNAMIC - IMPORT  ***************************/

/**
 * Load component dynamically based on type and component name.
 *
 * @param {string} component - The name of the component to load.
 * @param {DynamicComponentType} type - The type of the component (IMAGE, ICON, etc.).
 * 
 * @returns {Promise} A promise that resolves to the imported component.
 */
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

/**
 * DynamicComponent Component
 * 
 * A component that dynamically imports and renders other components based on the provided
 * props. It supports different types of components such as images and icons.
 * 
 * @param component: string = Used for rendering manually modified SVG components, such as images, icons
 * @param type: DynamicComponentType = Used to choose the path of the rendering component.
 * @param props: any = Used to set dynamic props, such as sx, size, and color.
 * @returns = Import the component dynamically and pass the rendering component.
 */

// eslint-disable-next-line
function DynamicComponent({ component, type, props }) {
  const ImportedComponent = dynamic(() => loadComponent(component, type), { ssr: false });

  return <ImportedComponent {...props} />;
}

export default DynamicComponent;

DynamicComponent.propTypes = { component: PropTypes.string, type: PropTypes.any, props: PropTypes.any };
