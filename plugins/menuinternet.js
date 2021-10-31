let handler  = async (m, { conn, usedPrefix }) => {
  
let teks = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 INTERNET 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃    Ⓛ   = limit
┃ ❖ _${usedPrefix}brainly_  [ soal ] Ⓛ
┃ ❖ _${usedPrefix}cekresi_  [ kurir|resi ]
┃ ❖ _${usedPrefix}chord_  [ judul lagu ] Ⓛ
┃ ❖ _${usedPrefix}infocuaca_  [ kota ]
┃ ❖ _${usedPrefix}fetch_  [ url ]
┃ ❖ _${usedPrefix}get_  [ url ]
┃ ❖ _${usedPrefix}google_  [ pencarian ] Ⓛ
┃ ❖ _${usedPrefix}kanji_  Ⓛ
┃ ❖ _${usedPrefix}lirik_  [ judul lagu ] Ⓛ
┃ ❖ _${usedPrefix}lrc_  [ judul lagu ] Ⓛ
┃ ❖ _${usedPrefix}wiki_  [ query ] Ⓛ
┃ ❖ _${usedPrefix}wikipedia_  [ query ]
┃ ❖ _${usedPrefix}calc_  [ expression ]
┃ ❖ _${usedPrefix}base64_
┃ ❖ _${usedPrefix}carigrup_  [ pencarian ] Ⓛ
┃ ❖ _${usedPrefix}githubsearch_  [ pencarian ] Ⓛ
┃ ❖ _${usedPrefix}inspect_  [ link whatsapp ] Ⓛ
┃ ❖ _${usedPrefix}kodebahasa_
┃ ❖ _${usedPrefix}ping_
┃ ❖ _${usedPrefix}speed_
┃ ❖ _${usedPrefix}style_  [ teks ]
┃ ❖ _${usedPrefix}tr_  [ lang  teks ]
┃ ❖ _${usedPrefix}tts_  [ lang  teks ]
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()
    conn.fakeReply(m.chat, teks, '0@s.whatsapp.net', 'Internet Menu', 'status@broadcast')
  }
handler.help = ['intermenu']
handler.tags = ['main']
handler.command = /^intermenu$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
