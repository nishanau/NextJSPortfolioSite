#build stage
FROM node:20-alpine AS build
WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm ci

# copy all files
COPY . .
RUN npm run build

# production stage
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# copy only necessary files from build stage
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

# give permission to node user
RUN mkdir -p .next/cache && chown -R node:node .next

#run as root user
USER node
EXPOSE 3000

CMD ["node", "server.js"]
