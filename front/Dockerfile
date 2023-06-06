# # FROM node:16 as build
# # RUN apt update; \
# #     apt upgrade -y;
# # WORKDIR /app
# # COPY package.json .
# # RUN npm install
# # COPY . .
# # #RUN npm run build


# # #-------------------------#
# # FROM nginx:alpine
# # # WORKDIR /usr/share/nginx/html
# # # RUN rm -rf ./*
# # # COPY --from=builder /app/build .
# # COPY --from=build /app/build /usr/share/nginx/html
# # COPY nginx.conf /etc/nginx/conf.d/default.conf
# # #COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# # EXPOSE 80
# # CMD ["nginx", "-g", "daemon off;"]
# # Étape 1 : construire l'étape de production de l'application React
# FROM node:16 as build

# WORKDIR /app

# COPY package.json package-lock.json* yarn.lock* ./
# #COPY np.lock .
# RUN npm install

# EXPOSE 80
# COPY . .

# CMD [ "npm", "start" ]
# # Étape 2 : configurer Nginx et copier les fichiers de build
# FROM nginx

# COPY --from=build /app/ /usr/share/nginx/html
# #COPY nginx.conf /etc/nginx/conf.d/default.conf

# #CMD ["nginx", "-g", "daemon off;"]

FROM node:16 as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
#COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]