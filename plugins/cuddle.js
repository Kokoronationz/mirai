let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
try {
  let cdl = `https://hardianto.xyz/api/anime/random?sfw=cuddle&apikey=hardianto`
  let stiker = await sticker(null, cdl, 'Cuddle', '@Kokoronationz')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
} catch (e) {
  m.reply('Conversion Failed')
  }
}


handler.command = /^cuddle$/i
handler.group = false
handler.register = true
module.exports = handler
