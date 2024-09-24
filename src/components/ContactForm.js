"use client";
import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";

const services = [
  { value: "service1", label: "机器人维护保养" },
  { value: "service2", label: "机器人备件更换" },
  { value: "service3", label: "机器人检测维修" },
  { value: "service4", label: "机器人编程调试" },
  { value: "service5", label: "其它" },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    service: "",
    companyName: "",
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    setIsClient(true); // 在客户端渲染时设置为 true
  }, []);

  const validate = () => {
    let tempErrors = {};
    tempErrors.service = formData.service ? "" : "请选择服务";
    tempErrors.companyName = formData.companyName ? "" : "请输入所在单位名称";
    tempErrors.name = formData.name ? "" : "请输入姓名";
    tempErrors.phone = formData.phone ? "" : "请输入有效的电话";
    tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)
      ? ""
      : "请输入有效的邮箱";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setIsSubmitted(true); // 设置提交状态为 true
          setOpen(true);
          handleRefresh();
        } else {
          alert("提交失败，请稍后再试");
        }
      } catch (error) {
        console.error("提交时出错:", error);
        alert("提交时出错，请稍后再试");
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleRefresh = () => {
    setIsRefreshing(true); // 设置状态为刷新中
    setTimeout(() => {
      window.location.reload(); // 3秒后刷新页面
    }, 3000);
  };

  useEffect(() => {
    if (isSubmitted && isClient) {
      const router = require("next/router"); // 确保客户端渲染时才加载
      console.log("提交成功，跳转页面");
    }
  }, [isSubmitted, isClient]);

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <TextField
        select
        label="需要的服务"
        name="service"
        value={formData.service}
        onChange={handleChange}
        error={!!errors.service}
        helperText={errors.service}
        fullWidth
        margin="normal"
      >
        {services.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="所在单位名称"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        error={!!errors.companyName}
        helperText={errors.companyName}
        fullWidth
        margin="normal"
      />
      <TextField
        label="姓名"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        fullWidth
        margin="normal"
      />
      <TextField
        label="电话"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={!!errors.phone}
        helperText={errors.phone}
        fullWidth
        margin="normal"
      />
      <TextField
        label="邮箱"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
        margin="normal"
      />
      <Box sx={{ paddingTop: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={isRefreshing}
          fullWidth
        >
          提交
        </Button>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={handleClose}
        sx={{ position: "fixed", bottom: 80, left: 50, right: 20 }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          您的信息已经提交成功，我们会尽快与您联系。
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
