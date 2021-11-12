let handler = async (m, { conn }) => {
let vn = './src/sound/waalaikumsalam.mp3'
conn.sendFile(m.chat, vn, 'waalaikumsalam.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /^Ass?alamu'?alaikum$/g
handler.command = new RegExp
module.exports = handler