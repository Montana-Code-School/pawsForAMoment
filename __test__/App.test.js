import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import enzyme, { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from '../App';

const assert = chai.assert;
configure({
  adapter: new Adapter()
});

describe('tests for functionality of entire app', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON();
    let renCheck;
    if(rendered) {
      renCheck = true;
    } else {
      renCheck = false;
    }
    expect(renCheck).to.eql(true);
  })
});
