import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]

if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(gataImg, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '☆𝑴𝒚𝒍𝒊𝒏𝒈𝑩𝒐𝒕-𝑴𝑫☆', body: '𝖡𝗒: 𝖶𝗂𝗅𝗌𝗈𝗇 - 𝖶𝖺𝗈𝗌', sourceUrl: `https://github.com/WilsonOFC/MylingBot-MD/`, thumbnail: gataImg}}})}

return !0 }
export default handler