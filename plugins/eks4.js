let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, command }) => {
try {
  let url = `https://hardianto.xyz/api/anime/random?sfw=${command}&apikey=hardianto`
  let stiker = await sticker(null, url, command.charAt(0).toUpperCase() + command.slice(1), global.author)
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
} catch (e) {
  m.reply('Conversion Failed')
  }
}

handler.command = /^baka|tickle$/i
handler.limit = false
handler.group = false
handler.register = true
module.exports = handler