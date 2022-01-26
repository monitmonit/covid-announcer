import React from 'react';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

interface HeaderItemProps {
  country: string;
}

const HeaderItem: React.VFC<HeaderItemProps> = ({ country }) => {
  return (
    <Link href={`/${country.toLowerCase()}`}>
      <a>
        <Typography variant="h6">{country}</Typography>
      </a>
    </Link>
  );
};

export default HeaderItem;
