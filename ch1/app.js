// import statement from './statement.js'; // => export default function statement (invoice, plays) {
import {statement} from './statement.js'; // => export function statement (invoice, plays) {

var plays_json = '{' +
                     '"hamlet": {"name": "Hamlet", "type": "tragedy"},' +
                     '"aslike": {"name": "As You Like It", "type": "comedy"},' +
                     '"othello": {"name": "Othello", "type": "tragedy"}' +
                 '}';
/*
var invoice_json = `[
                       {
                           "customer": "BigCo",
                           "performances": [
                               {
                                   "playID": "hamlet",
                                   "audience": 55
                               },
                               {
                                   "playID": "aslike",
                                   "audience": 35
                               },
                               {
                                   "playID": "othello",
                                   "audience": 40
                               }
                           ]
                       }
                   ]`;
*/

var invoice_json = `{
                       "customer": "BigCo",
                       "performances": [
                           {
                               "playID": "hamlet",
                               "audience": 55
                           },
                           {
                               "playID": "aslike",
                               "audience": 35
                           },
                           {
                               "playID": "othello",
                               "audience": 40
                           }
                       ]
                   }`;
                
var plays = JSON.parse(plays_json);
var invoice = JSON.parse(invoice_json);

console.log(plays);
console.log(invoice);
//console.log(invoice[0].performances);
console.log(invoice.performances);

var ret = statement(invoice, plays);
console.log(ret);
