import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import enzyme, { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import LandingPage from '../Comp/LandingPage.js';

describe('tests functionality of landing page', () => {
  const rendered = renderer.create(<LandingPage />).toJSON();
  it('has a text header that says "Find a Friend"', () => {
    expect(rendered.children[0].children[0]).to.eql("Find a Friend")
  })
})
