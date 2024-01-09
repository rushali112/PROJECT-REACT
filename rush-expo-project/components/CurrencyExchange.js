import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const CurrencyExchange = () => {
  const [exchangeRates, setExchangeRates] = useState({});

  

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get('https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=pk_c2615f7df73243478d7f461ccacdab7cb');
        setExchangeRates(response.data);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, []);

  return (
    <View>
      <Text>Latest Currency Exchange Rates:</Text>
      {Object.keys(exchangeRates).map(currency => (
        <Text key={currency}>{currency}: {exchangeRates[currency]}</Text>
      ))}
    </View>
  );
};

export default CurrencyExchange;