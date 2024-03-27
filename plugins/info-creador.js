var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = gataImg.getRandom()	
const cat = `
彡-[𝐌𝐲𝐥𝐢𝐧𝐠𝐁𝐨𝐭-𝐌𝐃 彡
<ᴄᴏɴᴛᴀᴄᴛᴀ ᴀ ᴍɪ ᴄʀᴇᴀᴅᴏʀ>
- ɴᴜᴍᴇʀᴏ ᴅᴇ ᴍɪ ᴄʀᴇᴀᴅᴏʀ

- ${asistencia}

- *¿TIENES DUDAS DEL BOT?*

- *¿TIENES ALGUNA QUEJA CON EL BOT?*

- *¿TE GUSTARIA COMPARTIR OPINIONES Y/O SUGERENCIAS DEL BOT?*

*¡PERFECTO!*

> CONTACTA CON MI CREADOR PARA CUALQUIER TEMA DEL BOT, NO ESCRIBIR SI NO ES POR TEMA DEL BOT, EVITE PROBLEMAS.

(☽︎─────────────☾)
`

await conn.sendFile(m.chat, pp, 'Hola.mp3', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler
