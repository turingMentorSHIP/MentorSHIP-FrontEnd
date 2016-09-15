import Ember from 'ember';
// import ENV from '../config/environment.js';


export function environmentVariables(stringValue) {
  if (ENV.environment === 'test') {
    return "http:localhost:3000" + stringValue
  } else if (ENV.environment === 'development') {
    return "http:localhost:3000" + stringValue
  } else if (ENV.environment === 'production') {
    return "https://mentorship-turing.herokuapp.com" + stringValue
  }
}

export default Ember.Helper.helper(environmentVariables);
