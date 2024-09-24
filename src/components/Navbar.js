"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";

const navItems = [
  { label: "首页", icon: <HomeRoundedIcon /> },
  { label: "关于我们", icon: <PersonPinIcon /> },
  { label: "业务介绍", icon: <EngineeringRoundedIcon /> },
  { label: "联系我们", icon: <PhoneIcon /> },
];

function Navbar({ onIndexChange }) {
  //   设置导航栏4个跳转tab的index值
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onIndexChange(newValue);

    console.log("Tabs--- newVlue: " + newValue);
    if (newValue == 0) {
      console.log("clicked! 首页");
    } else if (newValue == 1) {
      console.log("clicked! 关于我们");
    } else if (newValue == 2) {
      console.log("clicked! 业务介绍");
    } else if (newValue == 3) {
      console.log("clicked! 联系我们");
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar component="nav" sx={{ backgroundColor: "#09557B" }}>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: "bold",
            }}
          >
            护稼门户网站
          </Typography>

          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {navItems.map((item) => (
              <Tab
                key={item.label}
                label={item.label}
                icon={item.icon}
                iconPosition="start"
                sx={{ color: "#fff", fontWeight: "normal", fontSize: "18px" }}
                // onClick={handleNavPage}
              />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
