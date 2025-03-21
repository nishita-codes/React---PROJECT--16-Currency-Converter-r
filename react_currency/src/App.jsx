const App = () =>{
  return <section className = "currency-Converter">
    <hr />
    <div classNmae="currency-div">
      <h1>Currency Converter</h1>
      <div>
        <label htmlFor="currency_amount">Amount:
          <input type="number"  id="currency_amount"/>
        </label>
      </div>
    </div>
  </section>
};
export default App;