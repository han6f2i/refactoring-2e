// statement.js
import createStatementData from './createStatementData.js';

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



function statement (invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data, plays) {
    let result = `Statement for ${data.customer}\n`;
    for (let perf of data.performances) {
        result += ` ${perf.play.name}: ${usd(perf.amount)} (${perf.audience} seats)\n`;
    }
    result += `Amount owed is ${usd(data.totalAmount)}\n`;
    result += `You earned ${data.totalVolumeCredits} credits\n`;
    return result;
}

function htmlStatement (invoice, plays) {
    return renderHtml(createStatementData(invoice, plays));
}

function renderHtml (data) {
    let result = `<h1>Statement for ${data.customer}</h1>\n`;
    result += "<table>\n";
    result += "<tr><th>play</th><th>seats</th><th>cost</th></tr>";
    for (let perf of data.performances) {
        result += `<tr><td>${perf.play.name}</td><td>${perf.audience}</td>`;
        result += `<td>${usd(perf.amount)}</td></tr>\n`;
    }
    result += "</table>\n";
    result += `<p>Amount owed is <em>${usd(data.totalAmount)}</em></p>\n`;
    result += `<p>You earned <em>${data.totalVolumeCredits}</em> credits</p>\n`;
    return result;
}

function usd(aNumber) {
    return new Intl.NumberFormat("en-US",
                                {style: "currency", currency: "USD",
                                 minimumFractionDigits: 2 }).format(aNumber/100);
}
