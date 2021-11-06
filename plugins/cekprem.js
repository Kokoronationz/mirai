let handler = async (m, { conn, usedPrefix }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let users = global.db.data.users[who].premdate
  let sisa = clockString (users - new Date)
  conn.send2Button(m.sender, `_Dear ${await conn.getName(m.sender)}, Masa aktif premium kamu tersisa ${sisa}_`, 'Silahkan perpanjang ke Owner', 'Perpanjang', '.premium', 'Owner', '.owner')
}
//handler.help = ['cekprem']
//handler.tags = ['main']
handler.command = /^cekprem(ium)?$/
handler.register = true

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}