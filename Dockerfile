FROM node:20
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install -g @angular/cli
RUN npm install
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0", "--allowed-hosts=all"]