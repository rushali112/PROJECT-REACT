import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import axios from 'axios';

const IPOCalendar = () => {
    const [ipoData, setIPOData] = useState([]);
    const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchIPOData = async () => {
      try {
        const response = await axios.get('https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=pk_c2615f7df73243478d7f461ccacdab7cb');
        setIPOData(response.data);
      } catch (error) {
        console.error('Error fetching IPO data:', error);
      }
    };

    fetchIPOData();
  }, []);

  return (
    <View>
      <Text >Upcoming IPOs</Text>
     
      {/* Render IPO data */}
      {loading ? (
        <Text>Loading IPO data...</Text>
      ) : (
        <FlatList
          data={ipoData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text style={liStyle}>{item.name}</Text>
          )}
        />
      )}
    </View>
  );
};

export default IPOCalendar;