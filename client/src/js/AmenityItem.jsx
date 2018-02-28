import React from 'react';
import SVGIcons from './SVGIcons.js';

const AmenityItem = (props) => (
  <div className="div-description-amenity-item">
    <div className="div-description-characteristics-block">
      <div className="div-description-characteristics-item">
        <div className="div-description-characteristics-table-cell">
          <span className="div-description-characteristics-table-cell-margin" dangerouslySetInnerHTML={{ __html: SVGIcons[props.amenity] }} ></span>
        </div>
        <div className="div-description-characteristics-amenity-cell">
          {props.amenity}
        </div>
      </div>
    </div>
  </div>
);

export default AmenityItem;
