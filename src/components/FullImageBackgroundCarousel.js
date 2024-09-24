"use client";
import { Box, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimationdText from "@/components/AnimatedText";

export default function FullImageBackgroundCarousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'url("/images/home_first_image.png")',
    'url("/images/home_first_image1.png")',
    'url("/images/home_first_image2.png")',
    'url("/images/home_first_image3.png")',
    'url("/images/home_first_image4.png")',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // 每3秒切换图片

    return () => clearInterval(interval); // 清除定时器
  }, [images.length]);

  return (
    <Box
      sx={{
        backgroundImage: `${images[currentImage]}`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "46.87%",
        width: "100%",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          margin: 2,
          backgroundColor: "rgba(62,69,73,0.77)",
          color: "white",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          borderRadius: "8px",
          position: "absolute",
          top: "80%",
          left: "20%",
          transform: "translate(-50%, -50%)",
          maxWidth: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            textAlign: "left",
          }}
        >
          <Typography variant="h6" gutterBottom>
            工业机器人应用企业的
          </Typography>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 3 }}
          >
            {/* <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#0AA0F7" }}
            >
              智能设备一站式养护服务平台
            </Typography> */}
          </motion.div>
          <AnimationdText text="智能设备一站式养护服务平台" />
        </Box>
      </Paper>
    </Box>
  );
}
