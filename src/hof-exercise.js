/**********/
// EXAMPLES
/**********/

import { number } from "jsverify";

// numbers: [number]
const numbers = [1, 2, 3];

// pricedItem: {price: number, taxable: boolean}
const pricedItem = { price: 10, taxable: false };

// pricedItems: [{price: number, taxable: boolean}]
const pricedItems = [pricedItem, pricedItem];

// calculateTotalImperative: (items: [{price: number, taxable: boolean}], tax: number) -> number
const calculateTotalImperative = (items, tax) => {
  let result = 0;
  for (const item of items) {
    const { price, taxable } = item;
    if (taxable) {
      result += price * Math.abs(tax);
    }
    result += price;
  }
  return result;
};

/**********/
// ASSIGNMENT
/**********/
// blah: parameters to take in -> return type

/* - - - - - - - - - - IMPLEMENTATION - - - - - - - - - - */

// prices: (items: [{price: number}]) -> [number]
const prices = items => items.map(item => item.price); 
// Take in items, psuedo-for loop through them, for each item, return its price... map method returns all the data in an array
// Passing in a lambda function to take every item in the items list and return just the price (can think of price as nested, now)

// sum: (numbers: [number]) -> number       // reduce(accumulator, currentvalue)
const sum = numbers => numbers.reduce((ACC, CURR) => ACC + CURR, 0); 
// Take in numbers array, return ACC as the total + CURR as new value, and 0 as the initial value

// selectTaxable: (items: [{taxable: boolean}]) -> [{taxable: boolean}]
const selectTaxable = items => items.filter(item => item.taxable); 
// Take in items, create new variable 'item' and return the item as the boolean inside of that item (object)

// applyTax: (prices: [number], tax: number) -> [number]
const applyTax = (prices,tax) => prices.map(price => price * tax); 
// Take in prices array & tax, create new variable 'price,' which is our current object's price, then multiply that price by the tax




/* - - - - - IMPLEMENT TYPE SIGNATURES - - - - - */  // EX:  baseSum: TODO - Type Signature
// baseSum: (items: [{price: number}]) -> number
const baseSum = items => sum(prices(items));

// taxSum: (items: [{price: number, taxable: boolean}], tax: number ) -> number
const taxSum = (items, tax) => sum(applyTax(prices(selectTaxable(items)), tax));

// calculateTotalDeclarative: (items: [{price: number, taxable: boolean}], tax: number ) -> number
const calculateTotalDeclarative = (items, tax) => baseSum(items) + taxSum(items, Math.abs(tax));

export default {
  prices,
  sum,
  selectTaxable,
  applyTax,
  baseSum,
  taxSum,
  calculateTotalDeclarative
};
