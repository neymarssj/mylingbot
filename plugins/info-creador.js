var handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let pp = gataImg.getRandom()	
const cat = `
┏━ ▣ ━━ ▣ ━━ ▣ ━━ ▣ ━━┓
┃
┃ ✿ 𝑴𝒚𝒍𝒊𝒏𝒈𝑩𝒐𝒕-𝑴𝑫 - 𝑪𝒓𝒆𝒂𝒅𝒐𝒓
┃ *${asistencia}*
┃
┃ ✿ 𝑴𝒚𝒍𝒊𝒏𝒈𝑩𝒐𝒕-𝑴𝑫 - 𝑪𝒐𝒍𝒂𝒃𝒐𝒓𝒂𝒅𝒐𝒓
┃ *${asistencia2}*
┃
┃ ✿ 𝑴𝒚𝒍𝒊𝒏𝒈𝑩𝒐𝒕-𝑴𝑫 - 𝑩𝒐𝒕
┃ *${bot}*
┃
┃ ➥ 𝘎𝘙𝘜𝘗𝘖 𝘖𝘍𝘐𝘊𝘐𝘈𝘓 𝘋𝘌 𝘔𝘠𝘓𝘐𝘕𝘎𝘉𝘖𝘛-𝘔𝘋
┃ *${grupos}*
┃
┃ ◉ 𝙈𝙔𝙇𝙄𝙉𝙂𝘽𝙊𝙏-𝙈𝘿 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼
┃ *${asistencia}* 
┗━ ▣ ━━ ▣ ━━ ▣ ━━ ▣ ━━┛`

await conn.sendFile(m.chat, pp, 'gata.mp4', cat, fkontak)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|propietario|dueño|dueña|propietaria|dueño|creadora|creador)$/i

export default handler
