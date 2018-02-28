import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const SpaceDescription = (props) => (
  <div className="div-description-space-description">
    <div className="div-description-open-fold div-description-separator-margin">
      <a className="a-description-fold" href="#">Read more about the space <Glyphicon glyph="chevron-down"/></a>
    </div>
    <div>
      <div className="">
        {props.desc.summary}
      </div>
      <div className="div-description-space-header">
        The space
      </div>
      <div>
        {props.desc.space}
      </div>
      <div className="div-description-space-header">
        Guest access
      </div>
      <div>
        {props.desc.access}
      </div>
      <div className="div-description-space-header">
        Interaction with guests
      </div>
      <div>
        {props.desc.interaction}
      </div>
      <div className="div-description-space-header">
        Other things to note
      </div>
      <div>
        {props.desc.notes}
      </div>
      <div className="div-description-space-header">
        License or registration number
      </div>
      <div>
        <div>
          {props.desc.license}
        </div>
        <a className="a-description-fold" href="https://www.airbnb.com/help/article/1634/what-is-the-license-or-registration-number-field">Learn about this number</a>
      </div>
    </div>
    <div className="div-description-hide-fold">
      <p className="div-description-separator-margin">
        <a className="a-description-fold" href="#">Hide <Glyphicon glyph="chevron-up"/></a>
      </p>
    </div>
  </div>
);

export default SpaceDescription;
