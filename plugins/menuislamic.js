let handler  = async (m, { conn, usedPrefix }) => {

let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 Islamic 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ _${usedPrefix}alquran_  [ 183 2 ]
┃ ❖ _${usedPrefix}asmaulhusna_
┃ ❖ _${usedPrefix}ayatkursi_
┃ ❖ _${usedPrefix}bacaanshalat_
┃ ❖ _${usedPrefix}doaharian_
┃ ❖ _${usedPrefix}hadis_
┃ ❖ _${usedPrefix}kisahnabi_
┃ ❖ _${usedPrefix}niatshalat_
┃ ❖ _${usedPrefix}shalat_  [ daerah ]
┃ ❖ _${usedPrefix}tahlil_
┃ ❖ _${usedPrefix}wirid_
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu Islamic', 'status@broadcast')
  }
handler.help = ['islamicmenu']
handler.tags = ['main']
handler.command = /^islamicmenu$/i
handler.register = false
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
