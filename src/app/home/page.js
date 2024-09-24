import React from "react";
import IconGrop from "@/components/IconGrop";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FullImageBackgroundCarousel from "@/components/FullImageBackgroundCarousel";


const HomePage = () => {
  
  return (
    <Box
      sx={{
        backgroundColor: "white",
        height: "auto",
        width:"100%",
        color: "white",
        // padding: "20px",
        margingBottom: "10px",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
   
      <FullImageBackgroundCarousel />
      <IconGrop />
    </Box>
  );
};

export default HomePage;
