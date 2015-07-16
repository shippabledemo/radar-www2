# DOCKER-VERSION 1.1.2
FROM ttrahanbeta/appbase2:flat_v3

# Bundle app source
# RUN mkdir -p /src
ADD . /src
# Install app dependencies
# RUN cd /src; npm install  

ENTRYPOINT ["/src/boot.sh"]