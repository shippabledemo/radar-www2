# DOCKER-VERSION 1.1.2
FROM shippabledemo/demobase:v5

# Bundle app source
# RUN mkdir -p /src
ADD . /src
# Install app dependencies
RUN cd /src; npm link express \
  grunt \
  grunt-cli \
  body-parser \
  cookie-parser \
  cors \
  debug \
  express \
  express-session \
  method-override \
  morgan \
  request \
  sync-request \
  winston

ENTRYPOINT ["/src/boot.sh"]
