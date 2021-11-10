let fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let items = ["husbu anime", "anime husbu", "cowo anime", "anime ganteng"];
let husbu = items[Math.floor(Math.random() * items.length)];
  let res = await fetch(global.API('zeks', '/api/pinimg', {
    q: husbu
  }, 'apikey'))
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.status) throw json
  let pint = json.data[Math.floor(Math.random() * json.data.length)];
  conn.sendFile(m.chat, pint, '', `
*Nih pedo!*
${text}
`.trim(), m)
}
//handler.help = ['husbu']
//handler.tags = ['weebs']
handler.command = /^(husbu)$/i
handler.limit = true
module.exports = handler
