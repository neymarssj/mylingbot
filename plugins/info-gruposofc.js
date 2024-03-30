let media = 'https://telegra.ph/file/0aa0867cdec565ba979f0.png'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `💕 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊(𝘼) 𝘼 𝙇𝙊𝙎 𝙂𝙍𝙐𝙋𝙊𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎

💞 𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙏𝙃𝙀 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝙂𝙍𝙊𝙐𝙋𝙎
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙏𝙚 𝙞𝙣𝙫𝙞𝙩𝙤 𝙖 𝙦𝙪𝙚 𝙩𝙚 𝙪𝙣𝙖𝙨 𝙖 𝙡𝙖 𝘾𝙤𝙢𝙪𝙣𝙞𝙙𝙖𝙙 𝙈𝙮𝙡𝙞𝙣𝙜𝘽𝙤𝙩. ✨ 𝙏𝙚𝙣 𝙪𝙣 𝙗𝙪𝙚𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤 𝙚 𝙞𝙣𝙩𝙚𝙧𝙖𝙘𝙘𝙞𝙤𝙣𝙖 𝙘𝙤𝙣 𝙉𝙤𝙨𝙤𝙩𝙧𝙤𝙨. 👻
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𓃠 *Versión de MylingBot-MD*
➥ ${vs}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙍𝙐𝙋𝙊𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎 ${gt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✨ *Informate de las Novedades!!!*
𝐶𝑎𝑛𝑎𝑙𝑒𝑠 𝑑𝑒 𝑀𝑦𝑙𝑖𝑛𝑔𝐵𝑜𝑡 👻 *${cnl}*\n
*${nna}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 *${nna2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 *${nn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 *${nnn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 *${nnnt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 *${nnntt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 *${nnnttt}*\n

const vi = ['https://telegra.ph/file/0aa0867cdec565ba979f0.png']
await conn.sendMessage(m.chat, { image: { url: vi.getRandom() }, ImgPlayback: true, caption: str, mentions: [m.sender, global.conn.user.jid] }, fkontak)}
//conn.sendHydrated(m.chat, str, `👻 𝐆𝐑𝐔𝐏𝐎𝐒 𝐎𝐅𝐂 👻\n${asistencia}\n\n` + wm, media, 'https://github.com/WilsomOFC/MylingBot-MD', '𝐓𝐇𝐄 𝐎𝐅𝐂', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^linkgc|grupos|gruposkatashibot|gatabotgrupos|gruposkatashibot|groupofc|gruposkb|grupokb|groupkb$/i
handler.exp = 33

export default handler
