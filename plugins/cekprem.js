let handler = async (m, { conn, usedPrefix }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let users = global.db.data.users[who].premdate
  let sisa = msToDate (users - new Date()*1)
  conn.send2Button(m.chat, `_Dear ${await conn.getName(m.sender)}, Masa aktif premium kamu tersisa ${sisa}_`, 'Silahkan perpanjang ke Owner', 'Perpanjang', '.premium', 'Owner', '.owner')
}
//handler.help = ['cekprem']
//handler.tags = ['main']
handler.command = /^cekprem(ium)?$/
handler.register = true

module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " hari " + hours + " jam " + minutes + " menit";
    // +minutes+":"+sec;
}