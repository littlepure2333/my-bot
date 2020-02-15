FROM node:10.16.0

# init workdir
RUN mkdir /my-macpro-bot
WORKDIR /my-macpro-bot
COPY ./my-macpro-bot .

# install vim to edit files
RUN apt-get -y update \
    && apt-get -y install vim

# add taobao accelerator if you are at home
# RUN npm config set registry https://registry.npm.taobao.org

# install wechaty, macpro-puppet and babel-node
RUN npm install \ 
    # to see detailed log in npm install
    # npm install --loglevel verbose
    && npm cache clean --force

ENTRYPOINT [ "/bin/bash" ]