export function strcheck(input, errormessage) {
  if (typeof input !== 'string') {
    throw new TypeError(errormessage);
  }
}
/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    strcheck(code, 'Code must be a string');
    strcheck(name, 'Name must be a string');
    this._code = code;
    this._name = name;
  }

  // set getter for code
  get code() {
    return this._code;
  }

  // set setter for code
  set code(value) {
    strcheck(value, 'Code must be a string');
    this._code = value;
  }

  // set gett for name
  get name() {
    return this._name;
  }

  // set setter fro name
  set name(value) {
    strcheck(value, 'Name must be a string');
    this._name = value;
  }

  // method to return full currency information
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
