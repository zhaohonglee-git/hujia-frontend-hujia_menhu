import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";

const IconText = ({ icon: Icon, text1, text2 }) => (
  <Box direction="column" alignItems="center">
    <Icon style={{ fontSize: 40 }} />
    <Typography variant="h6">{text1}</Typography>
    <Typography variant="body2">{text2}</Typography>
  </Box>
);

export default function IconGropTest() {
  return (
    <Box
      spacing={2}
      justify="space-around"
      sx={{
        // backgroundColor: "grey.800",
        color: "white",
        padding: "60px",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Stack direction="row" justifyContent="center" spacing={20} mb={2}>
        <IconText icon={PhoneIcon} text1="正品低价" text2="各大厂商直接供货" />
        <IconText icon={PersonPinIcon} text1="快速物流" text2="多地分仓发货" />
        <IconText
          icon={HomeRoundedIcon}
          text1="专业门店"
          text2="上万家门店专业技师团队"
        />
        <IconText
          icon={EngineeringRoundedIcon}
          text1="贴心服务"
          text2="一站式服务售后保障"
        />
      </Stack>
    </Box>
  );
}
