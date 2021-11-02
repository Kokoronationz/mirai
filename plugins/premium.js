let handler  = async (m, { conn }) => {
  let bot = conn.user.name
  let teks = `
Gratis 1 hari percobaan untuk grup! Agar bot _*${bot}*_ tetap berada di grup anda dengan waktu lebih lama silahkan sewa bot dengan harga dibawah ini!
${readmore}
Info donasi untuk premium :
 • Donasi 10.000 = 1 bulan Premium
 • Donasi 20.000 = 2 bulan Premium
 • Donasi 30.000 = 3 bulan Premium
 • Donasi 40.000 = 4 bulan Premium
 • Donasi 50.000 = VIP PERMANEN

Invite bot ke grup :
 • Donasi 15.000 = 1 bulan 
 • Donasi 25.000 = 2 bulan 
 • Donasi 35.000 = 3 bulan 
 • Donasi 45.000 = 4 bulan 
 • Donasi 65.000 = VIP PERMANEN

Apa saja keuntungan premium?
 • Bisa Akses semua fitur
 • Limit UNLIMITED (Tidak Terbatas)
 • Dapat menambahkan bot ke grup Anda
 • Bisa jadi bot di nomor Anda.
 • Bonus saldo bot 100k untuk donasi 10 ribu dst.

Ayo gabung bersama mereka yang sudah donasi dan mendapatkan banyak keuntungan dengan akses semua fitur bot.
`.trim()
  conn.reply(m.chat, text, m)
  
}

handler.command = /^prem(imum)?$/i
handler.register = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)