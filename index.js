import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_nswjYEKU2mWUIa3iiiXNebG1M9PrCfgzKFM0Bky2');

export async function convertCurrency(fromCurrency, toCurrency, units){
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency,
    });
    const multiplier= res.data[toCurrency];
    return multiplier*units;
}

