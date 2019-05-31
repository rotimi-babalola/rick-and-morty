import React from 'react';
import { shallow } from 'enzyme';

import App from '../components/App';

describe('<App/> component', () => {
  const wrapper = shallow(<App />);

  it('<App/> component renders', () => {
    expect(wrapper.html()).toBeTruthy();
  });
});
