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
  border-radius: 13px;
  border: 1px solid ${(props) => (props.theme.palette.mode === 'dark' ? '#4D4D4D' : '#EBEBEB')};
  background-color: ${(props) => (props.theme.palette.mode === 'dark' ? '#25282C' : '#fff')};
`;

export default TitleCard;
