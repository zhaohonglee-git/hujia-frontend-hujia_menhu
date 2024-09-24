import React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import ContactCard from "@/components/ContactCard";

import Box from "@mui/material/Box";

const Contactus = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "grey.800",
        color: "white",
        display: "flex",
        width: "100vw",
        backgroundColor: "white",
        // padding: "100px",
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          flex: 1,
          backgroundImage: "url(/images/contact_first_image.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      <Box
        sx={{
          felx: 1,
          width: "40%",
          paddingTop: "90px",
          paddingRight: "50px",
          paddingLeft: "50px",
          paddingBottom: "30px",
        }}
      >
        <ContactCard />
      </Box>
    </Box>
  );
};

export default Contactus;
