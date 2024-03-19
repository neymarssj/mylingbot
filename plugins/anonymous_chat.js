async function handler(m, { usedPrefix, command }) {
command = command.toLowerCase()
this.anonymous = this.anonymous ? this.anonymous : {}
switch (command) {
case 'next':
case 'leave': {
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) return this.sendMessage(m.chat, { text: `${lenguajeMY['smsChatAn1']()}\n${lenguajeMY['smsChatAn2']()}`}, { quoted: m })
//this.sendButton(m.chat, `${lenguajeMY['smsChatAn1']()}`, lenguajeMY.smsChatAn2() + wm, null, [[lenguajeMY.smsChatAn3(), `.start`]], m)
m.reply(`${lenguajeMY['smsChatAn4']()}`)
let other = room.other(m.sender) 
if (other) await this.sendMessage(other, { text: `${lenguajeMY['smsChatAn5']()}`}, { quoted: m })
//this.sendButton(other, `${lenguajeMY['smsChatAn5']()}`, lenguajeMY.smsChatAn6() + wm, null, [[lenguajeMY.smsChatAn3(), `.start`]], m)
delete this.anonymous[room.id]
if (command === 'leave') break
}
case 'start': {
if (Object.values(this.anonymous).find(room => room.check(m.sender))) return this.sendMessage(m.chat, { text: `${lenguajeMY['smsChatAn7']()}`}, { quoted: m })
//this.sendButton(m.chat, `${lenguajeMY['smsChatAn7']()}`, lenguajeMY.smsChatAn8() + wm, null, [[lenguajeMY.smsChatAn9(), `.leave`]], m)
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
await this.sendMessage(room.a, { text: `${lenguajeMY['smsChatAn10']()}`}, { quoted: m })
//this.sendButton(room.a, `${lenguajeMY['smsChatAn10']()}`, lenguajeMY.smsChatAn11() + wm, null, [[lenguajeMY.smsChatAn12(), `.next`]], m)
room.b = m.sender
room.state = 'CHATTING'
await this.sendMessage(m.chat, { text: `${lenguajeMY['smsChatAn10']()}`}, { quoted: m })
//this.sendButton(m.chat, `${lenguajeMY['smsChatAn10']()}`, lenguajeMY.smsChatAn11() + wm, null, [[lenguajeMY.smsChatAn12(), `.next`]], m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
await this.sendMessage(m.chat, { text: `${lenguajeMY['smsChatAn13']()}`}, { quoted: m })
//this.sendButton(m.chat, `${lenguajeMY['smsChatAn13']()}`, lenguajeMY.smsChatAn8() + wm, null, [[lenguajeMY.smsChatAn9(), `.leave`]], m)
}
break
}}}
handler.help = ['start', 'leave', 'next']
handler.tags = ['anonymous']
handler.command = ['start', 'leave', 'next']
handler.private = true
export default handler


