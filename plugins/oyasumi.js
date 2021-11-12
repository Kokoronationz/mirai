let handler = async (m, { conn }) => {
let vn = './src/sound/oyasumi.mp3'
conn.sendFile(m.chat, vn, 'oyasumi.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /^Oyasumi(nasai)?$/g
handler.command = new RegExp
module.exports = handler