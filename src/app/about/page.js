import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ImageTextCard from "@/components/ImageTextCard";
import AnimatedImageTextCard from "@/components/AnimatedImageTextCard";

const About = () => {
  const aboutFirst = [
    {
      title: "智能设备一站式养护",
      content:
        "护稼专业维护保养服务是针对工业机器人应用企业设计的智能设备一站式养护服务。智能养护，精准匹配——护稼专业维护，助力工业机器人高效运行！",
      imagePosition: "left",
      imageSrc: "/images/about_first_image1.png",
    },
    {
      title: "数字化、智能化核心技术",
      content:
        "护稼网通过互联网信息技术平台，运用人工智能、大数据等技术，根据用户行业、设备品牌、型号、用途、应用环境等个性化特点，精准匹配到最符合用户需求的养护机构或工程师，为用户提供高质量、高效率、低价格，有保障的一站式设备养护服务。",
      imagePosition: "right",
      imageSrc: "/images/about_first_image2.png",
    },
    {
      title: "技术服务中心遍布全国",
      content:
        "遍布全国分布100余所技术服务中心，就近为区域企业提供智能设备养护服务。技术服务中心配有专业服务团队，提供一站式、标准化的设备养护服务。",
      imagePosition: "left",
      imageSrc: "/images/about_first_image3.png",
    },
    {
      title: "专业认证技术专家团队",
      content:
        "各技术服务中心均采用统一专业认证体系考核认证，专家团队均拥有丰富的行业经验，为用户提供专业、高效、安全的设备养护服务。",
      imagePosition: "right",
      imageSrc: "/images/about_first_image4.png",
    },
    {
      title: "原厂正品备件",
      content:
        "提供工业机器人原厂正品备件，提供的备件均有官方原厂授权及质保。保证备件质量，提升设备运行效率，延长设备寿命。",
      imagePosition: "left",
      imageSrc: "/images/about_first_image5.png",
    },
    {
      title: "定制化技术服务",
      content:
        "提供针对客户定制化需求的技术服务，如编程调试，虚拟仿真、系统集成等，专业技术人员针对多种行业定制化需求进行服务。",
      imagePosition: "right",
      imageSrc: "/images/about_first_image6.png",
    },
  ];



  return (
    <Box
      sx={{
        backgroundColor: "white",
        height: "auto",
        width: "100%",
        color: "white",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: "80%",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        {aboutFirst.map((aboutContent) => (
          <AnimatedImageTextCard
            key={aboutContent.title}
            title={aboutContent.title}
            content={aboutContent.content}
            imagePosition={aboutContent.imagePosition}
            imageSrc={aboutContent.imageSrc}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default About;
