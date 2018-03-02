import React from 'react';
import AmenityItem from './AmenityItem.jsx';

const Amenities = (props) => (
  <div className="div-description-amenities">
    <div className="div-description-section-header">
      Amenities
    </div>
    <div className="div-description-amenities-items">
      {props.amenities.map((amenity, idx) => <AmenityItem key={idx} amenity={amenity}></AmenityItem>)}
    </div>
  </div>
);
export default Amenities;
