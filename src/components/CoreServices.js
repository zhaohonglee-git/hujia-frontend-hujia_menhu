import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ServiceCard from "./ServiceCard";

function CoreServices() {
  const services = [
    {
      title: "维护保养",
      description:
        "定期的专业维护服务，确保设备运行在最佳状态,延长设备使用寿命,降低故障率。",
      imageSrc: "/images/bussiness_service_image1.png",
      imagePosition: "left",
    },
    {
      title: "更换备件",
      description:
        "提供快速响应的配件更换服务，确保设备在遇到零部件损耗时能够迅速恢复运行,减少停机时间。",
      imageSrc: "/images/bussiness_service_image2.png",
      imagePosition: "right",
    },
    {
      title: "检测维修",
      description:
        "全面的设备检测与维修服务，及时发现并解决潜在问题，保障设备稳定高效运行。",
      imageSrc: "/images/bussiness_service_image3.png",
      imagePosition: "left",
    },
    {
      title: "编程调试",
      description:
        "专业的编程与调试服务，根据企业的具体需求，优化设备性能，提升生产效率。",
      imageSrc: "/images/bussiness_service_image4.png",
      imagePosition: "right",
    },
  ];

  return (
    // <Container sx={{ my: 5, textAlign: "center" }}>

    // </Container>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // 垂直居中
        flexDirection: "column",
        width: "70%",
        margin: "auto",
      }}
    >
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          description={service.description}
          imageSrc={service.imageSrc}
          imagePosition={service.imagePosition}
        />
      ))}
    </Box>
  );
}

export default CoreServices;
