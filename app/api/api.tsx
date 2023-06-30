export const api = "DFwkld1hKBv2AUFyoollBO25mkBlzWD4"; 
export const fetchExchangeRate = async () => {
    const response = await fetch(
      `https://api.apilayer.com/currency_data/convert?to=EUR&from=USD&amount=55`
    );
    const data = await response.json();
    return data.rates;
  };
  

export default function Api() {
  return (
    <></>
  )
}
