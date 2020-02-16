import { Wechaty } from "wechaty";
import { PuppetMacpro } from "wechaty-puppet-macpro";
import { generate } from "qrcode-terminal";

const token = process.env.TOKEN;
const name = "littlepure's bot";

const puppet = new PuppetMacpro({
  token
});

const bot = new Wechaty({
  puppet,
  name // login without scan qrcode at next time, it will generate xxxx.memory-card.json and save login data.
});

bot
  .on("scan", (qrcode, status) =>
    console.log(`Scan QR Code to login: ${status}\n
            https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
              qrcode
            )}`)
  )
  .on("login", user => {
    console.log(`login user : ${user}`);
  })
  .on("message", msg => {
    console.log(`msg : ${msg}`);
  })
  .start();
