let handler  = async (m, { conn, usedPrefix, command }) => {
const fkontak = {'key': {'participants': '0@s.whatsapp.net', 'fromMe': false, 'id': '3B64558B07848BD81108C1D14712018E'}, 'message': {'locationMessage': {'name': `彡 𝐌𝐨𝐝𝐞𝐫𝐦𝐞 𝐁𝐲 𝐆𝐋 𝐘𝐓 𝐌𝐗`, 'jpegThumbnail': await (await fetch(img5)).buffer(), 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'}

let picture = './media/menus/img5.jpg'
let myling = `
┏━━ 𝖢𝖮𝖬𝖠𝖭𝖣𝖮𝖲 ━━⪩
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
┗━━━━━━━━━━━⪩

`
await conn.sendFile(m.chat, picture, 'Hola.mp3', myling, fkontak)}

handler.command = /^(generarbin|generarbins|genericbin|genericbins|generatebins|binshacking|bins)/i
export default handler
