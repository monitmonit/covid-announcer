import React from 'react';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

interface HeaderItemProps {
  country: string;
}

const HeaderItem: React.VFC<HeaderItemProps> = ({ country }) => {
  return (
    <Link href={`/${country}`}>
      <a>
        <Typography variant="h6">{country.toUpperCase()}</Typography>
      </a>
    </Link>
  );
};

export default HeaderItem;
