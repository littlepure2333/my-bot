FROM node:10.16.0

# init workdir
RUN mkdir /my-macpro-bot
WORKDIR /my-macpro-bot
COPY ./my-macpro-bot .

# check if the WORKDIR is right
RUN ls

# install vim to edit files
RUN apt-get -y update \
    && apt-get -y install vim \
    && echo "vim installed"

# install wechaty, macpro-puppet and babel-node
RUN npm install \
    && echo "wechaty, macpro-puppet and babel-node installed"

ENTRYPOINT [ "/bin/bash" ]