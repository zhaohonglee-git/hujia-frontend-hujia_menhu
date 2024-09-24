"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        height: 350,
        bgcolor: "grey.800",
        padding: 4,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex", // 使用flex布局
          flexDirection: "column", // 使子元素垂直排列
          justifyContent: "center", // 垂直方向居中
          alignItems: "center", // 水平方向居中
          height: "100vh",
          //   bgcolor: "grey.800",
        }}
      >
        <Typography
          variant="h5"
          padding={2}
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          友情链接
        </Typography>
        <Stack direction="row" spacing={4} padding={1}>
          <Link href="#" color="inherit" underline="hover">
            中国消费者协会和解监督平台
          </Link>
          <Link href="#" color="inherit" underline="hover">
            ABB机器人
          </Link>
          <Link href="#" color="inherit" underline="hover">
            FANUC机器人
          </Link>
        </Stack>
        <Stack direction="row" spacing={4} padding={1}>
          <Link href="#" color="inherit" underline="hover">
            ABB机器人
          </Link>
          <Link href="#" color="inherit" underline="hover">
            FANUC机器人
          </Link>
          <Link href="#" color="inherit" underline="hover">
            遨博机器人
          </Link>
          <Link href="#" color="inherit" underline="hover">
            埃斯顿机器人
          </Link>
          <Link href="#" color="inherit" underline="hover">
            新时达机器人
          </Link>
        </Stack>
        <Stack direction="row" spacing={4} padding={1}>
          <Link href="#" color="inherit" underline="hover">
            教育部
          </Link>
          <Link href="#" color="inherit" underline="hover">
            中国职业教育联盟
          </Link>
          <Link href="#" color="inherit" underline="hover">
            北京华晟
          </Link>
        </Stack>
        <Typography variant="body1" sx={{ marginBottom: 10 }}>
          {/* 使用 marginBottom 添加空行 */}
        </Typography>

        <Stack direction="row" spacing={4}>
          <Typography variant="body2" sx={{ marginBottom: 4 }}>
            @2020-2024 Hujia.cn, All Rights Reserved 护稼平台版权所有
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 4 }}>
            地址：北京市通州区经海五路3号院
          </Typography>
        </Stack>
        <Stack direction="row" spacing={4}>
          <Typography variant="body2" sx={{ marginBottom: 4 }}>
            招贤纳士
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 4 }}>
            合作加盟
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography variant="body2" sx={{ marginBottom: 4 }}>
            护稼平台客服热线： 40040033424
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
