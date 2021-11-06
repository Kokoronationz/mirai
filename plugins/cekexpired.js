let handler = async (m, { conn, isGroup, groupMetadata }) => {
  if (!isGroup) throw false
  let grup = global.db.data.chats[m.chat].expired
  let sisa = clockString (grup - new Date)
  conn.send2Button(m.chat, `_Sisa waktu Bot digrup *${groupMetadata.subject}* ${sisa}_`, 'Silahkan perpanjang ke Owner', 'Perpanjang', '.premium', 'Owner', '.owner')
}
//handler.help = ['cekexpired']
//handler.tags = ['main']
handler.command = /^cekexpired$/
handler.register = true

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}