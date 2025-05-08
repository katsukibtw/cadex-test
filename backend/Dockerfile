FROM node:alpine as base
ARG PORT
WORKDIR /app
COPY package.json package.json
RUN corepack enable && corepack prepare pnpm --activate
RUN pnpm i
COPY . .
ENV PORT ${PORT?3000}
CMD ["pnpm", "start"]
