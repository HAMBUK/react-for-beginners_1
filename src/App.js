
import {useState ,useEffect} from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([])
  const [getPrice, setGetPrice] = useState("");
  const [myUsd, setMyUsd] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {setCoins(json);
    setLoading(false)});
  }, [])
  const onChange = (event) => {setMyUsd(event.target.value) };
  
  const getCoinPrice= (event) => setGetPrice(event.target.value)


  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <input onChange={onChange} type="number" placeholder="How many USD?"></input>
      <div></div>
      {loading ? <strong>Loading...</strong>: <select onChange={getCoinPrice}><option>select the Coin</option>
        {coins.map((coin) => <option value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</option>)}
      </select>
      }
      <hr />
      <div>{myUsd / getPrice}</div>
    </div>
    
  );
};
export default App;
