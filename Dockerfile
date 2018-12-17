FROM node:6
ADD . /app
WORKDIR /app
RUN npm i
CMD [ "./AaaS_webDriverIO_1" ]