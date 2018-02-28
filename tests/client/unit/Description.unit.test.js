import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Description from '../../../client/src/js/Description.jsx';
import descriptionSample from '../../../db/data/description_sample.js';

configure({ adapter: new Adapter() });

describe('Description', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Description desc={descriptionSample}></Description>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
