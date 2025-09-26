# ---------BUILDER StAGE------------------
FROM node:18 AS builder
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=client-panel --docker

# ---------INTSALLER StAGE------------------
# Add lockfile and package.json's of isolated subworkspace
FROM node:18 AS installer
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install

# Build the project
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json

# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

ARG MODE

RUN rm -rf /app/apps/client-panel/public/favicon.ico
RUN mv /app/apps/client-panel/public/favicon.${MODE}.ico /app/apps/client-panel/public/favicon.ico


# RUN yarn turbo run format --filter=client-panel...
# RUN yarn turbo run lint-fix --filter=client-panel...

RUN yarn turbo run build:${MODE} --filter=client-panel...


# ---------RUNNER STAGE------------------
FROM nginx:1.23.3-alpine AS runner
WORKDIR /app

COPY --from=installer /app/apps/client-panel/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=installer /app/apps/client-panel/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 443
EXPOSE 8443

CMD ["nginx","-g","daemon off;"]
