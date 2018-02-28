import React from 'react';
import Header from './Header.jsx';
import Summary from './Summary.jsx';
import SpaceDescription from './SpaceDescription.jsx';
import ContactHost from './ContactHost.jsx';
import Amenities from './Amenities.jsx';
import HouseRules from './HouseRules.jsx';
import Cancellations from './Cancellations.jsx';
import Separator from './Separator.jsx';

const Description = (props) => (
  <div className="div-description-description">
    <div className="div-description-body">
      <Header desc={props.desc.description}></Header>
      <Summary summary={props.desc.description.summary}></Summary>
      <SpaceDescription desc={props.desc.description}></SpaceDescription>
      <ContactHost></ContactHost>
      <Separator></Separator>
      <Amenities amenities={props.desc.description.amenities}></Amenities>
      <Separator></Separator>
      <HouseRules desc={props.desc.description}></HouseRules>
      <Separator></Separator>
      <Cancellations cancellationPolicy={props.desc.description.cancellation_policy}></Cancellations>
      <Separator></Separator>
    </div>
  </div>
);

export default Description;
