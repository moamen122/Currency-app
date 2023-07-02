import React, { useState } from 'react';
import { Trade, TradesDataProps } from '../../types';
import { Button, Table, Td, Th } from '../../styles';



const TradesData: React.FC<TradesDataProps> = ({ trades }) => {
  const [sortBy, setSortBy] = useState<keyof Trade>('time');

 const handleSort = (field: keyof Trade) => {
    setSortBy(field);
  };

  const sortedTrades = [...trades].sort((a, b) => {
    if (sortBy === 'time') {
      return a.time - b.time;
    } else if (sortBy === 'price') {
      return parseFloat(a.price) - parseFloat(b.price);
    } else if (sortBy === 'qty') {
      return parseFloat(a.qty) - parseFloat(b.qty);
    }
    return 0;
  });

  return (
    <div >
      <h2>Recent Trades</h2>
      <div style={{marginBottom:"10px"}}>
        <Button onClick={() => handleSort('time')}>Sort by Time</Button>
        <Button onClick={() => handleSort('price')}>Sort by Price</Button>
        <Button onClick={() => handleSort('qty')}>Sort by Quantity</Button>
      </div>
      <Table>
        <thead>
          <tr>
            <Th >Price</Th>
            <Th >Quantity</Th>
            <Th >Quote Qty:</Th>
            <Th >Time</Th>
          </tr>
        </thead>
        <tbody>
          {sortedTrades.map((trade) => (
            <tr key={trade.id}>
              <Td>{trade.time}</Td>
              <Td>{trade.price}</Td>
              <Td>{trade.qty}</Td>
              <Td>{trade.quoteQty}</Td>
            </tr>
          ))}
        </tbody>
      </Table>

    </div>
  );
};

export default TradesData;
