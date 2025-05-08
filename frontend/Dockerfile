FROM dh-mirror.gitverse.ru/node:21.7-alpine3.18 AS build
ARG VITE_API_URL
ENV NODE_ENV="development"
ENV VITE_API_URL ${VITE_API_URL}
WORKDIR /app
COPY package.json package.json
RUN corepack enable && corepack prepare pnpm --activate
RUN pnpm i
COPY . .
ENV NODE_ENV="production"
RUN pnpm run build

FROM dh-mirror.gitverse.ru/nginx:1.25-alpine
COPY --from=build /app/dist /opt/site
COPY nginx.conf /etc/nginx/nginx.conf
