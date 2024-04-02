export async function before(m) {
  
const username = conn.getName(m.sender)

{'key': {'participants': '0@s.whatsapp.net', 'fromMe': false, 'id': '3B64558B07848BD81108C1D14712018E'}, 'message': {'locationMessage': {'name': `${user}`, 'jpegThumbnail': await (await fetch(pp)).buffer(), 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'}
  
if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
  
let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`_✨ BIENVENIDO ✨_ 

_SOY MYLINGBOT-MD DISFRUTA DE MIS FUNCIONES Y COMANDOS 👻_

_🌹 RECUERDATE SEGUIRME EN MI CANAL DE WHATSAPP PARA RECIBIR TODAS LAS ACTUALIZACIONES E INFORMACIONES_
*${cnl}*

_ESCRIBE EL COMANDO /MENU PARA VER TODAS MIS FUNCIONES Y UN MENU HERMOSO 💖_
`) 
user.pc = new Date * 1
}
