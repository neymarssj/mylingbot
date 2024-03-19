/* 
import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
try{
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
wm = global.wm
vs = global.vs
      
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let pareja = global.db.data.users[m.sender].pasangan 
let user = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const sections = [{
title: comienzo + ' ' + lenguajeMY['smsLista1']() + ' ' + fin,
rows: [
{title: lenguajeMY['smsLista2'](), rowId: `${usedPrefix}creadora`},
{title: lenguajeMY['smsLista3'](), rowId: `${usedPrefix}donar`},
{title: lenguajeMY['smsLista4'](), rowId: `${usedPrefix}ping`},
{title: lenguajeMY['smsLista5'](), rowId: `${usedPrefix}infomenu`},
{title: lenguajeMY['smsLista6'](), rowId: `${usedPrefix}allmenu`},
{title: lenguajeMY['smsLista7'](), rowId: `${usedPrefix}instalarbot`},
{title: lenguajeMY['smsLista8'](), rowId: `${usedPrefix}serbot`},
{title: lenguajeMY['smsLista9'](), rowId: `${usedPrefix}términos`, description: '\n'}
]},{
title: comienzo + ' ' + lenguajeMY['smsLista10']() + ' ' + fin,
rows: [
{title: lenguajeMY['smsLista11'](), rowId: `${usedPrefix}top`},
{title: lenguajeMY['smsLista12'](), rowId: `${usedPrefix}listprem`},
{title: lenguajeMY['smsLista13'](), rowId: `${usedPrefix}pase premium`},
{title: lenguajeMY['smsLista14'](), rowId: `${usedPrefix}inventario 3`},
{title: lenguajeMY['smsLista15'](), rowId: `${usedPrefix}rpgmenu`},
{title: lenguajeMY['smsLista16'](), rowId: `${usedPrefix}buy`},
{title: lenguajeMY['smsLista17'](), rowId: `${usedPrefix}inventory`, description: '\n'}
]},{	
title: comienzo + ' ' + lenguajeMY['smsLista18']() + ' ' + fin,
rows: [
{title: lenguajeMY['smsLista19'](), rowId: `${usedPrefix}descargasmenu`},
{title: lenguajeMY['smsLista20'](), rowId: `${usedPrefix}buscarmenu`},
{title: lenguajeMY['smsLista21'](), rowId: `${usedPrefix}convertidormenu`},
{title: lenguajeMY['smsLista22'](), rowId: `${usedPrefix}audioefectomenu`},
{title: lenguajeMY['smsLista22_1'](), rowId: `${usedPrefix}herramientasmenu`, description: '\n'}
]},{
title: comienzo + ' ' + lenguajeMY['smsLista23']() + ' ' + fin,
rows: [
{title: lenguajeMY['smsLista24'](), rowId: `${usedPrefix}juegosmenu`},
{title: lenguajeMY['smsLista25'](), rowId: `${usedPrefix}audios`},
{title: lenguajeMY['smsLista26'](), rowId: `${usedPrefix}stickermenu`},
{title: lenguajeMY['smsLista27'](), rowId: `${usedPrefix}makermenu`},
{title: lenguajeMY['smsLista28'](), rowId: `${usedPrefix}menulogos2`},
{title: lenguajeMY['smsLista29'](), rowId: `${usedPrefix}randommenu`},
{title: lenguajeMY['smsLista30'](), rowId: `${usedPrefix}hornymenu`, description: '\n'}
]},{	
title: comienzo + ' ' + lenguajeMY['smsLista31']() + ' ' + fin,
rows: [
{title: lenguajeMY['smsLista32'](), rowId: `${usedPrefix}grupomenu`},
{title: lenguajeMY['smsLista33'](), rowId: `${usedPrefix}listas`},
{title: lenguajeMY['smsLista34'](), rowId: `${usedPrefix}on`},
{title: lenguajeMY['smsLista35'](), rowId: `${usedPrefix}ownermenu`}
]}]

const listMessage = {
text: `╭━⊰ *${ucapan()}* ⊱━⬣
┃
┃ *︾ U S U A R I O ︾*
┃
┃»» *${user.genero === 0 ? '👤' : user.genero == 'Ocultado 🕶️' ? `🕶️` : user.genero == 'Mujer 🚺' ? `🚺` : user.genero == 'Hombre 🚹' ? `🚹` : '👤'} ${user.registered === true ? user.name : name}*
┃»» *Mi estado* ➺ ${typeof user.miestado !== 'string' ? '_#miestado || Estado no asignado_' : '_Me siento ' + user.miestado + '_'}
┃»» *Registrado ➺ ${user.registered === true ? '✅' : '❌ _#verificar_'}* 
┃»» *Premium ➺ ${user.premiumTime > 0 ? '✅' : '❌ _#pase premium_'}*
┃
┃ *︾ M E N U ︾*
┃
┃✜ *${lenguajeMY['smsVersion']()}* 
┃➺ \`\`\`${vs}\`\`\`
┃✜ *Tipo de registro* 
┃➺ ${user.registered === true ? `_${user.registroC === true ? 'Registro Completo 🗂️' : 'Registro Rápido 📑'}_` : '_' + usedPrefix + 'verificar_'} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✜ *${lenguajeMY['smsTotalUsers']()}* 
┃➺ _${Object.keys(global.db.data.users).length}_
┃✜ *Registrados* 
┃➺ _${rtotalreg}/${totalreg}_
┃✜ *${lenguajeMY['smsMode']()}* 
┃➺ _${global.opts['self'] ? `*${lenguajeMY['smsModePrivate']()}*` : `*${lenguajeMY['smsModePublic']()}*`}_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✜ *${lenguajeMY['smsTime']()}* 
┃➺ _${time}_ 	    
┃✜ *${lenguajeMY['smsUptime']()}* 
┃➺ _${uptime}_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✜ *${lenguajeMY['smsBanChats']()}* 
┃➺ _${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_ 
┃✜ *${lenguajeMY['smsBanUsers']()}* 
┃➺ _${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_
┃
╰━⊰ *${wm}* ⊱━⬣\n
*»» ✨ Pasatiempo(s)* ➺ ${user.pasatiempo === 0 ? '*Sin Registro*' : user.pasatiempo + '\n'}
*»» ${lenguajeMY['smsPareja']()} ➺ ${pareja ? `${name} 💕 ${conn.getName(pareja)}` : `🛐 ${lenguajeMY['smsResultPareja']()}`}* ${(conn.user.jid == global.conn.user.jid ? '' : `\n»» *Sub Bot del:* wa.me/${global.conn.user.jid.split`@`[0]}`) || ''}`,
footer: `*↓ TRUSTED LINK* ✅
${readMore}${redesMenu.getRandom()}`, //${name} ${ucapan()} //lenguajeMY['smsMenu']()
title: null,
buttonText: `${lenguajeMY['smsListaMenu']()}`, 
sections }
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})


} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeMY['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeMY.smsMensError1(), `#reporte ${lenguajeMY['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeMY['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
//handler.register = true
handler.exp = 50
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = `${lenguajeMY['smsSaludo']()}`
  if (time >= 4) {
    res = `${lenguajeMY['smsDia']()}`
  }
  if (time >= 11) {
    res = `${lenguajeMY['smsTarde']()}`
  }
  if (time >= 15) {
    res = `${lenguajeMY['smsTarde2']()}`
  }
  if (time >= 17) {
    res = `${lenguajeMY['smsNoche']()}`
  }
  return res
} 
*/
