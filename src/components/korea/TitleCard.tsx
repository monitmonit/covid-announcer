import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

interface TitleCardProps {
  title: string;
  width?: string;
  height?: string;
  children?: React.ReactNode;
}

const TitleCard: React.FC<TitleCardProps> = ({
  title,
  width = 'auto',
  height = 'auto',
  children,
}) => {
  return (
    <MyCard width={width} height={height} padding={1.5} gap={1.5}>
      <Typography variant="h6">{title}</Typography>
      <Box flexGrow={1}>{children}</Box>
    </MyCard>
  );
};

const MyCard = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  border: 1px solid #4d4d4d;
  border-radius: 13px;
  background-color: #212427;
`;

export default TitleCard;
