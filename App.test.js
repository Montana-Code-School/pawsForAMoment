import React from 'react';
import App from './App';
import CreateUser from './Comp/CreateUser.js';
import Login from './Comp/Login.js';
import MyPage from './Comp/MyPage.js';

import renderer from 'react-test-renderer';

describe('tests for functionality of entire app', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
  })
});

describe('tests for functionality of CreateUser page', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<CreateUser />).toJSON();
    expect(rendered).toBeTruthy();
  })
});

describe('tests for functionality of Login page', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Login />).toJSON();
    expect(rendered).toBeTruthy();
  })
});

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
    expect(rendered).toBeTruthy();
  })
});
