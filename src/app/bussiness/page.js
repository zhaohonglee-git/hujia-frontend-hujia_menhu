"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CoreServices from "@/components/CoreServices";

const Bussiness = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        height: "auto",
        width: "100%",
        color: "white",
        // padding: "20px",
        // marginBottom: "20px",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* <Typography variant="h6" sx={{ pading: "20px" }}>
        Bussiness Page
      </Typography> */}
      <Box
        sx={{
          backgroundImage: 'url("/images/bussiness_first_image.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "31.25%",
          width: "100%",
        }}
      />
      <Box />
      <Typography
        variant="h4"
        sx={{
          paddingTop: "100px",
          paddingBottom: "40px",
          color: "#0D98E9",
          fontWeight: "bold",
        }}
      >
        我们致力于为用户提供以下四项核心业务，确保每一环节都能满足高标准的服务质量
      </Typography>
      <CoreServices />
    </Box>
  );
};

export default Bussiness;
