import { useState } from "react";
import { currencyConverter } from "./api/postApi";

const App = () =>{
  const [amount,setAmount] = useState(0); //amount to convert
  const [fromCurrency , setFromCurrency] = useState("USD"); //base currency
  const [toCurrency , setToCurrency]= useState("INR"); //target currency
  const [convertedAmount , setConvertedAmount]= useState(null); //converted
  const [ loading ,setLoading] = useState(false); //loading state
  const [ error , setError] = useState(null); // error state

  const handleConvertCurrency = async ()=>{
    setLoading(true);
    try{
     const res = await currencyConverter(fromCurrency, toCurrency ,amount);
     const {conversion_result} = await res.data; //axios ka use kr rhe h to vo bu default data deta hai json() ka use krna jruri nhi hai 
     setLoading(false);
     setConvertedAmount(conversion_result);
     setAmount(" ");
    
    }catch(error){
      setError("Error fetching conversion rate");
      console.error(error);
    }
  }

  return <section className = "currency-Converter">
    
    <div className="currency-div">
      <h1>Currency Converter</h1>
      <hr id="horizontal" />
      <div>
        <label htmlFor="currency_amount" id="label">Amount:
          <input type="number"  id="currency_amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        </label>
      </div>
      <hr id="horizontal" />
      <div className="currency-selector">
        <div>
          <label>
            From:
            <select name="" id= "select" value={fromCurrency} onChange={(e)=>setFromCurrency(e.target.value)}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="INR">INR</option>
              <option value="GBP">GBP </option>
              <option value="AUD">AUD</option>
              <option value="JEP">JEP</option>
              <option value="MMK">MMK</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            To:
            <select name="" id= "select" value ={toCurrency} onChange ={(e)=>setToCurrency(e.target.value)}>
            <option value="INR">INR</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP </option>
              <option value="AUD">AUD</option>
              <option value="JEP">JEP</option>
              <option value="MMK">MMK</option>
            </select>
          </label>
        </div>
      </div>

      <button id = "button" disabled={loading || amount<= 0}  onClick={handleConvertCurrency}>
        {loading ? "converting..." :"convert"}
      </button>
     
      <hr id="horizontal" />
     {convertedAmount  && (
      <div>
        <h2>
          {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
        </h2>
      </div>
    )}

    {error && <p>{error}</p>}
    </div>
  </section>
};
export default App;