let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './media/menus/img10.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let uptime = clockString(_uptime)
let estado = `╭── ✦ ──『 𝙀𝙎𝙏𝘼𝘿𝙊 』── ✦ ── ❖ ──╗
┃✧ *¡Hola!* ${name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ *👻 MylingBot-MD 👻*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *ACTIVO DURANTE:* ${uptime}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *USUARIOS:* ${Object.keys(global.db.data.users).length} 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *CHATS PROHIBIDOS:* ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *USUARIOS PROHIBIDOS:* ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} 
╰─ ❖ ── ✦ ── ✧ ── ✦ ── ❖ ──╝`
await conn.sendFile(m.chat, picture, 'Hola.mp3', estado, fkontak) // TESTEO CON ESTO DESPUES /*false, { contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: ds, body: ' 𝑴𝒚𝒍𝒊𝒏𝒈𝑩𝒐𝒕-𝑴𝑫 ', previewType: 0, thumbnail: tagmd, sourceUrl: accountsmy }}})*/
}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|heygata|stado|stats|botstat(us)?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
