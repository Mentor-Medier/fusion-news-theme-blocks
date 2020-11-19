import React from 'react';
import Consumer from 'fusion:consumer';
import getProperties from 'fusion:properties';

import { Image } from '@wpmedia/engine-theme-sdk';
import withFusionContext from 'fusion:context';

@Consumer
class PlaceholderImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { resizedImageOptions: {} };
    this.fetch = this.fetch.bind(this);
    this.getTargetFallbackImageUrl = this.getTargetFallbackImageUrl.bind(this);
    this.fetch();
    this.shouldCompress = getProperties(props.arcSite).shouldCompress || false;
  }

  getTargetFallbackImageUrl() {
    const { arcSite, deployment, contextPath } = this.props;
    let targetFallbackImage = getProperties(arcSite).fallbackImage;

    // if true then it's a local image
    // else it's a url image that can be served
    if (targetFallbackImage && !(targetFallbackImage.includes('http'))) {
      targetFallbackImage = deployment(`${contextPath}/${targetFallbackImage}`);
    }

    return targetFallbackImage;
  }

  fetch() {
    const targetFallbackImage = this.getTargetFallbackImageUrl();

    this.fetchContent({
      resizedImageOptions: {
        source: 'resize-image-api',
        query: {
          raw_image_url: targetFallbackImage,
          respect_aspect_ratio: true,
          shouldCompress: this.shouldCompress,
        },
      },
    });
  }

  render() {
    const {
      arcSite,
      smallWidth = 105,
      smallHeight = 105,
      mediumWidth = 105,
      mediumHeight = 105,
      largeWidth = 105,
      largeHeight = 105,
    } = this.props;
    const { resizedImageOptions } = this.state;

    return (
      <>
        <Image
          url={this.getTargetFallbackImageUrl()}
          alt={getProperties(arcSite).primaryLogoAlt || 'Placeholder logo'}
          smallWidth={smallWidth}
          smallHeight={smallHeight}
          mediumWidth={mediumWidth}
          mediumHeight={mediumHeight}
          largeWidth={largeWidth}
          largeHeight={largeHeight}
          resizedImageOptions={resizedImageOptions}
          resizerURL={getProperties(arcSite)?.resizerURL}
          compressedThumborParams={this.shouldCompress}
        />
      </>
    );
  }
}

PlaceholderImage.label = 'Placeholder Image – Arc Block';

export default withFusionContext(PlaceholderImage);
