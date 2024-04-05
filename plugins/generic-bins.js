let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
const pp = './storage/logos/Menu2.jpg'
const fkontak = {'key': {'participants': '0@s.whatsapp.net', 'fromMe': false, 'id': '3B64558B07848BD81108C1D14712018E'}, 'message': {'locationMessage': {'name': `彡 𝐌𝐨𝐝𝐞𝐫𝐦𝐞 𝐁𝐲 𝐆𝐋 𝐘𝐓 𝐌𝐗`, `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'}

let bins = `┏━━ 𝖢𝖮𝖬𝖠𝖭𝖣𝖮𝖲 ━━⪩
┃
┃ 🌹 ${usedPrefix}bin *(6 DIGITOS)*
┃ 🌹 *EJEMPLO:* ${usedPrefix}bin 759385xxxx
┃
┃ 🌹 ${usedPrefix}gen *(6-8 DIGITOS)*
┃ 🌹 *EJEMPLO:* ${usedPrefix}gen 74792185xxxx
┃
┃
┃
┃
┃
┃
┗━━━━━━━━━━━⪩`

conn.sendMessage(m.chat, {text: bins, mentions: [m.sender]}, {quoted: m})

//conn.reply(m.chat, `*🚩 Ocurrió un fallo*`)

}
handler.help = ['love']
handler.tags = ['juegos']
handler.command = /^(bins|bin|byns)$/i

handler.register = true

export default handler
