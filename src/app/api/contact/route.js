import { NextResponse } from 'next/server';
import path from "path";
import fs from "fs";

export async function GET() {
  return NextResponse.json({ message: 'Hello from GET API of api/contact -- GET' });
}

export async function POST(req) {

  const { service, companyName, name, phone, email } = await req.json();
    
    // 准备日志数据
    const logData = {
      service,
      companyName,
      name,
      phone,
      email,
      timestamp: new Date().toISOString(), 
    };
    
    // 将数据写入日志文件
    try {
      const logFilePath = path.join(process.cwd(), "logs", "contact-log.json");

      // 检查 logs 目录是否存在，如果不存在则创建
      if (!fs.existsSync(path.join(process.cwd(), "logs"))) {
        fs.mkdirSync(path.join(process.cwd(), "logs"));
      }

      // 读取现有日志文件的数据（如果存在）
      let existingLogs = [];
      if (fs.existsSync(logFilePath)) {
        const fileData = fs.readFileSync(logFilePath, "utf8");
        existingLogs = JSON.parse(fileData || "[]");
      }

      // 添加新的日志数据
      existingLogs.push(logData);

      // 写入更新后的日志文件
      fs.writeFileSync(logFilePath, JSON.stringify(existingLogs, null, 2), "utf8");

      // 返回成功响应
      return NextResponse.json({ message: '提交成功，日志已记录' });
    } catch (error) {
      console.error("写入日志文件时出错:", error);
      return NextResponse.json({ message: '服务器内部错误' });
    }
} 