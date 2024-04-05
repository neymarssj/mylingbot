let handler  = async (m, { conn, usedPrefix, command }) => {

const img = ['https://telegra.ph/file/b015708e6b1b8329eb57c.jpg']
let myling = `
┏━━ 𝖢𝖮𝖬𝖠𝖭𝖣𝖮𝖲 ━━⪩
┃
┃ 🌹 ${usedPrefix}bin *(6 DIGITOS)*
┃ 🌹 *EJEMPLO:* ${usedPrefix}bin 759385xxxx
┃
┃ 🌹 ${usedPrefix}gen *(6-8 DIGITOS)*
┃ 🌹 *EJEMPLO:* ${usedPrefix}gen 74792185xxxx
┃
┃
┃
┃
┃
┃
┗━━━━━━━━━━━⪩

`
await conn.sendMessage(m.chat, { imagen: { url: img, gifPlayback: true, caption: myling, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak })
} catch (e)
handler.command = /^(generarbin|generarbins|genericbin|genericbins|generatebins|binshacking|menubins|binsmenu)/i
export default handler
