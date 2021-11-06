let handler  = async (m, { conn, text }) => {
  
let name = conn.getName(m.sender)
let pesan = `_Hai ${name}, saya disini:D_\n\n_Ada yang bisa saya bantu?_`
conn.fakeReply(m.chat, pesan, '0@s.whatsapp.net', 'Salam Hangat Dari Owner', 'status@broadcast')
}
handler.customPrefix = /^Bot/i.test(m.text)
handler.command = new RegExp

module.exports = handler