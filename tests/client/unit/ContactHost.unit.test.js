import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ContactHost from '../../../client/src/js/ContactHost.jsx';
import descriptionSample from '../../../db/data/description_sample.js';

configure({ adapter: new Adapter() });

describe('ContactHost', () => {
  it('should render correctly', () => {
    const output = shallow(
      <ContactHost></ContactHost>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
