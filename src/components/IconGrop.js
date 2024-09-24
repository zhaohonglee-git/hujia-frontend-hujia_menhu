import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AirplanemodeActiveRoundedIcon from "@mui/icons-material/AirplanemodeActiveRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";

const IconText = ({ icon: Icon, text1, text2 }) => (
  <Box direction="column" alignItems="center">
    <Icon style={{ fontSize: 50 }} sx={{ color: "#A7241A" }} />
    <Typography variant="h6">{text1}</Typography>
    <Typography variant="body2">{text2}</Typography>
  </Box>
);

export default function IconGrop() {
  return (
    <Box
      spacing={2}
      justify="space-around"
      sx={{
        backgroundColor: "rgba(62,69,73,0.77)",
        color: "white",
        padding: "60px",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Stack direction="row" justifyContent="center" spacing={20} mb={2}>
        <IconText
          icon={EmojiEventsRoundedIcon}
          text1="正品低价"
          text2="机器人厂家授权正品备件"
        />
        <IconText
          icon={AirplanemodeActiveRoundedIcon}
          text1="快速响应"
          text2="多地技术服务中心就近服务支持"
        />
        <IconText
          icon={HomeRoundedIcon}
          text1="专业技术服务中心"
          text2="上百家技术服务中心专业技师团队"
        />
        <IconText
          icon={ManageAccountsRoundedIcon}
          text1="贴心服务"
          text2="一站式服务售后保障"
        />
      </Stack>
    </Box>
  );
}
