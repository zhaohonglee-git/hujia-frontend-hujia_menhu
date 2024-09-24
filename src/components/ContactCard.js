import React from "react";
import ContactForm from "./ContactForm";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ContactCard = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Typography
          variant="h3"
          component="div"
          color="black"
          sx={{ fontWeight: "bold" }}
        >
          联系我们
        </Typography>
        <Typography
          variant="body1"
          component="div"
          align="left"
          color="gray"
          sx={{ fontWeight: "normal" }}
        >
          为了更好的为您提供咨询和服务，请留下您的联系方式，我们将为您分配专业的工程师与您联系。
        </Typography>
      </Box>
      <ContactForm />
    </Box>
  );
};

export default ContactCard;
