import React from 'react';
import Typography from '@mui/material/Typography';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '@emotion/react';

import type { Countries } from '../../types';

interface HeaderItemProps {
  country: Countries;
}

const HeaderItem: React.VFC<HeaderItemProps> = ({ country }) => {
  const router = useRouter();
  const { country: countryParams } = router.query;

  const theme = useTheme();
  return (
    <Link href={`/${country}`}>
      <a>
        <Typography variant="h6" color={country === countryParams && theme.palette.primary.main}>
          {country.toUpperCase()}
        </Typography>
      </a>
    </Link>
  );
};

export default HeaderItem;
