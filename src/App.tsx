import React, { useState } from 'react';
import axios from 'axios';
import CurrencyForm from './components/CurrencyForm/CurrencyForm';
import TradesData from './components/TradesData/TradesData';
import TickerData from './components/TickerData/TickerData';
import { TickerDataObj } from './types';

const App: React.FC = () => {
  const [trades, setTrades] = useState([]);
  const [ticker, setTicker] = useState<TickerDataObj | null>(null);
  const [twentyFourHourTicker, setTwentyFourHourTicker] = useState<TickerDataObj | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isDataFetched, setIsDataFetched] =useState(false);
  const [currencyPair, setCurrencyPair] = useState('');
  const fetchMarketData = async () => {

    setLoading(true);
    try {
      const [tradesResponse, tickerResponse, twentyFourHourTickerResponse] = await Promise.all([
        axios.get(`https://api.binance.com/api/v3/trades?symbol=${currencyPair}&limit=10`),
        axios.get(`https://api.binance.com/api/v3/ticker/24hr?symbol=${currencyPair}`),
        axios.get(`https://api.binance.com/api/v3/ticker/24hr?symbol=${currencyPair}`)
      ]);
      setTrades(tradesResponse.data);
      setTicker(tickerResponse.data);
      setTwentyFourHourTicker(twentyFourHourTickerResponse.data);
      setIsDataFetched(true);
      setError(false)
    } catch (error) {
      console.error('Error fetching market data:', error);
      setIsDataFetched(false)
      setError(true)
    }  
      setLoading(false);
    
  };

  const handleCurrencyPairChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrencyPair(event.target.value);
  };

  return (
    <div style ={{marginLeft:'10px'}}>
      <h1>Currency App</h1>
      <CurrencyForm
        currencyPair={currencyPair}
        onCurrencyPairChange={handleCurrencyPairChange}
        onSubmit={fetchMarketData}
      />
      {error &&<p style ={{color:'red'}}>PLEASE ENTER CORRECT CURRENCY</p>}
      {loading ? (
        <p>Loading market data...</p>
      ) : (
        <>
        { isDataFetched ?
    <>
        <TradesData trades={trades} />
        <TickerData title = {'Ticker Data'}  tickerData={ticker} />
        <TickerData title = {'24 Hour Ticker'} tickerData={twentyFourHourTicker} />
        </>
        :<p>
          Please enter the Currency 
          </p>}
       
        </>
      )}
    </div>
  );
};

export default App;
