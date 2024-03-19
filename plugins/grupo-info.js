let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
const groupAdmins = participants.filter(p => p.admin) 
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = 
`✦ - - ${lenguajeMY['smsGI1']()} - - ✦

⇢ ${lenguajeMY['smsGI2']()}
・ ${groupMetadata.id}

⇢ ${lenguajeMY['smsGI3']()}
・ ${groupMetadata.subject}

⇢ ${lenguajeMY['smsGI4']()}
・ ${groupMetadata.desc?.toString() || lenguajeMY['smsGI5']()}

⇢ ${lenguajeMY['smsGI6']()}
・ ${participants.length} ${lenguajeMY['smsGI7']()}

⇢ ${lenguajeMY['smsGI8']()}
・ @${owner.split('@')[0]}

⇢ ${lenguajeMY['smsGI9']()}
${listAdmin}

*《 - - - - - - - 𓃠 ${vs} - - - - - - - 》*
`.trim()
  
await conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })   
//await conn.sendButton(m.chat, wm, text, pp, [[lenguajeMY.smsGI10(), '.on'], [lenguajeMY.smsConMenu(), '/menu']], m, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
