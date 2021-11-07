let num = /([0-9])$/i
let handler = async (m, { conn, command, args, text, usedPrefix }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.quoted.sender ? m.quoted.sender : m.sender
  let user = global.db.data.users[who]
  let nama = await conn.getName(who)
  let dt = { // Switch Case Like :v
		'uang': user.uang,
		'healt': user.healt,
		'limit': userlimit,
		'level': user.level,
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
  if (!num.test(count)) throw 'Hanya Angka'
  dt += count
await m.reply(`${args[0]} ${nama} telah bertambah sebanyak ${count}`)
}

//handler.help = ['slot']
//handler.tags = ['game']
handler.command = /^(cheat)$/i
handler.owner = true

module.exports = handler