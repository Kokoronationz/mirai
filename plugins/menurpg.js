let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 RPG MENU 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ _${usedPrefix}adventure_
┃ ❖ _${usedPrefix}berpetualang_
┃ ❖ _${usedPrefix}mulung_
┃ ❖ _${usedPrefix}work_
┃ ❖ _${usedPrefix}feed_ <type>
┃ ❖ _${usedPrefix}inventori_
┃ ❖ _${usedPrefix}inv_
┃ ❖ _${usedPrefix}open_ <args> <jumlah>
┃ ❖ _${usedPrefix}use_ <potion> <jumlah>
┃ ❖ _${usedPrefix}heal_
┃ ❖ _${usedPrefix}shop_ <sell/buy> <args> <jumlah>
┃ ❖ _${usedPrefix}toko_ <sell/buy> <args> <jumlah>
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu To Play RPG Games', 'status@broadcast')
  }
handler.help = ['rpgmenu']
handler.tags = ['main']
handler.command = /^rpgmenu$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
