const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  try {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.quoted.sender ? m.quoted.sender : m.sender
    let bonk = global.API('https://hardianto.xyz', '/api/bonk', {
    by: await conn.getProfilePicture(m.sender).catch(_ => ''),
    for: await conn.getProfilePicture(who).catch(_ => ''),
    apikey: 'hardianto'})
    let stiker = await sticker(null, bonk, 'Bonk', '@Kokoronationz')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
  } catch (e) {
  m.reply('Conversion Failed')
  }
}
handler.command = /^bonk$/i
handler.group = false
handler.register = true
module.exports = handler
