let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 CONVERTER 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ _${usedPrefix}halah_
┃ ❖ _${usedPrefix}hilih_
┃ ❖ _${usedPrefix}huluh_
┃ ❖ _${usedPrefix}heleh_
┃ ❖ _${usedPrefix}holoh_
┃ ❖ _${usedPrefix}tobraille_
┃ ❖ _${usedPrefix}shorturl_
┃ ❖ _${usedPrefix}toimg_
┃ ❖ _${usedPrefix}toimg2_
┃ ❖ _${usedPrefix}togif_
┃ ❖ _${usedPrefix}tovideo_
┃ ❖ _${usedPrefix}toptt_
┃ ❖ _${usedPrefix}tts_
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu Converter', 'status@broadcast')
  }
handler.help = ['convertermenu']
handler.tags = ['main']
handler.command = /^convertermenu$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
