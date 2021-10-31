// Pngocok handal

let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
    title: text
  }))
  await m.reply(global.wait)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.thumbnail.genius) throw json
  conn.sendFile(m.chat, json.thumbnail.genius, '', `
*${json.title}*
_${json.author}_

${json.lyrics}


${json.links.genius}
`, m)
}
//handler.help = ['lirik'].map(v => v + ' <Apa>')
//handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i
handler.register = true
handler.limit = true

module.exports = handler
