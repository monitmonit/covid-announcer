import React, { useState } from 'react';
import { useTheme } from '@mui/material';

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

import mapHistoricalData from '../../utils/mapHistoricalData';
import mapCountryNameToCode from '../../utils/mapcountryNameToCode';

import type { Countries } from '../../types';

export enum LastDays {
  Week = 8,
  Month = 31,
  Year = 366,
}

interface HistoryProps {
  country: Countries;
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const History: React.VFC<HistoryProps> = ({ country }) => {
  const [lastDays, setLastDays] = useState(LastDays.Month);

  const { data: rawData } = useQuery(
    ['history', country, lastDays],
    () => fetchHistoryDataByCountry({ country: mapCountryNameToCode(country), lastDays }),
    {
      cacheTime: 600000,
    },
  );

  const [labels, data] = mapHistoricalData(rawData);

  const theme = useTheme();

  const chartData = {
    labels,
    datasets: [
      {
        label: '일일 확진자',
        data,
        backgroundColor: theme.palette.primary.main,
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
    <TitleCard title="변화 추이" height="90%">
      <LastDaysButtons lastDays={lastDays} setLastDays={setLastDays} />
      <Bar data={chartData} options={options} />
    </TitleCard>
  );
};

export default History;
