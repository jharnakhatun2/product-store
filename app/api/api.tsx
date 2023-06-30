export const api = process.env.CURRENCY_ACCESS_KEY; 
export const fetchExchangeRate = async () => {
    const response = await fetch(
      `https://api.exchangeratesapi.io/latest?access_key=${process.env.CURRENCY_ACCESS_KEY}&base=USD&symbols=EUR,GBP`
    );
    const data = await response.json();
    return data.rates;
  };
