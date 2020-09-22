import React from 'react';
import Login from '../../components/login/login';
import Register from '../../components/register/register';

import { LoginWrapper } from './Styled.js';

export default class LoginPage extends React.Component {
  state = {
    register: true,
  };

  registerHandler = () => {
    this.setState({
      register: true,
    });
  };
  loginHandler = () => {
    this.setState({
      register: false,
    });
  };
  render() {
    const state = this.state.register;
    return (
      <LoginWrapper>
        <div className='container'>
          <div className='login__content py-5'>
            <ul>
              <li
                onClick={() => this.loginHandler()}
                className={state ? '' : 'active'}
              >
                login
              </li>
              <li
                onClick={() => this.registerHandler()}
                className={state ? 'active' : ''}
              >
                register
              </li>
            </ul>
            {state ? <Register /> : <Login />}
          </div>
        </div>
      </LoginWrapper>
    );
  }
}
