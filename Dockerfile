FROM node:10.16.0

COPY /my-macpro-bot .
WORKDIR /my-macpro-bot

# install wechaty, macpro-puppet and babel-node
RUN npm install \
    && echo "wechaty, macpro-puppet and babel-node installed"

# install vim to edit files
RUN apt-get update \
    && apt-get install vim \
    && echo "vim installed"

ENTRYPOINT [ "/bin/bash" ]