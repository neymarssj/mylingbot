import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 *#on stickers* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 𝘼𝙍𝙀 𝘿𝙄𝙎𝘼𝘽𝙇𝙀𝘿 𝙐𝙎𝙀 *#on stickers* 𝙏𝙊 𝙀𝙉𝘼𝘽𝙇𝙀`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0
 
let nombre = '𝐌𝐲𝐥𝐢𝐧𝐠𝐁𝐨𝐭-𝐌𝐃'
let nombre2 = ':: 𝐖𝐢𝐥𝐬𝐨𝐧𝐎𝐅𝐂'
 
const s = [
'https://telegra.ph/file/c4844411a7e81bc7e7997.jpg',
'https://telegra.ph/file/75909578d9d1104b95e1b.jpg',
'https://telegra.ph/file/fab0eefe87ef1cd1a3b62.png',
'https://telegra.ph/file/9c5b41124eb05ed7e8e0f.jpg',
'https://telegra.ph/file/154258d8b98975946ebb7.png',
'https://telegra.ph/file/0898fd8c6152070083a53.jpg',
'https://telegra.ph/file/77726a971beda163a94cf.jpg',
'https://telegra.ph/file/1102719d88d2a9138e2f3.png',
'https://telegra.ph/file/b023185a6fc6a90c9d4af.jpg',
'https://telegra.ph/file/758b42e7139b2d10c0930.jpg',
'https://c.tenor.com/woUBgv2VLKoAAAAC/didnt-xd.gif',
'https://telegra.ph/file/6f437c4970a34e2b55ae5.png',
'https://pbs.twimg.com/media/ExhbbMvWUAAjaTJ.jpg',
'https://i.pinimg.com/originals/51/ec/ca/51eccabf758cfa6ddf23a7d62b82fbcf.jpg',
'https://i0.wp.com/ytimg.googleusercontent.com/vi/MwM7FPazq6Q/maxresdefault.jpg?resize=650,400',
'https://i.gifer.com/99do.gif',
'https://i.gifer.com/G0ph.gif',
'https://telegra.ph/file/f2bd6c6b1dcf9a2811617.jpg',
'https://i.gifer.com/4q.gif' 
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
await delay(5 * 5000)
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
}
handler.customPrefix = /risa|xd|😂|🤣|🤪/i 
handler.command = new RegExp
handler.exp = 50
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
