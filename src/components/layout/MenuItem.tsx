import React from 'react';
import Typography from '@mui/material/Typography';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from '@emotion/react';

interface HeaderItemProps {
  country: string;
}

const HeaderItem: React.VFC<HeaderItemProps> = ({ country }) => {
  const router = useRouter();
  const { country: countryParams } = router.query;

  const theme = useTheme();
  return (
    <Link href={`/${country.toLowerCase()}`}>
      <a>
        <Typography
          variant="h6"
          color={country.toLowerCase() === countryParams && theme.palette.primary.main}
        >
          {country}
        </Typography>
      </a>
    </Link>
  );
};

export default HeaderItem;
