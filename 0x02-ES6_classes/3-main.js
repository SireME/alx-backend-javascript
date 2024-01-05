import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());

const errord = new Currency(7, 'Dollars');
console.log(errord.displayFullCurrency());
