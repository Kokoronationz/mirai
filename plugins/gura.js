const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
if (text.length > 7) throw 'Max. 7 huruf!'
if (!text) text = await conn.getName(m.sender)
await m.reply(global.wait)
  let apiUrl = global.API( 'http://hardianto-chan.herokuapp.com', '/api/bot/gura', {
    apikey: 'hardianto',
    nama: text
  })
    await conn.sendFile(m.chat, apiUrl, 'image.png', global.packname, m)
}
handler.command = /^gura$/i
handler.register = true
handler.limit = true

module.exports = handler