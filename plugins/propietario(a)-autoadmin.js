let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw `*🔥⚠️𝙔𝘼 𝙀𝙎 𝘼𝘿𝙈𝙄𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙈𝙄 𝗢𝗪𝗡𝗘𝗥 🙊🔥*`
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.command = /^admin.|atad|autoadmin$/i
handler.rowner = true
handler.botAdmin = true
export default handler
