const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
        let res = await fetch(global.API('xteam', '/randomimage/husbu2', {}, 'APIKEY'))
        if (res.status != 200) throw await res.text()
        let img = await res.buffer()
        conn.sendFile(m.chat, img, '', '*Nih*', m, false, { thumbnail: Buffer.alloc(0) })
    } catch (e) {
        throw `Limit apikey habis atau error!`
    }
}
//handler.help = ['husbu']
//handler.tags = ['weebs']
handler.command = /^(husbu)$/i
handler.limit = true

module.exports = handler
