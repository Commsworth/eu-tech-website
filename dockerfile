
FROM node:10-alpine as builder

# ARG BASE_URL
# ARG PORT

# ENV BASE_URL=${BASE_URL}
# ENV PORT=${PORT}

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /nextjs-ui && mv ./node_modules ./nextjs-ui

WORKDIR /nextjs-ui

COPY . .

# Build the project and copy the files
RUN npm run build


EXPOSE 3000

CMD ["npm","start"]


