import React from "react";
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const CopyRight =  ({ }) => (
    <Typography
    variant="body2"
    align="center"
    sx={{
      color: 'text.secondary',
    }}
    >
    {'Copyright © '}
    <Link color="inherit" href="">
      Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

export default CopyRight;