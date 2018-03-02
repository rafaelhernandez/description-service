import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Header from '../../../client/src/js/Header.jsx';
import descriptionSample from '../../../db/data/description_sample.js';

configure({ adapter: new Adapter() });

describe('Header', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Header desc={descriptionSample}></Header>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
