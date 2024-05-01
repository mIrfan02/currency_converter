#!/usr/bin/env node
import inquirer from 'inquirer';

const conversionRates = {
    'USD': 1,       // 1 USD = 1 USD
    'EUR': 0.82,    // 1 USD = 0.82 EUR
    'PKR': 280,   // 1 USD = 163.8 PKR
    'GBP': 0.73,    // 1 USD = 0.73 GBP
    'JPY': 109.62,  // 1 USD = 109.62 JPY
    'AUD': 1.31,    // 1 USD = 1.31 AUD
    'CAD': 1.25,    // 1 USD = 1.25 CAD
    'CHF': 0.89,    // 1 USD = 0.89 CHF
    'CNY': 6.44,    // 1 USD = 6.44 CNY
    'INR': 73.12    // 1 USD = 73.12 INR
};

async function main() {
    const { fromCurrency } = await inquirer.prompt({
        name: 'fromCurrency',
        message: 'Choose the currency to convert from:',
        type: 'list',
        choices: Object.keys(conversionRates)
    });

    const { toCurrency } = await inquirer.prompt({
        name: 'toCurrency',
        message: 'Choose the currency to convert to:',
        type: 'list',
        choices: Object.keys(conversionRates)
    });

    // Prompt user for the amount in the currency to convert from
    const { amount } = await inquirer.prompt({
        name: 'amount',
        message: `Enter the amount in ${fromCurrency} to convert to ${toCurrency}:`,
        type: 'number'
    });

    const convertedAmount = (amount / (conversionRates as { [key: string]: number })[fromCurrency]) * (conversionRates as { [key: string]: number })[toCurrency];


    console.log(`Converted amount: ${convertedAmount.toFixed(2)} ${toCurrency}`);
}

main();
