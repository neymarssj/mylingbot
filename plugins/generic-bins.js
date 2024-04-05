let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
const pp = './storage/logos/Menu2.jpg'

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

conn.sendMessage(m.chat, {text: bins, mentions: [m.sender]}, {quoted: fkontak})

//conn.reply(m.chat, `*🚩 Ocurrió un fallo*`)

}
handler.help = ['love']
handler.tags = ['juegos']
handler.command = /^(bins|bin|byns)$/i

handler.register = true

export default handler