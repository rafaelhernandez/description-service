import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Cancellations from '../../../client/src/js/Cancellations.jsx';
import descriptionSample from '../../../db/data/description_sample.js';

configure({ adapter: new Adapter() });

describe('Cancellations', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Cancellations cancellationPolicy={descriptionSample.cancellation_policy}></Cancellations>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
