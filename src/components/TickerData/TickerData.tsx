import React from 'react';
import { TickerDataProps } from '../../types';


const TickerData : React.FC<TickerDataProps> = ({title, tickerData }) => {
    if (tickerData === null) {
    return <p>Loading ticker data...</p>; 
  }
  return (
    <div>
      <h2>{title}</h2>
      <p>Symbol: {tickerData.symbol}</p>
      <p>Price Change: {tickerData.priceChange}</p>
      <p>Price Change Percent: {tickerData.priceChangePercent}</p>
      <p>Weighted Average Price: {tickerData.weightedAvgPrice}</p>
      <p>Previous Close Price: {tickerData.prevClosePrice}</p>
      <p>Last Price: {tickerData.lastPrice}</p>
      <p>Last Quantity: {tickerData.lastQty}</p>
      <p>Bid Price: {tickerData.bidPrice}</p>
      <p>Bid Quantity: {tickerData.bidQty}</p>
      <p>Ask Price: {tickerData.askPrice}</p>
      <p>Ask Quantity: {tickerData.askQty}</p>
      <p>Open Price: {tickerData.openPrice}</p>
      <p>High Price: {tickerData.highPrice}</p>
      <p>Low Price: {tickerData.lowPrice}</p>
      <p>Volume: {tickerData.volume}</p>
      <p>Quote Volume: {tickerData.quoteVolume}</p>
      <p>Open Time: {tickerData.openTime}</p>
      <p>Close Time: {tickerData.closeTime}</p>
      <p>First ID: {tickerData.firstId}</p>
      <p>Last ID: {tickerData.lastId}</p>
      <p>Count: {tickerData.count}</p>
    </div>
  );
};

export default TickerData;
