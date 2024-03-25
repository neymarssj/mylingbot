import fs from 'fs'  
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
// let pp = gataVidMenu.getRandom()
let pareja = global.db.data.users[m.sender].pasangan 
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd, DD [de] MMMM [del] YYYY || HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

let menu = `
彡 𝐌𝐲𝐥𝐢𝐧𝐠𝐁𝐨𝐭-𝐌𝐃 彡

- 𝐖𝐈𝐋𝐒𝐎𝐍𝐎𝐅𝐂
- 𝐢𝐙𝐢
- 𝐆𝐋 𝐘𝐓 𝐌𝐗
- 𝐀𝐫𝐱𝐞𝐥𝐃𝐞𝐯 (𝐀.𝐌) 

ᖫ━━━━━━━━━━━━━━ᖭ

⪨━━❅•°• 𝐃𝐀𝐓𝐀 •°•❅━━⪩

彡 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐃𝐎𝐒 » ${rtotalreg}/${totalreg}
彡 _${lenguajeMY['smsUptime']()}_ » _${uptime}_ 
彡 _${lenguajeMY['smsVersion']()}_ » _${vs}_
彡 _${lenguajeMY['smsMode']()}_ » _${global.opts['self'] ? `${lenguajeMY['smsModePrivate']().charAt(0).toUpperCase() + lenguajeMY['smsModePrivate']().slice(1).toLowerCase()}` : `${lenguajeMY['smsModePublic']().charAt(0).toUpperCase() + lenguajeMY['smsModePublic']().slice(1).toLowerCase()}`}_
彡 _${lenguajeMY['smsBanChats']()}_ » _${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_

⪨━•❅•°•━━━━━━━•°•❅•━⪩

---- 𝙼𝙾𝙳𝙴𝚁𝙼𝙴 𝙱𝚈 𝚆𝙸𝙻𝚂𝙾𝙽 ----

ᖫ━━•❅•°• 𝐓𝐔 𝐈𝐍𝐅𝐎 •°•❅•━━ᖭ

𖠰 𝐓𝐈𝐏𝐎 𝐃𝐄 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 » ${user.registered === true ? `${user.registroC === true ? '𝖱𝖤𝖦𝖨𝖲𝖳𝖱𝖮 𝖢𝖮𝖬𝖯𝖫𝖤𝖳𝖮' : '𝖱𝖤𝖦𝖨𝖲𝖳𝖱𝖮 𝖱𝖠𝖯𝖨𝖣𝖮'}` : '✕ 𝖲𝖨𝖭 𝖱𝖤𝖦𝖨𝖲𝖳𝖱𝖮'}
𖠰 𝐄𝐒𝐓𝐀𝐃𝐎 » ${typeof user.miestado !== 'string' ? '✕ ' + usedPrefix + 'MIESTADO' : '_ME SIENTO' + user.miestado + '_'}
𖠰 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐀𝐃𝐎 » ${user.registered === true ? '✓' : '✕ ' + usedPrefix + 'VERIFICAR'}
𖠰 ${lenguajeMY['smsBotonM7']().charAt(0).toUpperCase() + lenguajeMY['smsBotonM7']().slice(1).toLowerCase()} » ${user.premiumTime > 0 ? '✓' : '✕ ' + usedPrefix + 'PASE PREMIUM'}
𖠰 ${lenguajeMY['smsBotonM5']().charAt(0).toUpperCase() + lenguajeMY['smsBotonM5']().slice(1).toLowerCase()} » ${role}
𖠰 ${lenguajeMY['smsBotonM6']().charAt(0).toUpperCase() + lenguajeMY['smsBotonM6']().slice(1).toLowerCase()} » ${emoji} || ${user.exp - min}/${xp}
𖠰 ${lenguajeMY['smsPareja']()} ${pareja ? `\n*»_ ${name} 💕 ${conn.getName(pareja)}` : `» ღ *${lenguajeMY['smsResultPareja']()}*`}
𖠰 𝐏𝐀𝐒𝐀𝐓𝐈𝐄𝐌𝐏𝐎(𝐒) ⧎ » ${user.pasatiempo === 0 ? 'SIN REGISTRO' : user.pasatiempo}

ᖫ━━━•━━━━━•━━━ᖭ

·͙⁺˚•̩̩✩•̩̩˚⁺‧͙⁺˚•̩̩ - ✩•̩̩˚⁺‧͙⁺˚•̩̩✩•̩̩˚⁺‧͙·͙⁺˚•̩̩✩•̩̩˚⁺ ·͙⁺˚•̩̩✩•̩̩˚⁺
 ｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟ･｡🍒  🍒｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟﾟ･｡·͙⁺

┏━━━━ 𝐓𝐔 𝐍𝐈𝐕𝐄𝐋 ━━━━◈
┃꧁TU NIVEL CON MYLINGBOT-MD
┃
┃ _EXPERIENCIA ➟_ ${exp} ×͜×
┃ _DIAMANTES ➟_ ${limit} 💎
┃ _MYLINGCOINS ➟_ ${money} ⫹⫺
┃ _TOKENS ➟_ ${joincount} ⧎
┗━━━━━━━━━━━━━◉

┏━━━ 𝐈𝐍𝐅𝐎 - 𝐌𝐘 ━━━━⪼
┃⏤͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͟͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞͞DESCUBRE TODA LA INFORMACION DE MYLINGBOT-MD
┃
┃𖥑 _${usedPrefix}cuentasmyling | cuentasmy_
┃𖥑 _${usedPrefix}gruposmy | grupos_
┃𖥑 _${usedPrefix}donar | donate_
┃𖥑 _${usedPrefix}listagrupos | grouplist_
┃𖥑 _${usedPrefix}estado | heymy | status_
┃𖥑 _${usedPrefix}infomyling | infobot_
┃𖥑 _${usedPrefix}instalarbot | installbot_
┃𖥑 _${usedPrefix}creador | owner_      
┃𖥑 _${usedPrefix}velocidad | ping_      
┃𖥑 _términos y condiciones_
┃𖥑 _Bot_ 
┗━━━━━━━━━━━━𖣘

┏━𖢻 𝐒𝐔𝐁 - 𝐁𝐎𝐓 𖢻━━━⚙︎
┃𖡦 CONVIERTE EN SUB - BOT
┃𖤐 _${usedPrefix}serbot | jadibot_
┃𖤐 _${usedPrefix}serbot --code | jadicode_
┃𖤐 _${usedPrefix}infosubbot | infosub_
┃𖤐 _${usedPrefix}bots | listjadibots_
┃𖤐 _${usedPrefix}detener | stop_
┗━━━━━━━━━━━━𖤍

┏━━ 𝐑𝐄𝐏𝐎𝐑𝐓𝐄𝐒 ━━𖡹
┃
┃🜲 _${usedPrefix}reporte *texto*_
┃🜲
┃🜲 _REPORTE UN COMANDO, EN CASO DE QUE FALLE O TENGA ERRORES._
┗━━━━━━━━━━𖡹

╭═══⟬𖣘 _USUARIO(A) PREMIUM_ 𖣘⟭═══⊷❍
┃◈╭──────────────
┃◈│ _${usedPrefix}listapremium | listprem_
┃◈│ _${usedPrefix}pase premium_
┃◈│ _${usedPrefix}pass premium_
┃◈╰───────────────
╰═════════════════⊷

╭════〘𖢻 _ENTRETENIMIENTO_ 𖢻〙════⊷❍
│
│☭│ _${usedPrefix}trivia 
│☭│ _${usedPrefix}acertijo_
│☭│ _${usedPrefix}palabra | ordenar_
│☭│ _${usedPrefix}pelicula | adv_
┃☭│ _${usedPrefix}mates | matemáticas | math_
┃☭│ _${usedPrefix}ppt *piedra : papel : tijera*_
┃☭│ _${usedPrefix}lanzar *cara* | *cruz*_
┃☭│ _${usedPrefix}tictactoe | ttt *sala*_
┃☭│ _${usedPrefix}deltictactoe | delttt_
┃☭│ _${usedPrefix}topgays_
┃☭│ _${usedPrefix}topotakus_
┃☭│ _${usedPrefix}toppajer@s_
┃☭│ _${usedPrefix}topput@s_ 
┃☭│ _${usedPrefix}topintegrantes | topintegrante_
┃☭│ _${usedPrefix}toplagrasa | topgrasa_
┃☭│ _${usedPrefix}toppanafrescos | toppanafresco_
┃☭│ _${usedPrefix}topshiposters | topshipost_
┃☭│ _${usedPrefix}toplindos | toplind@s_ 
┃☭│ _${usedPrefix}topfamosos | topfamos@s_
┃☭│ _${usedPrefix}topparejas | top5parejas_ 
┃☭│ _${usedPrefix}gay | gay *@tag*_ 
┃☭│ _${usedPrefix}gay2 *nombre : @tag*_ 
┃☭│ _${usedPrefix}lesbiana *nombre : @tag*_ 
┃☭│ _${usedPrefix}manca *nombre : @tag*_
┃☭│ _${usedPrefix}manco *nombre : @tag*_
┃☭│ _${usedPrefix}pajero *nombre : @tag*_
┃☭│ _${usedPrefix}pajera *nombre : @tag*_
┃☭│ _${usedPrefix}puto *nombre : @tag*_
┃☭│ _${usedPrefix}puta *nombre : @tag*_
┃☭│ _${usedPrefix}rata *nombre : @tag*_
┃☭│ _${usedPrefix}love *nombre : @tag*_
┃☭│ _${usedPrefix}ship | shipear *nombre1 nombre2*_
┃☭│ _${usedPrefix}doxear *nombre : @tag*_
┃☭│ _${usedPrefix}doxxeame_
┃☭│ _${usedPrefix}apostar | slot *cantidad*_
┃☭│ _${usedPrefix}pregunta *texto*_
┃☭│ _${usedPrefix}formarpareja_ 
┃☭│ _${usedPrefix}dado_
┃☭│ _${usedPrefix}verdad_
┃☭│ _${usedPrefix}reto_
┃☭│ _${usedPrefix}juegos_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭═══〘卐 _IA KATASHI_ 卐〙═══⊷❍
┃☭╭──────────────
┃☭│ _puedes buscar lo que deseas usando:_
┃☭│ _${usedPrefix}simi | ia *texto*_
┃☭│ _${usedPrefix}alexa | siri | cortana *texto*_ 
┃☭│ _${usedPrefix}simsimi | bixby *texto*_
┃☭╰───────────────
╰═════════════════⊷

╭════≪𖤌 AJUSTES EN CHATS/GRUPOS 𖤌≫════⊷❍
│➢ _PUEDES MEJORAR TUS GRUPOS CON MYLINGBOT-MD_
┃☭│ _${usedPrefix}on *:* off *bienvenida | welcome*_
┃☭│ _${usedPrefix}on *:* off *avisos | detect*_
┃☭│ _${usedPrefix}on *:* off *autonivel | autolevelup*_
┃☭│ _${usedPrefix}on *:* off *restringir | restrict*_
┃☭│ _${usedPrefix}on *:* off *antillamar | anticall*_
┃☭│ _${usedPrefix}on *:* off *publico | public*_
┃☭│ _${usedPrefix}on *:* off *autovisto | autoread*_
┃☭│ _${usedPrefix}on *:* off *temporal*_
┃☭│ _${usedPrefix}on *:* off *stickers*_
┃☭│ _${usedPrefix}on *:* off *autosticker*_
┃☭│ _${usedPrefix}on *:* off *reacciones | reaction*_
┃☭│ _${usedPrefix}on *:* off *audios*_
┃☭│ _${usedPrefix}on *:* off *modocaliente | modohorny*_
┃☭│ _${usedPrefix}on *:* off *antitoxicos | antitoxic*_
┃☭│ _${usedPrefix}on *:* off *antiver | antiviewonce*_ 
┃☭│ _${usedPrefix}on *:* off *antieliminar | antidelete*_ 
┃☭│ _${usedPrefix}on *:* off *antinternacional | antifake*_
┃☭│ _${usedPrefix}on *:* off *antienlace | antilink*_
┃☭│ _${usedPrefix}on *:* off *antienlace2 | antilink2*_
┃☭│ _${usedPrefix}on *:* off *antitiktok | antitk*_
┃☭│ _${usedPrefix}on *:* off *antiyoutube | antiyt*_
┃☭│ _${usedPrefix}on *:* off *antitelegram | antitel*_
┃☭│ _${usedPrefix}on *:* off *antifacebook | antifb*_
┃☭│ _${usedPrefix}on *:* off *antinstagram | antig*_
┃☭│ _${usedPrefix}on *:* off *antitwitter | antitw*_
┃☭│ _${usedPrefix}on *:* off *soloprivados | pconly*_
┃☭│ _${usedPrefix}on *:* off *sologrupos | gconly*_
┃☭╰─────────────────❍
╰══════════════════════════⊷

╭════〘✲ _DESCARGAS_ ✮〙════⊷❍
│➥ _DESCARGUE O BUSQUE TODO LO QUE QUIERA CON MYLINGBOT-MD_
┃☭│ _${usedPrefix}imagen | image *texto*_
┃☭│ _${usedPrefix}pinterest | dlpinterest *texto*_
┃☭│ _${usedPrefix}wallpaper|wp *texto*_
┃☭│ _${usedPrefix}play | play2 *texto o link*_
┃☭│ _${usedPrefix}play.1 *texto o link*_
┃☭│ _${usedPrefix}play.2 *texto o link*_ 
┃☭│ _${usedPrefix}ytmp3 | yta *link*_ 
┃☭│ _${usedPrefix}ytmp4 | ytv *link*_
┃☭│ _${usedPrefix}pdocaudio | ytadoc *link*_
┃☭│ _${usedPrefix}pdocvieo | ytvdoc *link*_
┃☭│ _${usedPrefix}tw |twdl | twitter *link*_
┃☭│ _${usedPrefix}facebook | fb *link*_
┃☭│ _${usedPrefix}instagram *link video o imagen*_
┃☭│ _${usedPrefix}verig | igstalk *usuario(a)*_
┃☭│ _${usedPrefix}ighistoria | igstory *usuario(a)*_
┃☭│ _${usedPrefix}tiktok *link*_
┃☭│ _${usedPrefix}tiktokimagen | ttimagen *link*_
┃☭│ _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
┃☭│ _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
┃☭│ _${usedPrefix}mediafire | dlmediafire *link*_
┃☭│ _${usedPrefix}clonarepo | gitclone *link*_
┃☭│ _${usedPrefix}clima *país ciudad*_
┃☭│ _${usedPrefix}consejo_
┃☭│ _${usedPrefix}morse codificar *texto*_
┃☭│ _${usedPrefix}morse decodificar *morse*_
┃☭│ _${usedPrefix}fraseromantica_
┃☭│ _${usedPrefix}historia_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭═══〘卐 _Chat ANONIMO_ 卐〙═══⊷❍
┃ _podras enviar mensajes a otra
┃ _persona usando a Katashi bot_
┃
┃☭│ _${usedPrefix}chatanonimo | anonimochat_
┃☭│ _${usedPrefix}anonimoch_
┃☭│ _${usedPrefix}start_
┃☭│ _${usedPrefix}next_
┃☭│ _${usedPrefix}leave_
┃☭╰───────────────
╰═════════════════════⊷
 
╭════〘卐 _GRUPOS_ 卐〙════⊷❍
│➢ _CONFIGURACION EN GRUPOS CON MYLINGBOT-MD_
┃☭│ _${usedPrefix}add *numero*_
┃☭│ _${usedPrefix}sacar | ban | kick  *@tag*_
┃☭│ _${usedPrefix}grupo *abrir : cerrar*_
┃☭│ _${usedPrefix}group *open : close*_
┃☭│ _${usedPrefix}daradmin | promote *@tag*_
┃☭│ _${usedPrefix}quitar | demote *@tag*_
┃☭│ _${usedPrefix}banchat_
┃☭│ _${usedPrefix}unbanchat_
┃☭│ _${usedPrefix}banuser *@tag*_
┃☭│ _${usedPrefix}unbanuser *@tag*_
┃☭│ _${usedPrefix}admins *texto*_
┃☭│ _${usedPrefix}invocar *texto*_ 
┃☭│ _${usedPrefix}tagall *texto*_
┃☭│ _${usedPrefix}hidetag *texto*_
┃☭│ _${usedPrefix}infogrupo | infogroup_
┃☭│ _${usedPrefix}grupotiempo | grouptime *Cantidad*_ 
┃☭│ _${usedPrefix}advertencia *@tag*_ 
┃☭│ _${usedPrefix}deladvertencia *@tag*_
┃☭│ _${usedPrefix}delwarn *@tag*_
┃☭│ _${usedPrefix}crearvoto | startvoto *texto*_ 
┃☭│ _${usedPrefix}sivotar | upvote_
┃☭│ _${usedPrefix}novotar | devote_
┃☭│ _${usedPrefix}vervotos | cekvoto_
┃☭│ _${usedPrefix}delvoto | deletevoto_
┃☭│ _${usedPrefix}enlace | link_
┃☭│ _${usedPrefix}newnombre | nuevonombre *texto*_
┃☭│ _${usedPrefix}newdesc | descripcion *texto*_   
┃☭│ _${usedPrefix}setwelcome | bienvenida *texto*_   
┃☭│ _${usedPrefix}setbye | despedida *texto*_  
┃☭│ _${usedPrefix}nuevoenlace | resetlink_
┃☭│ _${usedPrefix}on_
┃☭│ _${usedPrefix}off_   
┃☭╰─────────────────❍
╰══════════════════⊷❍
 
╭════〘💕 _PAREJAS_ 💕〙════⊷❍
│🌟 _ENCUENTRA TU PAREJA 💕_
┃☭│ _${usedPrefix}listaparejas | listship_
┃☭│ _${usedPrefix}mipareja | mylove_
┃☭│ _${usedPrefix}pareja | couple *@tag*_
┃☭│ _${usedPrefix}aceptar | accept *@tag*_
┃☭│ _${usedPrefix}rechazar | decline *@tag*_
┃☭│ _${usedPrefix}terminar | finish *@tag*_
┃☭╰─────────────────❍
╰══════════════════⊷❍
 
╭════〘卐 _Votaciones en grupos_ 卐〙════⊷❍
│⭐ _REALIZA ENCUESTAS/VOTACIONES EN TUS GRUPOS_
┃☭│ _${usedPrefix}crearvoto | startvoto *texto*_ 
┃☭│ _${usedPrefix}sivotar | upvote_ 
┃☭│ _${usedPrefix}novotar | devote_ 
┃☭│ _${usedPrefix}vervotos | cekvoto_
┃☭│ _${usedPrefix}delvoto | deletevoto_ 
┃☭╰─────────────────❍
╰══════════════════⊷❍ 
 
╭════〘卐 _Comandos +18_ 卐〙════⊷❍
│🜲╭──────────────❍
│🜲│_COMANDOS +18_
┃🜲│_${usedPrefix}hornymenu_ 
┃🜲╰──────────────❍
╰══════════════════⊷❍
 
╭════〘卐 _CONVERTIDORES_ 卐〙════⊷❍
│
┃☭│ _${usedPrefix}toimg | img | jpg *sticker*_ 
┃☭│ _${usedPrefix}toanime | jadianime *foto*_
┃☭│ _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
┃☭│ _${usedPrefix}tovn | vn *video o audio*_
┃☭│ _${usedPrefix}tovideo *audio*_
┃☭│ _${usedPrefix}tourl *video, imagen*_
┃☭│ _${usedPrefix}toenlace  *video, imagen o audio*_
┃☭│ _${usedPrefix}tts es *texto*_
┃☭╰─────────────────❍
╰══════════════════⊷❍ 
 
╭════〘卐 _LOGOS - ICONOS_ 卐〙════⊷❍
│☭╭─────────────────
┃☭│ _${usedPrefix}logos *efecto texto*_
┃☭│ _${usedPrefix}menulogos2_
┃☭╰─────────────────
╰══════════════════⊷❍

╭════〘卐 _EFECTOS - IMP_ 卐〙════⊷❍
│☭╭─────────────────❍
┃☭│ _${usedPrefix}simpcard *@tag*_
┃☭│ _${usedPrefix}hornycard *@tag*_
┃☭│ _${usedPrefix}lolice *@tag*_
┃☭│ _${usedPrefix}ytcomment *texto*_
┃☭│ _${usedPrefix}itssostupid_
┃☭│ _${usedPrefix}pixelar_
┃☭│ _${usedPrefix}blur_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘卐 _IMAGENES ANIME Y MAS_ 卐〙════⊷❍
│
┃☭│ _${usedPrefix}chica_ 
┃☭│ _${usedPrefix}chico_
┃☭│ _${usedPrefix}cristianoronaldo_
┃☭│ _${usedPrefix}messi_
┃☭│ _${usedPrefix}meme_
┃☭│ _${usedPrefix}meme2_
┃☭│ _${usedPrefix}itzy_
┃☭│ _${usedPrefix}blackpink_
┃☭│ _${usedPrefix}kpop *blackpink : exo : bts*_
┃☭│ _${usedPrefix}lolivid_
┃☭│ _${usedPrefix}loli_
┃☭│ _${usedPrefix}navidad_
┃☭│ _${usedPrefix}ppcouple_
┃☭│ _${usedPrefix}neko_
┃☭│ _${usedPrefix}waifu_
┃☭│ _${usedPrefix}akira_
┃☭│ _${usedPrefix}akiyama_
┃☭│ _${usedPrefix}anna_
┃☭│ _${usedPrefix}asuna_
┃☭│ _${usedPrefix}ayuzawa_
┃☭│ _${usedPrefix}boruto_
┃☭│ _${usedPrefix}chiho_
┃☭│ _${usedPrefix}chitoge_
┃☭│ _${usedPrefix}deidara_
┃☭│ _${usedPrefix}erza_
┃☭│ _${usedPrefix}elaina_
┃☭│ _${usedPrefix}eba_
┃☭│ _${usedPrefix}emilia_
┃☭│ _${usedPrefix}hestia_
┃☭│ _${usedPrefix}hinata_
┃☭│ _${usedPrefix}inori_
┃☭│ _${usedPrefix}isuzu_
┃☭│ _${usedPrefix}itachi_
┃☭│ _${usedPrefix}itori_
┃☭│ _${usedPrefix}kaga_
┃☭│ _${usedPrefix}kagura_
┃☭│ _${usedPrefix}kaori_
┃☭│ _${usedPrefix}keneki_
┃☭│ _${usedPrefix}kotori_
┃☭│ _${usedPrefix}kurumi_
┃☭│ _${usedPrefix}madara_
┃☭│ _${usedPrefix}mikasa_
┃☭│ _${usedPrefix}miku_
┃☭│ _${usedPrefix}minato_
┃☭│ _${usedPrefix}naruto_
┃☭│ _${usedPrefix}nezuko_
┃☭│ _${usedPrefix}sagiri_
┃☭│ _${usedPrefix}sasuke_
┃☭│ _${usedPrefix}sakura_
┃☭│ _${usedPrefix}cosplay_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘卐 _MODIFICAR - AUDIOS_ 卐〙════⊷❍
│☭╭──────────────❍
┃☭│ _${usedPrefix}bass_
┃☭│ _${usedPrefix}blown_
┃☭│ _${usedPrefix}deep_
┃☭│ _${usedPrefix}earrape_
┃☭│ _${usedPrefix}fat_
┃☭│ _${usedPrefix}fast_
┃☭│ _${usedPrefix}nightcore_
┃☭│ _${usedPrefix}reverse_
┃☭│ _${usedPrefix}robot_
┃☭│ _${usedPrefix}slow_
┃☭│ _${usedPrefix}smooth_
┃☭│ _${usedPrefix}tupai_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘卐 _BUSQUEDAS_ 卐〙════⊷❍
│☭╭──────────────❍
┃☭│ _${usedPrefix}animeinfo *texto*_
┃☭│ _${usedPrefix}mangainfo *texto*_
┃☭│ _${usedPrefix}google *texto*_
┃☭│ _${usedPrefix}letra | lirik *texto*_
┃☭│ _${usedPrefix}ytsearch | yts *texto*_
┃☭│ _${usedPrefix}wiki | wikipedia *texto*_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘卐 _MENU - AUDIOS_ 卐〙════⊷❍
│ _SOLICITE EL MENU DE AUDIOS DE MYLINGBOT-MD_
┃ _USANDO EL COMANDO:_
┃☭│ _${usedPrefix}audios_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘卐 _✨ HERRAMIENTAS ✨_ 卐〙════⊷❍
│☭╭──────────────❍
┃☭│ _${usedPrefix}afk *motivo*_
┃☭│ _${usedPrefix}acortar *url*_
┃☭│ _${usedPrefix}calc *operacion math*_
┃☭│ _${usedPrefix}del *respondre a mensaje del Bot*_
┃☭│ _${usedPrefix}qrcode *texto*_
┃☭│ _${usedPrefix}readmore *texto1|texto2*_
┃☭│ _${usedPrefix}spamwa *numero|texto|cantidad*_
┃☭│ _${usedPrefix}styletext *texto*_
┃☭│ _${usedPrefix}traducir *texto*_
┃☭│ _${usedPrefix}morse codificar *texto*_
┃☭│ _${usedPrefix}morse decodificar *morse*_
┃☭│ _${usedPrefix}encuesta | poll *Motivo*_
┃☭│ _${usedPrefix}horario_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘卐 _RPG - SUBIR DE NIVEL_ 卐〙════⊷❍
┃☭╭─────────────────────────❍
┃☭│ _${usedPrefix}botemporal *enlace* *cantidad*_
┃☭│ _${usedPrefix}addbot *enlace* *cantidad*_
┃☭│ _${usedPrefix}pase premium_
┃☭│ _${usedPrefix}pass premium_
┃☭│ _${usedPrefix}listapremium | listprem_
┃☭│ _${usedPrefix}transfer *tipo cantidad @tag*_
┃☭│ _${usedPrefix}dar *tipo cantidad @tag*_
┃☭│ _${usedPrefix}enviar *tipo cantidad @tag*_
┃☭│ _${usedPrefix}balance_
┃☭│ _${usedPrefix}cartera | wallet_ 
┃☭│ _${usedPrefix}experiencia | exp_
┃☭│ _${usedPrefix}top | lb | leaderboard_
┃☭│ _${usedPrefix}nivel | level | lvl_
┃☭│ _${usedPrefix}rol | rango_
┃☭│ _${usedPrefix}inventario | inventory_ 
┃☭│ _${usedPrefix}aventura | adventure_ 
┃☭│ _${usedPrefix}caza | cazar | hunt_
┃☭│ _${usedPrefix}pescar | fishing_
┃☭│ _${usedPrefix}animales_ 
┃☭│ _${usedPrefix}alimentos_
┃☭│ _${usedPrefix}curar | heal_
┃☭│ _${usedPrefix}buy_
┃☭│ _${usedPrefix}sell_
┃☭│ _${usedPrefix}verificar | registrar_
┃☭│ _${usedPrefix}perfil | profile_
┃☭│ _${usedPrefix}myns_
┃☭│ _${usedPrefix}unreg *numero de serie*_
┃☭│ _${usedPrefix}minardiamantes | minargemas_
┃☭│ _${usedPrefix}minargatacoins | minarcoins_
┃☭│ _${usedPrefix}minarexperiencia | minarexp_
┃☭│ _${usedPrefix}minar *:* minar2 *:* minar3_
┃☭│ _${usedPrefix}reclamar | regalo | claim_
┃☭│ _${usedPrefix}cadahora | hourly_
┃☭│ _${usedPrefix}cadasemana | semanal | weekly_
┃☭│ _${usedPrefix}cadames | mes | monthly_
┃☭│ _${usedPrefix}cofre | abrircofre | coffer_
┃☭│ _${usedPrefix}trabajar | work_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭══〘卐 _TABLA DE CLASIFICACION_ 卐〙═⊷❍
┃☭╭─────────────────❍
┃☭│ _${usedPrefix}top | lb | leaderboard_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘卐 _STICKERS_ 卐〙════⊷❍
┃☭╭──────────────❍
┃☭│ _${usedPrefix}sticker | s *imagen o video*_
┃☭│ _${usedPrefix}sticker | s *url de tipo jpg*_
┃☭│ _${usedPrefix}emojimix *卐+😐*_
┃☭│ _${usedPrefix}scircle | círculo *imagen*_
┃☭│ _${usedPrefix}semoji | emoji *tipo emoji*_
┃☭│ _${usedPrefix}attp *texto*_
┃☭│ _${usedPrefix}attp2 *texto*_
┃☭│ _${usedPrefix}ttp *texto*_
┃☭│ _${usedPrefix}ttp2 *texto*_
┃☭│ _${usedPrefix}ttp3 *texto*_
┃☭│ _${usedPrefix}ttp4 *texto*_
┃☭│ _${usedPrefix}ttp5 *texto*_
┃☭│ _${usedPrefix}ttp6 *texto*_
┃☭│ _${usedPrefix}dado_
┃☭│ _${usedPrefix}stickermarker *efecto : responder a imagen*_ 
┃☭│ _${usedPrefix}stickerfilter *efecto : responder a imagen*_ 
┃☭│  _${usedPrefix}cs *:* cs2_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭══〘卐 _EDITAR STICKERS_ 卐〙═══⊷❍
┃☭╭─────────────────❍
┃☭│ _${usedPrefix}wm *packname|author*_
┃☭│ _${usedPrefix}wm *texto1|texto2*_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘卐 _ACCIONES - STICKERS_ 卐〙════⊷❍
┃☭╭────────────────────❍
┃☭│ _${usedPrefix}palmaditas | pat *@tag*_
┃☭│ _${usedPrefix}bofetada | slap *@tag*_
┃☭│ _${usedPrefix}golpear *@tag*_
┃☭│ _${usedPrefix}besar | kiss *@tag*_ 
┃☭│ _${usedPrefix}alimentar | food *@tag*_
┃☭╰─────────────────❍
╰══════════════════⊷❍

╭════〘✿ _PARA MI CREADOR(A)_ ✿〙════⊷❍
┃❀╭─────────────────────────❍
┃❀│ _${usedPrefix}join *enlace*_
┃❀│ _${usedPrefix}unete *enlace*_
┃❀│ _${usedPrefix}dardiamantes *cantidad*_
┃❀│ _${usedPrefix}darxp *cantidad*_
┃❀│ _${usedPrefix}darkatacoins *cantidad*_ 
┃❀│ _${usedPrefix}addprem | userpremium *@tag* *cantidad*_
┃❀│ _${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*_
┃❀│ _${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*_
┃❀│ _${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*_
┃❀│ _${usedPrefix}idioma | language_
┃❀│ _${usedPrefix}cajafuerte_
┃❀│ _${usedPrefix}comunicar | broadcastall | bc *texto*_
┃❀│ _${usedPrefix}broadcastchats | bcc *texto*_
┃❀│ _${usedPrefix}comunicarpv *texto*_
┃❀│ _${usedPrefix}broadcastgc *texto*_ 
┃❀│ _${usedPrefix}comunicargrupos *texto*_
┃❀│ _${usedPrefix}borrartmp | cleartmp_
┃❀│ _${usedPrefix}delexp *@tag*_
┃❀│ _${usedPrefix}delkatacoins *@tag*_
┃❀│ _${usedPrefix}deldiamantes *@tag*_
┃❀│ _${usedPrefix}reiniciar | restart_
┃❀│ _${usedPrefix}ctualizar | update_
┃❀│ _${usedPrefix}addprem | +prem *@tag*_
┃❀│ _${usedPrefix}delprem | -prem *@tag*_
┃❀│ _${usedPrefix}listapremium | listprem_
┃❀│ _${usedPrefix}añadirdiamantes *@tag cantidad*_
┃❀│_${usedPrefix}añadirxp *@tag cantidad*_
┃❀│ _${usedPrefix}añadirkatacoins *@tag cantidad*_
┃❀╰─────────────────❍
╰══════════════════⊷❍`.trim()
 
const vi = ['https://telegra.ph/file/45c66b22615c030476cc0.jpg',
'https://telegra.ph/file/e43024f4f2d970e3c7cbf.png',
'https://telegra.ph/file/40689ea4040746fd3d9d9.jpg']
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, ImgPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak })
} catch (e) {
await m.reply(lenguajeMY['smsMalError3']() + '\n*' + lenguajeMY.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeMY.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeMY.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeMY['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|info|comandos|menubot|ayuda|commands|commandos|menucompleto|allmenu|menumyling|menumy|\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
