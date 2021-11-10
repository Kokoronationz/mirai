let fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let items = ["loli anime", "anime loli", "loli girl"];
let loli = items[Math.floor(Math.random() * items.length)];
  let res = await fetch(global.API('zeks', '/api/pinimg', {
    q: loli
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
//handler.help = ['loli']
//handler.tags = ['weebs']
handler.command = /^(loli)$/i
handler.limit = true
module.exports = handler
