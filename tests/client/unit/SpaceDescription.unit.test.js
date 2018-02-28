import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import SpaceDescription from '../../../client/src/js/SpaceDescription.jsx';

configure({ adapter: new Adapter() });

describe('SpaceDescription', () => {
  it('should render correctly', () => {
    const output = shallow(
      <SpaceDescription desc="Mock Long Space Description"></SpaceDescription>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
