# pull the official base image
FROM node:20
# set working direction
WORKDIR /app
# install application dependencies
COPY package.json ./

RUN npm install
# add app
COPY . ./

EXPOSE 3000

# start app
CMD ["npm", "start"]
