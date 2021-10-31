const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar\n\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format salah\n\n*${usedPrefix}daftar nama|umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 60) throw 'Maaf umur Anda terlalu tua'
  if (age < 17) throw 'Maaf Anda belum bisa mendaftar'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let caption = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 INFORMATION 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃
┃ *Nama:* ${name}
┃ *Umur:* ${age} tahun
┃ *Gift:* Rp10000
┃ *Registered:* ${rtotalreg}
┃ *Serial Number:* 
┃ ${sn}
┗ ┅ ━━━━━━━━━━━━━━━━━━━━━ ┅ ━

 _Simpan Serial Number anda!_
`.trim()
await conn.fakeReply(m.chat, caption,/* { 
  key: { 
    remoteJid: 'status@broadcast',
    participant:*/ '0@s.whatsapp.net', 
    /*fromMe: false 
  }, message: { 
    "imageMessage": { 
      "mimetype": "image/jpeg", 
      "caption": */`Registration Successful!`, /*
      "jpegThumbnail": tnbot} } }, { contextInfo: { mentionedJid: [m.sender] } }m*/'status@broadcast')
global.db.data.users[m.sender].uang += 10000
}
//handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
//handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

