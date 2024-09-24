"use client";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Tabbar from "@/components/Tabbar";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Box from "@mui/material/Box";
import About from "./about/page";
import HomePage from "./home/page";
import Bussiness from "./bussiness/page";
import Contactus from "./contactus/page";
import Footer from "@/components/Footer";
import Footer1 from "@/components/Footer1";
import IconGrop from "@/components/IconGrop";

export default function Home() {
  const [content, SetContent] = React.useState(<HomePage />);

  const onIndexChange = (value) => {
    if (value == 0) {
      SetContent(<HomePage />);
    } else if (value == 1) {
      SetContent(<About />);
    } else if (value == 2) {
      SetContent(<Bussiness />);
    } else if (value == 3) {
      SetContent(<Contactus />);
    }
  };

  return (
    <Box>
      <Navbar onIndexChange={onIndexChange} />
      <Box sx={{ width: "100%" }}>{content}</Box>
      <Footer />
    </Box>
  );
}
