FROM node:16-bullseye-slim
WORKDIR /app
ENV PATH=/app/node_modules/.bin:$PATH