import axios from 'axios'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${lenguajeMY['smsAvisoMG']()}Hᴏʟᴀ ǫᴜᴇʀɪᴅᴏ ᴜsᴜᴀʀɪᴏ 😃, ᴘᴀʀᴀ ᴅᴇsᴄᴀʀɢᴀʀ ᴜɴ ᴀʀᴄʜɪᴠᴏ ᴛɪᴇɴᴇs ǫᴜᴇ ᴘᴏɴᴇʀ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ʏ ᴜɴ ʟɪɴᴋ 😉.\n\nᴅɪsғʀᴜᴛᴀ ᴅᴇʟ ʙᴏᴛ 😀.`
try {  
let res = await mediafireDl(args[0])
let { name, size, date, mime, link } = res
let caption = `${eg}
┃✿︎ 😀 *${gt} ${vs}* 😀 ✿︎
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✿︎ⁿᵒᵐᵇʳᵉ | ᴅᴇʟ ᴀʀᴄʜɪᴠᴏ✿︎
┃ ${name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✿︎ᴛᴀᴍᴀɴ̃ᴏ✿︎
┃ ${size}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ✿︎ᵗⁱᵖᵒ ༒︎ᵗʸᵖᵉ✿︎
┃ ${mime}`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝗠𝘆𝗹𝗶𝗻𝗴𝗕𝗼𝘁-𝗠𝗗| 𝗪𝗶𝗹𝘀𝗼𝗻𝗢𝗙𝗖',
body: 'Bᴏᴛ ˢᵘᶜᵘˡᵉⁿᵗᵒ',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/MylingBot-MD/WilsonOFC`}}})
   await conn.sendFile(m.chat, link, name, '', m, null, { mimetype: mime, asDocument: true })
} catch (e) {
m.reply(`${fg}Rᴇɪɴᴛᴇɴᴛᴀʟᴏ ɴᴜᴇᴠᴀᴍᴇɴᴛᴇ. Tɪᴇɴᴇ ǫᴜᴇ sᴇʀ ᴜɴ ᴇɴʟᴀᴄᴇ ᴠᴀʟɪᴅᴏ ᴅᴇ ᴍᴇᴅɪᴀғɪʀᴇ.\n\nPᴏʀ ᴄᴜᴀʟǫᴜɪᴇʀ ᴘʀᴏʙʟᴇᴍᴀ ᴄᴏɴ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ᴄᴏɴᴛᴀᴄᴛᴇsᴇ ᴄᴏɴ ᴇʟ ᴄʀᴇᴀᴅᴏʀ ᴜ ᴏᴡɴᴇʀs.`)
handler.limit = false      
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
handler.register = true
handler.limit = true
export default handler

async function mediafireDl(url) {
const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/','')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`)
const $ = cheerio.load(res.data)
const link = $('#downloadButton').attr('href')
const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ','').replaceAll('\n','')
const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text()
const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ','')
let mime = ''
let rese = await axios.head(link)
mime = rese.headers['content-type']
return { name, size, date, mime, link }
}
