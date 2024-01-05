/* eslint-disable no-unused-vars */
import Currency from './3-currency';

export function numcheck(input, errormessage) {
  if (typeof input !== 'number') {
    throw new TypeError(errormessage);
  }
}
/* eslint-disable no-underscore-dangle */
export default class Pricing {
  constructor(amount, currency) {
    numcheck(amount, 'Amount must be a number');
    this._amount = amount;
    this._currency = currency;
  }

  // set getter method for amount
  get amount() {
    return this._amount;
  }

  // set setter method for amount
  set amount(value) {
    numcheck(value, 'Amount must be a number');
    this._amount = value;
  }

  // set getter method for currency
  get currency() {
    return this._currency;
  }

  // set setter method for currency
  set currency(value) {
    this._currency = value;
  }

  // method that displays full price
  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this.currency._code})`;
  }

  // static class implementation
  static convertPrice(amount, conversionRate) {
    numcheck(amount, 'Amount must be a number');
    numcheck(amount, 'ConversionRate must be a number');
    return amount * conversionRate;
  }
}
