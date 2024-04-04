let handler = m => m
handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)

if (/^e$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`Que bueno sabe la letra E`, `eeeeee`, `que pasa una fototeta dice?`, `:v`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^@5493795319022$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`no etiquetes a mi creador hijo de tu putam madre`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

//if (/^Mande porno|porno|paja$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`no puedo esta contra las política del grupo. 👻`, `_uff miren un pajero_`, `_pagame y paso mi pack😏🥵_`, `_que_`, `_que quiere pija dice 🤣_`, `_pasa el pack de tu hermana😏_`, `_pasas una fototeta? 🤨📸_`, `_siuuu sexo sexo sexo😈_`, '_callate negro no tiene derecho XD_'])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^reglas|normas|Reglas$/i.test(m.text) ) { //sin prefijo 
    conn.reply(m.chat, `┏━🜲 ⚠️ 𝐒𝐈𝐆𝐔𝐄 𝐋𝐀𝐒 𝐑𝐄𝐆𝐋𝐀𝐒 ⚠️ 🜲━┓*
❌ 𝐏𝐑𝐎𝐇𝐈𝐁𝐈𝐃𝐎 𝐋𝐋𝐀𝐌𝐀𝐑 𝐀𝐋 𝐁𝐎𝐓
❌ 𝐏𝐑𝐎𝐇𝐈𝐁𝐈𝐃𝐎 𝐄𝐋 𝐒𝐏𝐀𝐌 𝐀𝐋 𝐁𝐎𝐓
❌ 𝐍𝐎 𝐀𝐆𝐑𝐄𝐆𝐀𝐑 𝐀𝐋 𝐁𝐎𝐓 𝐀 𝐆𝐑𝐔𝐏𝐎𝐒
❌ 𝐑𝐄𝐒𝐏𝐄𝐓𝐀𝐑 𝐋𝐎𝐒 𝐓𝐄𝐑𝐌𝐈𝐍𝐎𝐒 𝐘 𝐂𝐎𝐍𝐃𝐈𝐂𝐈𝐎𝐍𝐄𝐒 𝐃𝐄𝐋 𝐁𝐎𝐓
*≫ 𝐌𝐘𝐋𝐈𝐍𝐆-𝐁𝐎𝐓-𝐌𝐃 ≪*`, fkontak, m) //wm, null, [['Menu', '#menu']], m) botones :V

}

       if (/^hola|halo|hello|hi$/i.test(m.text) ) { //sin prefijo 
     conn.reply(m.chat, `HOLA BRO :D`, fkontak, m)

 }
 
if (/^¿que es un bot?|Que es un bot|Que es MylingBot?$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `╭┄〔 *${wm}* 〕┄⊱
┆ ——————«•»——————
┆ ☆:: ¿𝐐𝐔𝐄 𝐄𝐒 𝐔𝐍 𝐁𝐎𝐓 𝐃𝐄 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏? ::☆
┆——————«•»——————
┆UN BOT DE WHATSAPP O UN BOT ES UN PROGRAMA DE SOFTWARE AVANZADO CREADO POR CODIGOS DE PROGRAMACION, ESTOS SON CREADOS POR DIFERENTES DESARROLLADORES Y DIFERENTES MOTIVOS O OBJECTIVOS A REALIZARSE.
┊
┊LOS BOTS EN ESTE CASO DE WHATSAPP CUMPLEN FUNCIONALIDADES UNICAS Y MEJORADAS.
┊
┊LOS BOTS DE WHATSAPP SIRVEN O SE UTILIZA PARA DESCARGAR TODO TIPO DE CONTENIDO EN REDES SOCIALES COMO ARCHIVOS/AUDIOS/IMAGENES O MULTIMEDIA, ADEMAS SON UTLIZABLES TANTO EN GRUPOS COMO PRIVADO TAMBIEN SIRVEN PARA HACER GESTIONES DE TUS GRUPOS COMO ELIMINAR O AGREGAR USUARIOS O SILENCIARLOS Y MUCHO MAS.
┆ 
┆ 「 ⓂⓎⓁⒾⓃⒼ-ⒷⓄⓉ-ⓂⒹ 」
╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ*`, m) //wm, null, [['Menu', '#menu']], m) botones :V


return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

