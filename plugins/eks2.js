let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, command}) => {
  try {
  let res = await fetch('https://some-random-api.ml/animu/'+command)
  let json = await res.json()
  let { 
url
} = json
let stiker = await sticker(null, url, command.charAt(0).toUpperCase() + command.slice(1), global.author)
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
  }
}

handler.command = /^(pat|hug|wink)/i
handler.register = true

module.exports = handler
