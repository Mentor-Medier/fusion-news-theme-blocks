# `@wpmedia/resizer-image-content-source-block`

This is specifically to make sure that resized image urls are available at themes' `blocks.json` widths. 

## Usage

```
import React from 'react';
import PropTypes from 'prop-types';
import getProperties from 'fusion:properties';
import { resizerURL } from 'fusion:environment';
import { Image } from '@wpmedia/engine-theme-sdk';
import { useContent } from 'fusion:content';

const ManualBlock = ({ customFields, arcSite }) => {
  const resizedImageOptions = useContent({
    source: 'resize-image-api',
    query: { raw_image_url: customFields.imageURL },
  });

  return (
    <Image
      url={customFields.imageURL}
      alt={customFields.headline}
      smallWidth={274}
      smallHeight={206}
      mediumWidth={274}
      mediumHeight={206}
      largeWidth={377}
      largeHeight={283}
      breakpoints={getProperties(arcSite)?.breakpoints}
      resizerURL={resizerURL}
      resizedImageOptions={resizedImageOptions}
    />
  )


ManualBlock.propTypes = {
  customFields: PropTypes.shape({
    imageURL: PropTypes.string.tag({
      label: 'Image URL',
      group: 'Configure Content',
    })
  }),
};

ManualBlock.label = 'Manual Block – Arc Block';

export default ManualBlock;
```