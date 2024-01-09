import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios'; 
import ExchangeRates from './ExchangeRates';

jest.mock('axios'); 

describe('ExchangeRates Component', () => {
  it('renders without crashing', async () => {
    const mockExchangeRates = [
      { symbol: 'USDCAD', rate: 1.25, timestamp: Date.now() },
      { symbol: 'GBPUSD', rate: 1.35, timestamp: Date.now() },
    ];

    axios.get.mockResolvedValueOnce({ data: mockExchangeRates });

    render(<ExchangeRates />);

    expect(await screen.findByText('Currency Exchange Rates')).toBeInTheDocument();
    expect(screen.getByText('USDCAD')).toBeInTheDocument();
    expect(screen.getByText('GBPUSD')).toBeInTheDocument();
  });

  it('handles API fetch error', async () => {
    axios.get.mockRejectedValueOnce(new Error('API error'));

    render(<ExchangeRates />);

    expect(await screen.findByText('Error fetching exchange rates:')).toBeInTheDocument();
  });
});
