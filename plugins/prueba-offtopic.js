import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@whiskeysockets/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'

let handler = async (m, { conn, usedPrefix }) => {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
    const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
    const groups = chats.filter(([id]) => id.endsWith('@g.us'))
    const used = process.memoryUsage()
    const { restrict } = global.db.data.settings[conn.user.jid] || {}
    const { autoread } = global.opts
    const grup = './no.png'
    let old = performance.now()
    let neww = performance.now()
    let speed = neww - old
    let name = await conn.getName(m.sender)
    const user = global.db.data.users[m.sender];
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    const pp = await conn.profilePictureUrl(who, 'image').catch((_) => null) || './src/avatar_contact.png';
    let thumbnail;
    if (pp !== './src/avatar_contact.png') {
        thumbnail = await (await fetch(pp)).buffer();
    } else {
        thumbnail = await (await fetch('https://telegra.ph/file/8ca14ef9fa43e99d1d196.jpg')).buffer();
    }

    let nomeDelBot = user && user.nomedelbot ? user.nomedelbot : "BixbyBot-Md"; // Utilizza il valore predefinito se non è definito

    let prova = {
        "key": {
            "participants": "0@s.whatsapp.net",
            "fromMe": false,
            "id": "Halo"
        },
        "message": {
            "locationMessage": {
                name: `${nomeDelBot}`,
                jpegThumbnail: await (await fetch('https://telegra.ph/file/d3fe674b5ce692076a352.jpg')).buffer(),
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;Unlimited;;;\nFN:Unlimited\nORG:Unlimited\nTITLE:\nitem1.TEL;waid=19709001746:+1 (970) 900-1746\nitem1.X-ABLabel:Unlimited\nX-WA-BIZ-DESCRIPTION:ofc\nX-WA-BIZ-NAME:Unlimited\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

    let text = `
══════ •⊰✧⊱• ══════ 
✦‌⃟ᗒ ${usedPrefix}𝐩𝐫𝐨𝐩𝐫𝐢𝐞𝐭𝐚𝐫𝐢𝐨 
✦‌⃟ᗒ ${usedPrefix}𝐟𝐮𝐧𝐳𝐢𝐨𝐧𝐢
✦‌⃟ᗒ ${usedPrefix}𝐚𝐝𝐦𝐢𝐧
✦‌⃟ᗒ ${usedPrefix}𝐠𝐫𝐮𝐩𝐩𝐨
✦‌⃟ᗒ ${usedPrefix}𝐥𝐨𝐠𝐡𝐢
✦‌⃟ᗒ ${usedPrefix}𝐚𝐮𝐝𝐢𝐨
✦‌⃟ᗒ ${usedPrefix}𝐨𝐰𝐧𝐞𝐫
✦‌⃟ᗒ ${usedPrefix}𝐬𝐜𝐫𝐢𝐩𝐭
✦‌⃟ᗒ ${usedPrefix}𝐢𝐧𝐬𝐭𝐚𝐥𝐥𝐚
✰‌⃟ᗒ ${usedPrefix}𝐜𝐫𝐞𝐝𝐢𝐭𝐢               ᵐᵒᵈᵈᵉᵈ ᵇʸ ᵈᵃⁿⁱ
══════ •⊰✧⊱• ══════ `.trim() 
conn.sendMessage(m.chat, { text: text, contextInfo:{
  "externalAdReply": {"title": `𝐔𝐭𝐞𝐧𝐭𝐞 : ${name} `, 
 "body": `𝐕𝐞𝐫𝐬𝐢𝐨𝐧𝐞 𝐁𝐨𝐭: ${vs}`, 
  "previewType": "PHOTO",
  "thumbnail": thumbnail,
  "sourceUrl": `https://whatsapp.com/channel/0029Va8SHGnId7nJi8Zdnz3x`, 
  "mediaType": 1}}}, {quoted: prova})
}
handler.help = ['menu']
handler.tags = ['menu']
handler.command = /^(offtopic|topicsc)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
