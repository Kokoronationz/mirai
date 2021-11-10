const axios = require('axios')

let handler = async (m, { conn, args  , usedPrefix, command })=>{
if(!args[0]) throw "Masukkan lokasi yang ingin di cek!"
    try{
        const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args[0]}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
        const res = await response
        const name = res.data.name
        const Country = res.data.sys.country
        const Weather= res.data.weather[0].description
        const Temperature = res.data.main.temp + '°C'
        const Minimum_Temperature= res.data.main.temp_min + '°C'
        const Maximum_Temperature= res.data.main.temp_max + '°C'
        const Humidity= res.data.main.humidity + '%'
        const Wind= res.data.wind.speed + 'km/h'

        conn.reply(m.chat,`
        🌸 Lokasi: ${name}\n💮 Negara: ${Country}\n🌈 Cuaca: ${Weather}\n🎋 Temperatur: ${Temperature}\n💠 Minimum Temperatur: ${Minimum_Temperature}\n📛 Maximum Temperatur: ${Maximum_Temperature}\n💦 Kelembapan: ${Humidity}\n🎐 Angin: ${Wind}
        `.trim(),m)
    }catch(e){
throw 'lokasi tidak ditemukan' 
console.log(e)
    }
}

//handler.help = ['weather','cuaca']
//handler.tags = ['internet']
handler.command = /^(weather|wthr|cuaca)$/i
handler.limit = true
module.exports = handler
