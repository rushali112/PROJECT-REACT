import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios'; // Import axios for mocking
import IPOCalendar from './IPOCalendar';

jest.mock('axios'); // Mock axios for API calls

describe('IPOCalendar Component', () => {
  it('renders without crashing', () => {
    render(<IPOCalendar />);
    expect(screen.getByText('Upcoming IPOs')).toBeInTheDocument();
  });

  it('fetches and displays IPO data', async () => {
    const mockIPOData = [
      { id: 1, name: 'IPO 1' },
      { id: 2, name: 'IPO 2' },
    ];

    axios.get.mockResolvedValueOnce({ data: mockIPOData });

    render(<IPOCalendar />);

    // You might want to add more specific assertions based on the data
    expect(await screen.findByText('IPO 1')).toBeInTheDocument();
    expect(await screen.findByText('IPO 2')).toBeInTheDocument();
  });
});
