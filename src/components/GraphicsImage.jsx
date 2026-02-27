'use client';
import PropTypes from 'prop-types';

// @react
import { isValidElement } from 'react';

// @mui
import CardMedia from '@mui/material/CardMedia';

// @project
import DynamicComponent from './DynamicComponent';

import GetImagePath from '@/utils/GetImagePath';

/***************************  IMAGE - TYPE IDENTIFY ***************************/

function isImageComponentProps(value) {
  return value.light !== undefined && value.dark !== undefined;
}

function isDynamicImageProps(value) {
  return value.component !== undefined && value.type !== undefined;
}

/***************************  DYNAMIC GRAPHICS - IMAGE  ***************************/

export default function GraphicsImage({ children, image, sx, cardMediaProps }) {
  if (isValidElement(image)) return image;

  if (isDynamicImageProps(image)) {
    return <DynamicComponent component={image.component} type={image.type} />;
  }

  if (isImageComponentProps(image) || typeof image === 'string') {
    return (
      <CardMedia
        {...(cardMediaProps?.component == 'img'
          ? { src: GetImagePath(image), alt: 'Graphics', loading: 'lazy' }
          : { image: GetImagePath(image), title: 'Graphics', loading: 'lazy' })}
        sx={{ width: 'auto', ...sx }}
        {...cardMediaProps}
      >
        {children}
      </CardMedia>
    );
  }

  return image;
}

GraphicsImage.propTypes = { children: PropTypes.any, image: PropTypes.any, sx: PropTypes.any, cardMediaProps: PropTypes.any };
