const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
        let res = await fetch(global.API('xteam', '/randomimage/zettairyouiki', {}, 'APIKEY'))
        if (res.status != 200) throw await res.text()
        let img = await res.buffer()
        conn.sendFile(m.chat, img, '', '*Nih wibu*', m, false, { thumbnail: Buffer.alloc(0) })
    } catch (e) {
        throw `Limit apikey habis atau error!`
    }
}
//handler.help = ['zettairyouiki']
//handler.tags = ['weebs']
handler.command = /^(zettairyouiki)$/i
handler.limit = true

module.exports = handler
