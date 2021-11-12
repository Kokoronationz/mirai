let handler = async (m, { conn }) => {
conn.send2Button(m.chat, 'Bisa ga sih kalo chat itu jangan  ```P P P```', 'Utamakan Salam (Hai, Hallo, dll.)', 'Menu', '.menu', 'Donasi', '.donasi')
}
handler.customPrefix = /^Pp?p?$/g
handler.command = new RegExp
module.exports = handler