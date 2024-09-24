import React from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // 每个字母显示的间隔时间
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        repeat: Infinity,
        repeatDelay: 6,
        duration: 5,
      },
    },
  };

  return (
    <Typography
      component={motion.div}
      variants={container}
      initial="hidden"
      animate="visible"
      variant="h4"
      style={{
        display: "inline-flex",
        flexWrap: "wrap",
        fontWeight: "bold",
        color: "#0AA0F7",
      }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }}
        >
          {letter}
        </motion.span>
      ))}
    </Typography>
  );
};

export default AnimatedText;
