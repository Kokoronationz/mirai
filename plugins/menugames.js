let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 GAMES 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃    Ⓛ   = limit
┃ ❖ _${usedPrefix}asahotak_  Ⓛ
┃ ❖ _${usedPrefix}caklontong_  Ⓛ
┃ ❖ _${usedPrefix}dadu_
┃ ❖ _${usedPrefix}dare_
┃ ❖ _${usedPrefix}delsesittt_  Ⓛ
┃ ❖ _${usedPrefix}family100_  Ⓛ
┃ ❖ _${usedPrefix}iqtest_
┃ ❖ _${usedPrefix}math_  [ mode ] Ⓛ
┃ ❖ _${usedPrefix}siapakahaku_  Ⓛ
┃ ❖ _${usedPrefix}slot_  [ jumlah uang ] Ⓛ
┃ ❖ _${usedPrefix}suit_
┃ ❖ _${usedPrefix}suitpvp_
┃ ❖ _${usedPrefix}suit2_
┃ ❖ _${usedPrefix}susunkata_  Ⓛ
┃ ❖ _${usedPrefix}tebakbendera_  Ⓛ
┃ ❖ _${usedPrefix}tebakgambar_  Ⓛ
┃ ❖ _${usedPrefix}tebakkata_  Ⓛ
┃ ❖ _${usedPrefix}tebakkimia_  Ⓛ
┃ ❖ _${usedPrefix}tebaklagu_  Ⓛ
┃ ❖ _${usedPrefix}tebaklirik_  Ⓛ
┃ ❖ _${usedPrefix}tebaktebakan_  Ⓛ
┃ ❖ _${usedPrefix}tekateki_  Ⓛ
┃ ❖ _${usedPrefix}tictactoe_  [ custom room name ] Ⓛ
┃ ❖ _${usedPrefix}ttt_  [ custom room name ] Ⓛ
┃ ❖ _${usedPrefix}truth_
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
  conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Menu For Playing Games And Have Fun', 'status@broadcast')
  }
handler.help = ['gamesmenu']
handler.tags = ['main']
handler.command = /^gamesmenu$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
