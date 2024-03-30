var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = gataImg.getRandom()	
const cat = `
_彡 TEAM 彡_

_UNETE A NUESTRO TEAM OFICIAL DE WHATSAPP_

_CONSIGUE LAS ULTIMAS NOVEDADES DE TODOS LOS BOTS RELACIONADOS EN UN SOLO CANAL E INFORMACION RELEVANTE SOBRE EL TEAM_

*${nn2}*

_¿QUIERES SER DEL TEAM MYLING? _

_HABLA EL CREADOR DEL TEAM OFICIAL PARA BRIDARTE TODOS LOS DETALLES POSIBLES PARA UNIRTE TU Y TU BOT AL TEAM_
*${asistencia}*
`

await conn.sendFile(m.chat, pp, 'Hola.mp3', cat, fkontak)
}
handler.help = ['equipo', 'team']
handler.tags = ['info']
handler.command = /^(team|wateam|mylingteam|myteam|teamy|teammy|teammyling|teambot|equipomy|myequipo|equipo)$/i

export default handler
