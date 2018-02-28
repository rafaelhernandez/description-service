import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import AmenityItem from '../../../client/src/js/AmenityItem.jsx';

configure({ adapter: new Adapter() });

describe('AmenityItem', () => {
  it('should render correctly', () => {
    const output = shallow(
      <AmenityItem amenity="mockAmenity1"></AmenityItem>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
