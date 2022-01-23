import React from 'react';
import Link from 'next/link';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

const HomeMenu: React.VFC = () => {
  const theme = useTheme();

  return (
    <Box sx={{ lineHeight: '0' }}>
      <Link href="/">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 2C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20ZM18 4C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H18Z"
            fill={`${theme.palette.primary.main}`}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 2C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4C2 2.89543 2.89543 2 4 2H20ZM18 4C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H18Z"
            fill={`${theme.palette.primary.main}`}
          />
          <path
            d="M7 15C7 15.5523 6.55228 16 6 16C5.44772 16 5 15.5523 5 15C5 14.4477 5.44772 14 6 14C6.55228 14 7 14.4477 7 15Z"
            fill={`${theme.palette.primary.main}`}
          />
          <path
            d="M7 15C7 15.5523 6.55228 16 6 16C5.44772 16 5 15.5523 5 15C5 14.4477 5.44772 14 6 14C6.55228 14 7 14.4477 7 15Z"
            fill={`${theme.palette.primary.main}`}
          />
          <path
            d="M11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10Z"
            fill={`${theme.palette.primary.main}`}
          />
          <path
            d="M11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10Z"
            fill={`${theme.palette.primary.main}`}
          />
          <path
            d="M16 14C16 14.5523 15.5523 15 15 15C14.4477 15 14 14.5523 14 14C14 13.4477 14.4477 13 15 13C15.5523 13 16 13.4477 16 14Z"
            fill={`${theme.palette.primary.main}`}
          />
          <path
            d="M16 14C16 14.5523 15.5523 15 15 15C14.4477 15 14 14.5523 14 14C14 13.4477 14.4477 13 15 13C15.5523 13 16 13.4477 16 14Z"
            fill={`${theme.palette.primary.main}`}
          />
          <path
            d="M19 7C19 7.55228 18.5523 8 18 8C17.4477 8 17 7.55228 17 7C17 6.44772 17.4477 6 18 6C18.5523 6 19 6.44772 19 7Z"
            fill={`${theme.palette.primary.main}`}
          />
          <path
            d="M19 7C19 7.55228 18.5523 8 18 8C17.4477 8 17 7.55228 17 7C17 6.44772 17.4477 6 18 6C18.5523 6 19 6.44772 19 7Z"
            fill={`${theme.palette.primary.main}`}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.4596 7.19696L15.2007 14.8009L10.0781 10.7028L6.39043 15.3123L5.60956 14.6877L9.92191 9.29722L14.7993 13.1991L17.5404 6.80304L18.4596 7.19696Z"
            fill={`${theme.palette.primary.main}`}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.4596 7.19696L15.2007 14.8009L10.0781 10.7028L6.39043 15.3123L5.60956 14.6877L9.92191 9.29722L14.7993 13.1991L17.5404 6.80304L18.4596 7.19696Z"
            fill={`${theme.palette.primary.main}`}
          />
        </svg>
      </Link>
    </Box>
  );
};

export default HomeMenu;
