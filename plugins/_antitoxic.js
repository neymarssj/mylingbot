const toxicRegex = /g0re|g0r3|g.o.r.e|chup4la|chup4l4|chupalo|chup4lo|chup4l0|chupal0|chupameesta|hijadeputa|cajetuda|putita|putito|put1t4|putit4|putit0|put1to|put1ta|pr0stitut4s|pr0stitutas|pr05titutas|pr0stitut45|prostitut45|prostituta5|pr0stitut45|pvt0|pvto|put0|afeminado|drog4|cocaína|marihuana|marihuano|chupapolla|estupida|idiota|maricon|verga|vrga|naco|zorra|zorras|zorr4|CP|cp|cepe|sepe|sepesito|cepecito|mamawebos|chupame|imbecil|embeciles|carajo|gore|gorreo|gordo|gorda|gordos|gordas|mierda|cerdo|cerda|puerco|puerca|perra|bitch|motherfucker|fucking/i

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner }) {
 
if (m.isBaileys && m.fromMe
return !0
if (!m.isGroup)
return !1
  let user = global.db.data.users[m.sender]
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let img = 'https://i.imgur.com/5Q1MqGD.jpg'
 const isToxic = toxicRegex.exec(m.text)
    
if (isToxic && chat.antitoxic && !isOwner && !isAdmin) {
user.warn += 1
if (!(user.warn >= 4)) await m.reply(`${user.warn == 1 ? `*@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, ${lenguajeMY['smsToxic1']()} (${isToxic}) ${lenguajeMY['smsToxic2']()} ${lenguajeMY['smsToxic3']()} *${user.warn}/4*\n\n${wm}`, false, { mentions: [m.sender] })}
/*await conn.sendButton(m.chat,`${user.warn == 1 ? `*@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`} *${lenguajeMY['smsToxic1']()} (${isToxic}) ${lenguajeMY['smsToxic2']()}*`, `${lenguajeMY['smsToxic3']()} *${user.warn}/4*\n\n${wm}`, img, [
[lenguajeMY.smsToxic4(), 'ok'],
[lenguajeMY.smsToxic5(), '.off antitoxic'],
[lenguajeMY.smsConMenu(), '/menu']], false, { mentions: [m.sender] })}*/

if (user.warn >= 4) {
user.warn = 0
await m.reply(`*${lenguajeMY['smsToxic6']()}*\n*@${m.sender.split`@`[0]} ${lenguajeMY['smsToxic7']()}*`, false, { mentions: [m.sender] })
user.banned = true
await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
//await this.updateBlockStatus(m.sender, 'block')
}
return !1
}                                                   
