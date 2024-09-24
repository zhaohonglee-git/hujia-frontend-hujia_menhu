import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ImageTextCard = ({ title, content, imagePosition, imageSrc }) => {
  return (
    <Box>
      <Card
        sx={{ width: "100%", backgroundColor: "#5297DF", marginBottom: 20 }}
      >
        <Box
          sx={{
            width: "100%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {imagePosition === "left" && (
            <CardMedia
              component="img"
              // height="100%"
              image={imageSrc}
              alt={title}
            />
          )}
          <CardContent sx={{ spacing: 4 }}>
            <Typography
              variant="h4"
              component="div"
              color="white"
              sx={{ fontWeight: "bold" }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              component="div"
              color="white"
              sx={{ fontWeight: "normal" }}
            >
              {content}
            </Typography>
          </CardContent>
          {imagePosition === "right" && (
            <CardMedia
              component="img"
              // height="100%"
              image={imageSrc}
              alt={title}
            />
          )}
        </Box>
      </Card>
    </Box>
  );
};

export default ImageTextCard;
