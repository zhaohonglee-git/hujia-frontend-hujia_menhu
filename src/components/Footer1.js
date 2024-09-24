import React from "react";
import { Box, Typography, Stack, Link } from "@mui/material";

// 该文档为chatgpt生成
const Footer1 = () => {
  return (
    <Box
      sx={{
        backgroundColor: "grey.800",
        color: "white",
        padding: "20px",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Friendly Links Section */}
      <Stack direction="row" justifyContent="center" spacing={2} mb={2}>
        <Typography variant="body1" sx={{ marginRight: "8px" }}>
          友情链接
        </Typography>
        <Stack spacing={2}>
          <Link href="#" color="inherit" underline="hover">
            中国消费者协会和解监督平台
          </Link>
          <Link href="#" color="inherit" underline="hover">
            人力资源和社会保障部
          </Link>
          <Link href="#" color="inherit" underline="hover">
            中国教育网
          </Link>
        </Stack>
        <Stack spacing={2}>
          <Link href="#" color="inherit" underline="hover">
            游博机器人
          </Link>
          <Link href="#" color="inherit" underline="hover">
            ABB机器人
          </Link>
          <Link href="#" color="inherit" underline="hover">
            Fanuc机器人
          </Link>
          <Link href="#" color="inherit" underline="hover">
            埃斯顿机器人
          </Link>
          <Link href="#" color="inherit" underline="hover">
            新时达机器人
          </Link>
        </Stack>
      </Stack>

      {/* Footer Details */}
      <Typography variant="body2" mb={1}>
        @2020-2024 Hujia.cn Corporation, All Rights Reserved 护猿平台 版权所有
        地址：北京市通州区经海五路三号院
      </Typography>
      <Typography variant="body2">
        招贤纳士 合作加盟 护稼平台客服电话：400400400
      </Typography>
    </Box>
  );
};

export default Footer1;
