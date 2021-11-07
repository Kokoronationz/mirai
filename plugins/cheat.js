let num = /([0-9])$/i
let handler = async (m, { conn, command, args, text, usedPrefix }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.quoted.sender ? m.quoted.sender : m.sender
  
  let nama = await conn.getName(who)
  let dt = { // Switch Case Like :v
		'uang': global.db.data.users[who].uang,
		'healt': global.db.data.users[who].healt,
		'limit': global.db.data.users[who].limit,
		'level': global.db.data.users[who].level,
  }[(args[0] || '')]
  let count = parseInt(args[1])
  let salah = `
*Format salah! Contoh :*

tersedia:
uang
limit
healt
level

  *○ ${usedPrefix + command} uang 1000*
  *○ ${usedPrefix + command} limit 2*
`.trim()
  if (dt === undefined) throw salah
  if (!num.test(args[1])) throw 'Hanya Angka'
  dt += count
await m.reply(`${args[0]} ${nama} telah bertambah sebanyak ${count}`)
}

//handler.help = ['slot']
//handler.tags = ['game']
handler.command = /^(cheat)$/i
handler.owner = true

module.exports = handler