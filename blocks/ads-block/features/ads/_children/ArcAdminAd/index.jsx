/* eslint-disable react/prop-types */
import React from 'react';
import { useFusionContext } from 'fusion:context';
import './index.scss';

const ArcAdminAd = ({
  adClass, adName, slotName, dimensions,
}) => {
  const { isAdmin } = useFusionContext();
  return isAdmin ? (
    <div
      className={[
        'pb-ad-admin',
        'arcad',
        `ad-${adClass}`,
        'padding-sm-all',
      ].join(' ')} >
      <div className="margin-md-bottom">
        <span className="margin-md-right">
          {adName || 'Ad Name N/A'}
        </span>
        <span>{slotName}</span>
      </div>
      <div>{JSON.stringify(dimensions)}</div>
    </div>
  ) : null;
};

export default ArcAdminAd;
