const App = () =>{
  return <section className = "currency-Converter">
    
    <div className="currency-div">
      <h1>Currency Converter</h1>
      <hr id="horizontal" />
      <div>
        <label htmlFor="currency_amount">Amount:
          <input type="number"  id="currency_amount"/>
        </label>
      </div>
      <div className="currency-selector">
        <div>
          <label>
            From:
            <select name="" id= "">
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
            <select name="" id= "">
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
    </div>
  </section>
};
export default App;