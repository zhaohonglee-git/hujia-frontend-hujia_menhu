import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedTypography = ({ text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Typography>
        {text}
      </Typography>
    </motion.div>
  );
};

export default AnimatedTypography;
