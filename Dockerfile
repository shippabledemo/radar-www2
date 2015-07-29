# DOCKER-VERSION 1.1.2
FROM quay.io/shippabledemo/demobase:v5

# Bundle app source
# RUN mkdir -p /src
ADD . /src
# Install app dependencies
# RUN cd /src; npm install

ENTRYPOINT ["/src/boot.sh"]
