# my wechat bot
my personal wechat bot developed on [wechaty](https://github.com/wechaty/wechaty) and [wechaty-puppet-macpro](https://github.com/juzibot/wechaty-puppet-macpro)

## functions
- [ ] keywords auto-reply
- [ ] busy mode (I'm not available)
- [ ] @someones 
- [ ] send messages to multiple users
- [ ] notify me something
- [ ] send me information automatically (byr-top10)
- [ ] collect information from wechat
- [ ] send command to download movies from bt

## Usage

1. start docker container
   
   ```docker
   docker run -it --rm --name=wechaty -v /home/huijuan/my-wechat-bot/bot:/my-macpro-bot/bot rz8217525/my-wechat-bot:latest
   ```

2. Set token as environment variables
   ```shell
   export TOKEN='xxxxxxxx'
   ```

3. run the bot
   ```shell
   node bot/wecahty.js
   ```
   > or (TBD)
   > ```shell
   > npx babel-node bot/wechaty-ES6.js
   > ```

