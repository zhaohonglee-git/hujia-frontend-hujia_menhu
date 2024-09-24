# 使用官方 Node.js 镜像作为基础镜像
FROM node:18

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 文件到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 复制项目的所有文件到工作目录
COPY . .

# 构建 Next.js 应用
RUN npm run build

# 暴露 Next.js 默认的端口
EXPOSE 3000

# 启动应用
CMD ["npm", "start"]
