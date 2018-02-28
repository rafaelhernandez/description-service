import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Amenities from '../../../client/src/js/Amenities.jsx';
import descriptionSample from '../../../db/data/description_sample.js';

configure({ adapter: new Adapter() });

describe('Amenities', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Amenities amenities={descriptionSample.amenities}></Amenities>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
