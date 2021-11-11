let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/Xmell91/loli/master/loli.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
await m.reply(global.wait)
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Random Loli', '© 栗山未来', 'Next', '.loli', m)
}
//handler.command = /^(loli)$/i
//handler.tags = ['otaku']
handler.help = ['loli']
handler.register = true
handler.limit = true
module.exports = handler