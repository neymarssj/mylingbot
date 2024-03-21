var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = gataImg.getRandom()	
const cat = `
彡 ⪻ 𝐌𝐲𝐥𝐢𝐧𝐠𝐁𝐨𝐭-𝐌𝐃 ⪼ 彡

«───» 𝐂𝐑𝐄𝐀𝐃𝐎𝐑 «───»
- 𝐖𝐈𝐋𝐒𝐎𝐍𝐎𝐅𝐂 - 𝐖𝐈𝐋𝐒𝐎𝐍
- ${asistencia}

- _CONTACTE A MI CREADOR PARA CUALQUIER CONSULTA O PROBLEMA QUE TENGA CON EL BOT._

«─────────────»
`

await conn.sendFile(m.chat, pp, 'Hola.mp3', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler
