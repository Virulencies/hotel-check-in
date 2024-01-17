import chai from 'chai';
const expect = chai.expect;

import { toggleLoginForm } from '../src/DOM.js';

describe('See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});

describe('toggleLoginForm', function() {
  it('should add the \'hidden\' class to the login form if it\'s not hidden', () => {
    const loginForm = document.createElement('div');
    loginForm.id = 'login-form';
    document.body.appendChild(loginForm);
    toggleLoginForm();

    chai.expect(loginForm.classList.contains('hidden')).to.be.true;
    document.body.removeChild(loginForm);
  })
});

