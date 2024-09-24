import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";

function ServiceCard({ title, description, imageSrc, imagePosition = "left" }) {
  return (
    <Card
      sx={{
        width: "100%",
        my: 5,
        transition: "transform 0.2s ease-in-out", // 动画效果
        "&:hover": {
          transform: "scale(1.1)", // 鼠标悬停时放大
          backgroundColor: "rgba(120,200,240,0.3)", // 悬停时的背景颜色
        },
      }}
    >
      <CardActionArea>
        <Box
          sx={{
            display: "flex",
            flexDirection:
              imagePosition === "left" || imagePosition === "right"
                ? "row"
                : "column",
          }}
        >
          {imagePosition === "left" && (
            <CardMedia
              component="img"
              // height="400px"
              image={imageSrc} // 图片路径
              alt={title}
            />
          )}
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center", // 垂直居中
                justifyContent: "center", // 水平居中
                flexDirection: "column",
                height: "100%", // 使Box填满整个CardContent的高度
              }}
            >
              <Typography
                variant="h3"
                component="div"
                color="#0D98E9"
                sx={{ fontWeight: "bold" }}
              >
                {title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {description}
              </Typography>
            </Box>
          </CardContent>
          {imagePosition === "right" && (
            <CardMedia
              component="img"
              // height="400px"
              image={imageSrc} // 图片路径
              alt={title}
            />
          )}
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default ServiceCard;
