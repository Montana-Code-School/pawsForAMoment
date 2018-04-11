import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import enzyme, { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import MyPage from '../Comp/MyPage.js';

describe('tests for functionality of MyPage page', () => {
  it('renders without crashing', () => {
    const mockNavigator = {
      state: {
        params:{
          username:"",
        }
      }
    }
    const rendered = renderer.create(<MyPage navigation = {mockNavigator} />).toJSON();
    let renCheck;
    if(rendered) {
      renCheck = true;
    } else {
      renCheck = false;
    }
    expect(renCheck).to.eql(true);  })
});
