
FROM node:14-alpine as builder
WORKDIR /build/
ADD ./ /build/

ARG npm_registry
RUN npm install --registry=https://registry.npmmirror.com
ARG env=dev
RUN npm run build


FROM nginx:1.21-alpine
COPY --from=builder /build/dist /usr/share/nginx/html

ARG deployDir=.
COPY ./${deployDir}/nginx/conf.d /etc/nginx/conf.d
RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' > /etc/timezone
EXPOSE 80/TCP
