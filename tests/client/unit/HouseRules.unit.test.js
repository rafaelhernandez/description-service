import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import HouseRules from '../../../client/src/js/HouseRules.jsx';
import descriptionSample from '../../../db/data/description_sample.js';

configure({ adapter: new Adapter() });

describe('HouseRules', () => {
  it('should render correctly', () => {
    const output = shallow(
      <HouseRules desc={descriptionSample}></HouseRules>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
