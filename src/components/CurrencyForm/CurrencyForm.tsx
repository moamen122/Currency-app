import React from 'react';
import { Button, FormContainer, Input } from '../../styles';

interface CurrencyFormProps {
  currencyPair: string;
  onCurrencyPairChange: any;
  onSubmit: () => Promise<void>;
}


const CurrencyForm: React.FC<CurrencyFormProps> = ({ onSubmit,onCurrencyPairChange,currencyPair}) => {
  const handleSubmit = (event: React.FormEvent) => {

    event.preventDefault();
    onSubmit();
  };



  return (
    <FormContainer onSubmit={handleSubmit}>
      <label>
        Select Currency Pair
        <Input type="text" value={currencyPair} onChange={onCurrencyPairChange} required/>
        <Button type="submit">Submit</Button>
      </label>
    </FormContainer>
  );
};

export default CurrencyForm;
