"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import AnimatedText from "@/components/AnimatedText";

const page = () => {
  return (
    <Box>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
      >
        <Typography variant="h5" sx={{ color: "red" }}>
          这是一个具有动画效果的文字组件Typography
        </Typography>
      </motion.div>
      <motion.div
        animate={{ x: 50, y: 200, rotate: 90 }}
        transition={{
          type: "spring",
          duration: 2,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        <Container maxWidth="sm">
          <Box sx={{ bgcolor: "#cfe8fc", height: "40vh" }}>
            <Typography variant="h5" sx={{ color: "red" }}>
              这是一个旋转动画
            </Typography>
          </Box>
        </Container>
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        <Box sx={{ bgcolor: "#cfe8fc", height: "40vh", width: "40vh" }}>
          <Typography variant="h5" sx={{ color: "red" }}>
            这是一个旋转动画
          </Typography>
        </Box>
      </motion.div>
      <AnimatedText
        text="这是一个有动画效果的文字组件"
        sx={{ color: "gray", fontWeight: "bold" }}
      />
    </Box>
  );
};

export default page;
