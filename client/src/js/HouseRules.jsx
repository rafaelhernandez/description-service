import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const HouseRules = (props) => (
  <div className="div-description-house-rules">
    <div className="div-description-section-header">
      House Rules
    </div>
    <div className="div-description-house-rules-details">
      <div className="div-description-checkin-time">
        Check-in is {props.desc.localized_check_in_time_window}
      </div>
      <div className="div-description-checkout-time">
        Check out by {props.desc.localized_check_out_time}
      </div>
      <div className="div-description-read-rules-fold">
        <p className="div-description-separator-margin">
          <a className="a-description-fold" href="#">Read all rules <Glyphicon glyph="chevron-down"/></a>
        </p>
      </div>
      <div className="div-description-additional-house-rules">
        {props.desc.additional_house_rules}
      </div>
      <div className="div-description-house-rules-acknowledge">
        You must also acknowledge
      </div>
      <div className="div-description-deposit">
        {props.desc.listing_security_deposit_native > 0 ?
          'Security Deposit - if you damage the home, you may be charged up to ' + props.desc.security_deposit_formatted :
          ''
        }
      </div>
      <div className="div-description-hide-rules-fold">
        <p className="div-description-separator-margin">
          <a className="a-description-fold" href="#">Hide rules <Glyphicon glyph="chevron-up"/></a>
        </p>
      </div>
    </div>
  </div>
);

export default HouseRules;
