let handler  = async (m, { conn, usedPrefix, command }) => {
const m = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

let picture = '.media/menus/Menu2.jpg'
let gata = `
┏━━⪼ 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 ≪━━◉
┃
┃*${usedPrefix}bin (6 DIGITOS)*
┃*EJEMPLO: ${usedPrefix}bin 759385xxxx*
┃
┃
┃
┃
┃
┃
┃
┃
┃
`
await conn.sendFile(m.chat, picture, 'Hola.mp3', gata, m)}

handler.command = /^(generarbin|generarbins|genericbin|genericbins|generatebins|binshacking|bins)/i
export default handler
