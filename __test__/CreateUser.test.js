import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import enzyme, { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import CreateUser from '../Comp/CreateUser.js';

describe('tests for functionality of CreateUser page', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<CreateUser />).toJSON();
    let renCheck;
    if(rendered) {
      renCheck = true;
    } else {
      renCheck = false;
    }
    expect(renCheck).to.eql(true);
  })
});
