// import {Wechaty} from 'wechaty'
// import {PuppetMacpro} from 'wechaty-puppet-macpro'
// import {generate} from 'qrcode-terminal'

var Wechaty = require("wechaty")
var PuppetMacpro = require("wechaty-puppet-macpro")
var generate = require("qrcode-terminal")

const token = ${{ secrets.TOKEN }}
const name  = "littlepure's bot"

// const puppet = new PuppetMacpro({
//   token,
// })

const puppet = new PuppetMacpro.PuppetMacpro({
    token,
    })

// const bot = new Wechaty({
//   puppet,
//   name, // login without scan qrcode at next time, it will generate xxxx.memory-card.json and save login data.
// })

const bot = new Wechaty.Wechaty({
    puppet,
    name, // login without scan qrcode at next time, it will generate xxxx.memory-card.json and save login data.
  })

bot
  .on('scan', (qrcode) => {
    generate.generate(qrcode, {
      small: true
    })
  })
  .on('login', (user) => {
    console.log(`login user : ${user}`)
  })
  .on('message', msg => {
    console.log(`msg : ${msg}`)
  })
  .start()