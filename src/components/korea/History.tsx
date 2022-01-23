import React, { useState } from 'react';
import TitleCard from './TitleCard';
import LastDaysButtons from './LastDaysButtons';

import { useQuery } from 'react-query';
import fetchHistoryDataByCountry from '../../api/fetchHistoryDataByCountry';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export enum LastDays {
  Week = 8,
  Month = 31,
  Year = 366,
}

const History: React.VFC = () => {
  const [lastDays, setLastDays] = useState(LastDays.Month);

  const { data: rawData } = useQuery(
    ['history', lastDays],
    () => fetchHistoryDataByCountry({ country: 'KR', lastDays }),
    {
      cacheTime: 600000,
    },
  );

  const labels = [];
  const data = [];

  if (rawData) {
    let lastValue = 0;
    let index = 0;
    for (const [key, value] of Object.entries(rawData.timeline.cases)) {
      if (index > 0) {
        labels.push(key);
        data.push(value - lastValue);
      }
      lastValue = value;
      index++;
    }
  }

  const chartData = {
    labels,
    datasets: [
      {
        label: '일일 확진자',
        data,
        backgroundColor: '#3178C6',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <TitleCard title="변화추이" height="90%">
      <LastDaysButtons lastDays={lastDays} setLastDays={setLastDays} />
      <Bar data={chartData} options={options} />
    </TitleCard>
  );
};

export default History;
