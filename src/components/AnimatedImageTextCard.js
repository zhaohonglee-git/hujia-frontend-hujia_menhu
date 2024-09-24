"use client"
import React, { useEffect } from "react";
import ImageTextCard from "./ImageTextCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedImageTextCard = ({ title, content, imagePosition, imageSrc }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const animationVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 1.2, type: "spring", stiffness: 100 },
    },
  };
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animationVariants}
    >
      <ImageTextCard
        key={title}
        title={title}
        content={content}
        imagePosition={imagePosition}
        imageSrc={imageSrc}
        animationVariants={animationVariants}
      />
    </motion.div>
  );
};

export default AnimatedImageTextCard;
