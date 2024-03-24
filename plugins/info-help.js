var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = imagen5,
const cat = `
彡 ⪻ 𝐌𝐲𝐥𝐢𝐧𝐠𝐁𝐨𝐭-𝐌𝐃 ⪼ 彡

_HOLA VI QUE NECESITAS AYUDA O ASISTENCIA SOBRE EL BOT._
_PUEDES COMUNICARTE CON NUESTRO EQUIPO DE SOPORTE PARA RESOLVER SU CASO._
_TEN EN CUENTA QUE NUESTRO EQUIPO NO SE HACE RESPONSABLE DEL MAL USO Y BOTS MODIFICADOS DEL MISMO_

_PUEDE CONTACTARNOS POR LOS SIGUIENTES MEDIOS_

- ⧎ WHATSAPP
   *${asistencia}*
   
- ⧎ TELEGRAM
   *${asistencia2}*
   
«─────────────»
`

await conn.sendFile(m.chat, pp, 'Hola.mp3', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(help|2help|3help|4help|5help|help1|help2|help3|help4|help5|ayuda|2ayuda|3ayuda|4ayuda|5ayuda|ayuda1|ayuda2|ayuda3|ayuda4|ayuda5)$/i

export default handler
