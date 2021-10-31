let handler = async m => m.reply(`
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 DONASI 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ Pulsa|Dana|Gopay|Ovo|LinkAja
┃ ❖   [62895361677059]
┃ 
┃ ❖ https://saweria.com/Kokoronationz
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim()) // Tambah sendiri kalo mau
//handler.help = ['donasi']
//handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
