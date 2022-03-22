FROM node:alpine as builder

#set working directory
RUN mkdir -p /var/www/app/eutech
WORKDIR /var/www/app/eutech

#copy package.json to working dir to prevent reinstallation
#of npm packages 
# COPY ./package.json ./



#copy the project into the working dir
COPY . /var/www/app/eutech

RUN ls /var/www/app/eutech


#run package installations
RUN npm install --legacy-peer-deps


RUN npm run build

EXPOSE 3000

CMD ["npm","start"]