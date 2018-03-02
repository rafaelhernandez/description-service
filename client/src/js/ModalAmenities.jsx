import React from 'react';
import Separator from './Separator.jsx';
import amenityCategoryDetails from './AmenityCategoryDetails.js';

class ModalAmenities extends React.Component {
  constructor(props) {
    super(props);
    this.basicAmenities = [];
    this.familyAmenities = [];
    this.facilitiesAmenities = [];
    this.diningAmenities = [];
    this.safetyAmenities = [];
    this.guestAmenities = [];
    this.logisticsAmenities = [];
    this.bedBathAmenities = [];
    this.outdoorAmenities = [];
    this.otherAmenities = [];
    this.notIncludedAmenities = [];
    props && props.amenities && props.amenities.forEach(amenity => {
      if (amenity in amenityCategoryDetails) {
        if (amenityCategoryDetails[amenity].category === 'Basic') {
          this.basicAmenities.push(amenityCategoryDetails[amenity]);
        } else if (amenityCategoryDetails[amenity].category === 'Family features') {
          this.familyAmenities.push(amenityCategoryDetails[amenity]);
        } else if (amenityCategoryDetails[amenity].category === 'Dining') {
          this.diningAmenities.push(amenityCategoryDetails[amenity]);
        } else if (amenityCategoryDetails[amenity].category === 'Guest access') {
          this.guestAmenities.push(amenityCategoryDetails[amenity]);
        } else if (amenityCategoryDetails[amenity].category === 'Logistics') {
          this.logisticsAmenities.push(amenityCategoryDetails[amenity]);
        } else if (amenityCategoryDetails[amenity].category === 'Bed and bath') {
          this.bedBathAmenities.push(amenityCategoryDetails[amenity]);
        } else if (amenityCategoryDetails[amenity].category === 'Outdoor') {
          this.outdoorAmenities.push(amenityCategoryDetails[amenity]);
        } else if (amenityCategoryDetails[amenity].category === 'Safety features') {
          this.safetyAmenities.push(amenityCategoryDetails[amenity]);
        } else if (amenityCategoryDetails[amenity].category === 'Facilities') {
          this.facilitiesAmenities.push(amenityCategoryDetails[amenity]);
        } else {
          this.otherAmenities.push(amenityCategoryDetails[amenity]);
        }
      }
    });
  }

  renderAmenities(category, amenities) {
    if (amenities.length > 0) {
      let separator;
      if (amenities.length > 1) {
        separator = <Separator></Separator>;
      } else {
        separator = <div></div>;
      }
      return (
        <div>
          <div className="div-description-modal-amenities-category">
            {category}
          </div>
          {amenities.map((ele, idx) => {
            if (idx === amenities.length - 1) {
              separator = <div></div>;
            }
            return (
              <div>
                <div className="div-description-modal-amenities-name">
                  <p>
                    {ele.key}
                  </p>
                </div>
                <div className="div-description-modal-amenities-desc">
                  <p>
                    {ele.description}
                  </p>
                </div>
                {separator}
              </div>
            );
          })}
        </div>
      );
    }
    return <div></div>;
  }

  render() {

    return (
      <div>
        <div className="div-description-description">
          <div className="div-description-modal-amenities-title">Amenities</div>
          {this.renderAmenities('Basic', this.basicAmenities)}
          {this.renderAmenities('Family features', this.familyAmenities)}
          {this.renderAmenities('Facilites', this.facilitiesAmenities)}
          {this.renderAmenities('Dining', this.diningAmenities)}
          {this.renderAmenities('Guest access', this.guestAmenities)}
          {this.renderAmenities('Logistics', this.logisticsAmenities)}
          {this.renderAmenities('Bed and bath', this.bedBathAmenities)}
          {this.renderAmenities('Safety features', this.safetyAmenities)}
          {this.renderAmenities('Outdoor', this.outdoorAmenities)}
          {this.renderAmenities('Other', this.otherAmenities)}
          {this.renderAmenities('Not included', this.notIncludedAmenities)}
        </div>
      </div>
    );
  }
}

export default ModalAmenities;
